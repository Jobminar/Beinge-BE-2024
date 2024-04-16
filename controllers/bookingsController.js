import Bookings from "../models/bookingsModel.js";

const bookingsController = {

  createBookings: async (req, res) => {
    try {
      const { name, email, mobile, numOfPeople } = req.body;

      
      const bookings = new Bookings({ name, email, mobile, numOfPeople });

      await bookings.save();

      res.status(201).json(bookings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  
  getBookings: async (req, res) => {
    try {
     
      const bookingsEntries = await Bookings.find();
      res.status(200).json(bookingsEntries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },


  deleteBookings: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedbookings = await Bookings.findByIdAndDelete(id);
  
      if (!deletedbookings) {
        return res.status(404).json({ error: "bookings not found" });
      }
  
      res.status(200).json(deletedbookings);
    } catch (error) {
      console.error(error);  
      res.status(500).json({ error: error.message });
    }
  },
  

  
};

export default bookingsController;
