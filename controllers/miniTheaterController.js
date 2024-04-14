import MiniTheater from "../models/miniTheaterModel.js";

const validateTheaterInput = (price, numberOfPeople) => {
  if (!price || !numberOfPeople || isNaN(price) || isNaN(numberOfPeople)) {
    throw new Error('Both valid price and numberOfPeople are required');
  }
};

const miniTheaterController = {
  addTheater: async (req, res) => {
    try {
      const { price, numberOfPeople } = req.body;

      
      validateTheaterInput(price, numberOfPeople);

      const newTheater = new MiniTheater({ price, numberOfPeople });
      const savedMiniTheater = await newTheater.save();

      res.status(201).json(savedMiniTheater);
    } catch (error) {
      console.error('Error adding theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getTheaters: async (req, res) => {
    try {
      const theaters = await MiniTheater.find();
      res.status(200).json(theaters);
    } catch (error) {
      console.error('Error fetching theaters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateTheater: async (req, res) => {
    try {
      const miniTheaterId = req.params.id; 
      const { price, numberOfPeople } = req.body;

      
      validateTheaterInput(price, numberOfPeople);

      const updatedTheater = await MiniTheater.findOneAndUpdate(
        { _id: miniTheaterId }, 
        { price, numberOfPeople },
        { new: true } 
      );

      if (!updatedTheater) {
        return res.status(404).json({ error: 'Theater not found' });
      }

      res.status(200).json(updatedTheater);
    } catch (error) {
      console.error('Error updating theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteTheater: async (req, res) => {
    try {
      const miniTheaterId = req.params.id;
      
      const result = await MiniTheater.deleteOne({ _id: miniTheaterId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Theater not found' });
      }

      res.status(204).send();
    } catch (error) {
      console.error('Error deleting theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default miniTheaterController;
