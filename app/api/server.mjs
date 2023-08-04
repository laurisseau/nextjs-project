import express from 'express';
import next from 'next';
import userRouter from './routes/users.mjs';
import mongoose from 'mongoose';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompts',
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true',
    });

    console.log('> MongoDB is connected');
  } catch (err) {
    console.log(err);
  }
};

app
  .prepare()
  .then(() => {
    const server = express();

    connectToDB();

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use('/api/users', userRouter);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
