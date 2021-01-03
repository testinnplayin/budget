import { Document } from "mongoose";

import { Currency, TimePeriod } from "../types/resources";

interface IBudgetItem extends Document {
  category: string;
  parent_category?: IBudgetItem['_id'];
  limit_amount?: number;
  currency?: Currency;
  time_period?: TimePeriod;
}

export interface INewBudgetItem extends Document {
  category: IBudgetItem["category"];
  parent_category?: IBudgetItem["parent_category"];
  limit_amount?: IBudgetItem["limit_amount"];
  currency?: IBudgetItem["currency"];
  time_period?: IBudgetItem["time_period"];
}