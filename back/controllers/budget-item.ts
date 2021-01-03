import { Request, Response, NextFunction } from "express";

import BudgetItem from "../models/budget-item";

import { INewBudgetItem } from "../interfaces/budget-item";

export default {
  async createBudgetItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    const reqBody: INewBudgetItem = req.body;

    try {
      await BudgetItem.create(reqBody);

      return res.status(201).end();
    } catch (err) {
      next(err);
    }
  }
}