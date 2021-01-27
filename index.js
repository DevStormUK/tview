const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  console.log(req.params)
  res.json({msg: 'success', params: req.params})
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))