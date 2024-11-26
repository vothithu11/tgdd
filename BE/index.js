
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import orderRoutes from './routes/order.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://tgdd-nodejs-2dcg05qfd-vothithu11s-projects.vercel.app'],  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/orders',orderRoutes);

// const CONNECTION_URL = 'mongodb://localhost:27017/dataTggd';
const CONNECTION_URL = 'mongodb+srv://vothithu0111:thu123@cluster0.8imnfow.mongodb.net/dataTggd?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, {}) //useNewUrlParser: true, useUnifiedTopology: true 
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


