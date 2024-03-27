import { sign } from 'jsonwebtoken';

// Routes
const router = require('express').Router();

router.post('/register', async (_req, _res) => {
  // Register user logic
});

router.post('/login', async (req, res) => {
  // Authenticate user
  const { email, password } = req.body;

  // Check if user exists and password is correct
  const user = await User.findOne({ email });

  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

export default router;