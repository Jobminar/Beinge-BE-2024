import Decoration from "../models/decorationModel.js";
import multer from "multer";


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const decorationController = {
  getDecorations: async (req, res) => {
    try {
      const decorations = await Decoration.find();
      res.status(200).json(decorations);
    } catch (error) {
      console.error('Error fetching decorations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createDecoration: async (req, res) => {
    try {
      const { decorationName, price } = req.body;

     
      if (!req.file) {
        return res.status(400).json({ error: 'Image file is required' });
      }

      const image = req.file.buffer.toString('base64');

   
      if (!decorationName || !price) {
        return res.status(400).json({ error: 'Decoration name and price are required' });
      }

      const decoration = new Decoration({ decorationName, price, image });

   
      const savedDecoration = await decoration.save();

      res.status(201).json(savedDecoration);
    } catch (error) {
      console.error('Error creating decoration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteDecoration: async (req, res) => {
    try {
      const decorationId = req.params.id;

      
      const result = await Decoration.deleteOne({ _id: decorationId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Decoration not found' });
      }

      res.status(204).send(); 
    } catch (error) {
      console.error('Error deleting decoration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default decorationController;

// import Decoration from "../models/decorationModel.js";
// import multer from "multer";

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const decorationController = {
//   getDecorations: async (req, res) => {
//     try {
//       const decorations = await Decoration.find();
//       res.status(200).json(decorations);
//     } catch (error) {
//       console.error('Error fetching decorations:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   createDecoration: async (req, res) => {
//     try {
//       // ... (existing code)
  
//       const decoration = new Decoration({ decorationName, price, image });
//       const savedDecoration = await decoration.save();
  
//       res.status(201).json(savedDecoration);
//     } catch (error) {
//       console.error('Error creating decoration:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
  

//   deleteDecoration: async (req, res) => {
//     try {
//       const decorationId = req.params.id;

//       const result = await Decoration.deleteOne({ _id: decorationId });

//       if (result.deletedCount === 0) {
//         return res.status(404).json({ error: 'Decoration not found' });
//       }

//       res.status(204).send();
//     } catch (error) {
//       console.error('Error deleting decoration:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

// export default decorationController;
