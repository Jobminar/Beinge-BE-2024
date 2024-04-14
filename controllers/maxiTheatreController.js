import MaxiTheater from "../models/maxiTheatermodel.js";

const validateTheaterInput = (price, numberOfPeople) => {
  if (!price || !numberOfPeople || isNaN(price) || isNaN(numberOfPeople)) {
    throw new Error('Both valid price and numberOfPeople are required');
  }
};

const maxiTheaterController = {
  addTheater: async (req, res) => {
    try {
      const { price, numberOfPeople } = req.body;

      // Validate input
      validateTheaterInput(price, numberOfPeople);

      const newMaxiTheater = new MaxiTheater({ price, numberOfPeople });
      const savedMaxiTheater = await newMaxiTheater.save();

      res.status(201).json(savedMaxiTheater);
    } catch (error) {
      console.error('Error adding maxitheater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getTheaters: async (req, res) => {
    try {
      const maxiTheaters = await MaxiTheater.find();
      res.status(200).json(maxiTheaters);
    } catch (error) {
      console.error('Error fetching theaters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateTheater: async (req, res) => {
    try {
      const maxiTheaterId = req.params.id;
      const { price, numberOfPeople } = req.body;

      // Validate input
      validateTheaterInput(price, numberOfPeople);

      const updatedTheater = await MaxiTheater.findOneAndUpdate(
        { _id: maxiTheaterId },
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
      const theaterId = req.params.id;

      const result = await MaxiTheater.deleteOne({ _id: theaterId });

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

export default maxiTheaterController;
