import { useState } from "react";
import { addCard } from "../../../services/card";
import { v4 as uuidv4 } from "uuid";

export default function Modal(props: { onClose: (created?: boolean) => void }) {
  const { onClose } = props;
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleCreateCard = () => {
    if (!title || !content || !amount) return;
    addCard({
      id: uuidv4(),
      title,
      amount,
      content,
      type: "Expense",
    });
    onClose(true);
  };
  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full h-full md:inset-0 bg-[#08080884] flex flex-col">
      <div className="relative mx-6 bg-white rounded-lg shadow dark:bg-gray-700 mt-8 pb-8">
        <div className="flex justify-end pt-2 pr-6">
          <button
            type="button"
            onClick={() => onClose()}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="flex items-start justify-center pb-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Thêm quỹ đen
          </h3>
        </div>

        <form className="px-8 mt-3">
          <span>Tiêu đề</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span>Nội dung</span>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none columns-2"
          />
          <span>Số tiền</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="w-full flex justify-center">
            <button
              type="button"
              onClick={handleCreateCard}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tạo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
