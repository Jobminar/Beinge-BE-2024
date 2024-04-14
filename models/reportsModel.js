import { Schema, model } from "mongoose";

const reportsSchema = new Schema({
    date: { type: Date, required: true },
    orderWeekly: { type: String, required: true },
    theaterScales: { type: Number, required: true },
    maxTheaterSCales: { type: Number, required: true },
    addOnSales: { type: Number, required: true },
    totalSales: { type: Number, required: true }
});
const Reports = model("Reports", reportsSchema);
export default Reports;
