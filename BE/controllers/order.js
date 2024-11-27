import Order from "../models/order.js";
export const createOrder = async (req, res) => {
  const body = req.body;
  const newOrder = new Order(body);
  try {
    await newOrder.save();

    res.status(200).json(newOrder);
  } catch (error) {
   res.status(500).json({ message: "Error saving order", error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()

    res.status(200).json(orders);
  } catch (error) {
   res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};


