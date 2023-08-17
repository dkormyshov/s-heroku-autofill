const express = require('express')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express()
const port = process.env.PORT || 3000

app.use(express.json({extended: true, limit: '1mb'}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// api endpoint
app.post('/autofill', async (req, res) => {
    const body = req.body
    // console.log(body);

    const url = "https://jsonplaceholder.typicode.com/comments?id=1"

    let result = "0";

    await fetch(url)
        .then(response => response.json())
        .then(jsonData => result = `${jsonData[0].body.length}`)



        // {
        //     fieldValues: deriveAutofillPolicyUpdates(data, updatesToBeMade),
        //     updateExposures: newUpdateExposures?.length ? newUpdateExposures : undefined,
        //     addExposures: newCreateExposures?.length ? newCreateExposures : undefined,
        //     updateFieldGroups: newUpdateFieldGroups?.length ? newUpdateFieldGroups : undefined,
        //     addFieldGroups: newCreateFieldGroups?.length ? newCreateFieldGroups : undefined,
        //   }


    // resend json data
    // res.status(200).json({
    //     ...body,
    //     updates: {
    //         ...body.updates,
    //         fieldValues: {
    //             ...body.updates.fieldValues,
    //             policyAgentName: [
    //                 result
    //             ]
    //         }
    //     }
    // })

    res.status(200).json({
        fieldValues: {
            policyAgentName: [
                                result
                            ]
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






