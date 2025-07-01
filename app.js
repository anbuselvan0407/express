






// const expre// const userroutes = require('./routes/routs');
//onst app =express();
// app.use(express.json());
// app.use('/api/users',userroutes);
// module.export = app;


import express from 'express';
import router from './routes/routes.js';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();// ✅ Loads .env variables

const app = express(); 

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', // Your Angular app URL
  credentials: true
}));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});



app.use('/students', studentRoutes);//new

app.use('/api', studentRoutes);

app.use('/auth', authRoutes);

app.use('/', router);

app.use('/staff',router);



export default app                                                                                                                                                                     