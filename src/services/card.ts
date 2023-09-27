import { EXPENSE_KEY } from "../app/configs/app";
import { Card, CardType } from "../types/Card";
import { getSavedState, saveState } from "../utils/helper";

export const updateCard = (data: Card) => {
  const storedExpenses = getSavedState(EXPENSE_KEY);
  const newExpense = storedExpenses.map((expense: Card) =>
    expense.id === data.id ? { ...expense, ...data } : expense
  );
  saveState(EXPENSE_KEY, newExpense);
};

export const addCard = (data: Card) => {
  const storedExpenses = getSavedState(EXPENSE_KEY);
  const newExpense = [...storedExpenses, data];
  saveState(EXPENSE_KEY, newExpense);
};

export const removeCard = (id: string) => {
  const storedExpenses = getSavedState(EXPENSE_KEY);
  const newExpense = storedExpenses.filter(
    (expense: Card) => expense.id !== id
  );
  saveState(EXPENSE_KEY, newExpense);
};

export const getCard = (type: CardType) => {
  const storedExpenses = getSavedState(EXPENSE_KEY);
  const newExpense = storedExpenses.filter(
    (expense: Card) => expense.type === type
  );
  return newExpense;
};
