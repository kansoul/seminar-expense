import { useEffect, useState } from "react";
import { getCard, removeCard } from "../../../services/card";
import { Card } from "../../../types/Card";

export default function Discovered() {
  const [discovered, setDiscovered] = useState<Card[]>([]);

  useEffect(() => {
    setDiscovered(getCard("Discovered"));
  }, []);

  const handleDeleteCard = (id: string) => {
    removeCard(id);
    setDiscovered(getCard("Expense"));
  };

  return (
    <div className="h-[100vh] pt-16">
      <div className="flex flex-wrap justify-center md:justify-start">
        {discovered.map((value) => (
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
            <div className="flex justify-end w-full pb-2 pt-4">
              <button
                type="button"
                onClick={() => handleDeleteCard(value.id)}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm w-20 h-8 text-center mr-2 mb-2"
              >
                Xoá
              </button>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
