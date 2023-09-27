type CardType = "Expense" | "Used" | "Discovered";
export interface Card {
  id: string;
  title: string;
  type: CardType;
  content: string;
  amount: number;
}
