import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

async function run() {

  const app = express();
  const port = 3000;

  app.use(bodyParser.urlencoded({ extended: true }));

  await mongoose.connect('mongodb://localhost:27017/', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  });

  app.post('/hello', (req, res) => {
    console.log(req.body)
    res.send('Hello World!');
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

run();

