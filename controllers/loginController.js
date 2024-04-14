// loginController.js
import Login from "../models/loginModel.js";

const loginController = {
  signup: async (req, res) => {
    try {
      const { username, password, phone } = req.body;

      // Check if the username already exists
      const existingUser = await Login.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Create a new user for signup
      const newUser = new Login({ username, password, phone });
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
      const user = await Login.findOne({ username, password });

      if (user) {
        // Successful login
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Invalid credentials
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default loginController;
