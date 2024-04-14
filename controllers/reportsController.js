import Reports from "../models/reportsModel.js";

const reportsController = {
  createReports: async (req, res) => {
    try {
      const { date, orderWeekly, theaterScales, maxTheaterSCales, addOnSales, totalSales } = req.body;
      const newReport = new Reports({
        date,
        orderWeekly,
        theaterScales,
        maxTheaterSCales,
        addOnSales,
        totalSales,
      });

      const savedReport = await newReport.save();
      res.json(savedReport);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getReports: async (req, res) => {
    try {
      const reportsEntries = await Reports.find(); 
      res.status(200).json(reportsEntries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default reportsController;
