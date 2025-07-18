
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

// Allow from your frontend domain (for production)
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend.vercel.app']
}));

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

