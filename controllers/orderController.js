// orderController.js
import Order from "../models/orderModel.js";

const orderController = {
  createOrder: async (req, res) => {
    try {
      const { paymentID, totalPrice, dateTime, name, phoneNumber, numberOfPeople, email } = req.body;

      if (!paymentID || !totalPrice || !dateTime || !name || !phoneNumber || !numberOfPeople || !email) {
        return res.status(422).json({ message: "Required fields missing" });
      }

      const order = new Order({ paymentID, totalPrice, dateTime, name, phoneNumber, numberOfPeople, email });
      await order.save();
      res.status(201).json({ message: "Successful order data added", order });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: error.message });
    }
  },

  getOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const orderId = req.params.id;
      const result = await Order.deleteOne({ _id: orderId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(204).send();
    } catch (error) {
      console.error("Error deleting order:", error);
      res.status(500).json({ error: error.message });
    }
  },
};

export default orderController;
