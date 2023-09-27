import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { Card, CardType } from "../../../types/Card";
import { getCard, removeCard, updateCard } from "../../../services/card";

export default function Expense() {
  const [createExpense, setCreateExpense] = useState<boolean>(false);
  const [expense, setExpense] = useState<Card[]>([]);

  useEffect(() => {
    setExpense(getCard("Expense"));
  }, []);

  const handleDeleteCard = (id: string) => {
    removeCard(id);
    setExpense(getCard("Expense"));
  };

  const handleUpdateCard = (data: Card, type: CardType) => {
    updateCard({ ...data, type });
    setExpense(getCard("Expense"));
  };

  const handleCloseModal = (create?: boolean) => {
    setCreateExpense(false);
    if (create) setExpense(getCard("Expense"));
  };

  return (
    <div className="h-[100vh] pt-16">
      <div className="w-full flex px-6">
        <button
          type="button"
          onClick={() => setCreateExpense(true)}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Tạo quỹ đen
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start">
        {expense.map((value) => (
          <span
            key={value.id}
            className="block w-[320px] m-2 px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {value.title}
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400 mb-2 flex flex-wrap">
              <p className="font-bold pr-2">Nội dung: </p>
              <p>{value.content}</p>
            </div>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p className="font-bold pr-2">Số tiền: </p>{" "}
              {value.amount.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <div className="flex justify-between w-full pb-2 pt-4">
              <button
                type="button"
                onClick={() => handleUpdateCard(value, "Used")}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm w-20 h-8 text-center mr-2 mb-2"
              >
                Sử dụng
              </button>
              <button
                type="button"
                onClick={() => handleUpdateCard(value, "Discovered")}
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm w-20 h-8 text-center mr-2 mb-2"
              >
                Phát hiện
              </button>
              <button
                type="button"
                onClick={() => handleDeleteCard(value.id)}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm w-20 h-8 text-center mb-2"
              >
                Xoá
              </button>
            </div>
          </span>
        ))}
      </div>
      {createExpense && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
