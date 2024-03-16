// define schema for the database model
import { Schema, model } from "mongoose";

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const restaurantSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  deliveryPrice: {
    type: String,
    required: true,
  },
  estimatedDeliveryTime: {
    type: String,
    required: true,
  },
  cuisines: [{ type: String, required: true }],
  menuItems: [menuItemSchema],
  imageUrl: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
});

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
