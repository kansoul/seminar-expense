import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Expense from "./app/containers/Expense";
import Discovered from "./app/containers/Discovered";
import Used from "./app/containers/Used";

type Tab = "Expense" | "Used" | "Discovered";

function App() {
  const [tabs, setTabs] = useState<Tab>("Expense");
  const classTabActive = (active: boolean) =>
    `inline-block w-full py-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ${
      active ? "!text-blue-600 !bg-gray-100" : ""
    }`;
  return (
    <div className="relative">
      <ul className="fixed z-1 top-0 w-full px-2 flex justify-between text-sm font-medium text-center bg-white border-b border-gray-200">
        <li className="w-[13%] flex justify-center">
          <img src={logo} alt="" className="w-12 h-12" />
        </li>
        <li className="w-[29%]">
          <span
            onClick={() => setTabs("Expense")}
            className={classTabActive(tabs === "Expense")}
          >
            Quỹ đen
          </span>
        </li>
        <li className="w-[29%]">
          <span
            onClick={() => setTabs("Discovered")}
            className={classTabActive(tabs === "Discovered")}
          >
            Đã phát hiện
          </span>
        </li>
        <li className="w-[29%]">
          <span
            onClick={() => setTabs("Used")}
            className={classTabActive(tabs === "Used")}
          >
            Đã sử dụng
          </span>
        </li>
      </ul>
      {tabs === "Expense" && <Expense />}
      {tabs === "Discovered" && <Discovered />}
      {tabs === "Used" && <Used />}
    </div>
  );
}

export default App;
