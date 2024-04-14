import DateTime from '../models/dateTimeModel.js';

const dateTimeController = {
  addBatchData: async (req, res) => {
    try {
      const { slots } = req.body;
      const insertedSlots = await DateTime.insertMany(slots);

      res.status(201).json({ message: 'Batch data added successfully', insertedSlots });
    } catch (error) {
      console.error('Error adding batch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  },

  getAllBatch: async (req, res) => {
    try {
      const allBatch = await DateTime.find();
      res.status(200).json(allBatch);
    } catch (error) {
      console.error('Error fetching batch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  },

  deleteBatchData: async (req, res) => {
    try {
      const { ids } = req.body;
      // Assuming ids is an array of ObjectId strings
      const result = await DateTime.deleteMany({ _id: { $in: ids } });

      res.status(200).json({ message: 'Batch data deleted successfully', result });
    } catch (error) {
      console.error('Error deleting batch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  },

  deleteAllBatchData: async (req, res) => {
    try {
      
      const result = await DateTime.deleteMany({});

      res.status(200).json({ message: 'All batch data deleted successfully', result });
    } catch (error) {
      console.error('Error deleting all batch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  },
};

export default dateTimeController;
