import app from './app.js';
dotenv.config();
import dotenv from 'dotenv';
// ✅ Load environment variables from .env


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
