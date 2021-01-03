import mongoose, { Schema } from "mongoose";

export const budgetItemSchema: Schema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true
  },
  parent_category: {
    type: Schema.Types.ObjectId,
    ref: "BudgetItem",
    default: null
  },
  limit_amount: Number,
  currency: {
    type: String,
    enum: ["€", "$", "£"]
  },
  time_period: {
    type: String,
    enum: ["day", "wk", "mo", "yr"]
  }
},
{
  collection: "budget-items"
});

export default mongoose.model("BudgetItem", budgetItemSchema);