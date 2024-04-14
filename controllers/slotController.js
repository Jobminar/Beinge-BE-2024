import Slot from "../models/slotModel.js";

const slotController = {
  getSlots: async (req, res) => {
    try {
      // Logic to retrieve all slots from the database
      const slots = await Slot.find();
      res.status(200).json(slots);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createSlot: async (req, res) => {
    try {
      const slot = new Slot(req.body);
      await slot.save();
      res.status(201).json(slot);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteSlot: async (req, res) => {
    try {
      const slotId = req.params.id;

      // Use deleteOne method to delete the slot
      const result = await Slot.deleteOne({ _id: slotId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Slot not found' });
      }

      res.status(204).send(); // 204 No Content for a successful deletion
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default slotController;
