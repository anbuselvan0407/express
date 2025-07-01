import bcrypt from 'bcrypt';
import { getUserByEmail, createUser } from '../services/auth.service.js';
import { generateToken } from '../services/generateJWT.js';

export const signupHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(409).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = 'student'; // 👈 default role
    const newUser = await createUser(name, email, hashedPassword, role);

    res.status(201).json({ message: 'User registered', newUser });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Signup failed' });
  }
};

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email); // returns a single user object
    if (!user) return res.status(401).json({ error: 'Invalid email' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    // ✅ Corrected: use user.name
    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
};


export const meHandler = (req, res) => {
   console.log('Inside meHandler, user:', req.user); // 🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍 debugging
  res.json({
    message: 'Current user info',
    user: req.user  // new                  comes from Jwtdecode middleware
  });
};
