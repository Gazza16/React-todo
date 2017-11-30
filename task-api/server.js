const express = require('express')
const app = express()

const tasks = ['do the dished', 'laundry', 'mow the lawn']

app.get('/api/tasks', (req, res) => res.send(tasks))

app.listen(3001, () => console.log('Example app listening on port 3001!'))

