const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/test?retryWrites=true',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connexion ok !');
  })
  .catch((err) => {
    console.log(err);
  });
