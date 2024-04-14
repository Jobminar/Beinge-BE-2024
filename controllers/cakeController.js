import Cake from "../models/cakeModel.js";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const cakeController = {
  getCakes: async (req, res) => {
    try {
      const cakes = await Cake.find();
      res.status(200).json(cakes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCake: [
    upload.single('image'),
    async (req, res) => {
      try {
        const { cakeName, price } = req.body;

        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }

        const image = req.file.buffer.toString('base64');

        if (!cakeName || !price) {
          return res.status(400).json({ error: 'Cake name and price are required' });
        }

        const cake = new Cake({ cakeName, price, image });
        const savedCake = await cake.save();

        res.status(201).json(savedCake);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  ],

  deleteCake: async (req, res) => {
    try {
      const { cakeId } = req.params;

     
      const cake = await Cake.findById(cakeId);

      if (!cake) {
        return res.status(404).json({ error: "Cake not found" });
      }

     
      await Cake.deleteOne({ _id: cakeId });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default cakeController;
