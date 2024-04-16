import Login from "../models/loginModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const loginController = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingUser = await Login.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Login({ username, password: hashedPassword });
      await newUser.save();

      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find the user in the database
      const user = await Login.findOne({ username });

      if (!user) {
        // User not found
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Invalid password
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // If username and password are correct, generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Respond with success and token
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default loginController;
