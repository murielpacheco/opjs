import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb+srv://damaziomp:Seramashoe12@cluster0.dpgdpub.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    const app = express();

    const port = 3001;

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log('Algum erro ocorreu com o mongo');
    return;
  });

