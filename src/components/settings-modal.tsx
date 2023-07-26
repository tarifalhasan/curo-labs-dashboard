import { useState } from "react";
import Select from "react-select";
export default function SettingsModal() {
  const [isSymbled, setIsSymbled] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="modal-container w-full max-w-sm md:max-w-md">
      <div className="border-b flex justify-between items-center px-6 py-4">
        <h4 className="text-xl font-bold">Settings</h4>
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              className={`settings-option inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                isSymbled && "activeTab"
              }`}
              onClick={() => setIsSymbled(true)}
            >
              Symbols
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`settings-option inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                !isSymbled && "activeTab"
              }`}
              aria-current="page"
              onClick={() => setIsSymbled(false)}
            >
              Parameters
            </button>
          </li>
        </ul>
      </div>

      {isSymbled ? (
        <div id="settings-indicator" className="settings-content p-6">
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="password">Add New Symbol</label>
              <div className="relative">
                <Select options={options} isMulti></Select>
              </div>
            </div>
            <div
              id="user-selected-choices"
              className="flex gap-4 flex-wrap"
            ></div>
          </form>
        </div>
      ) : (
        <div id="settings-parameters" className="settings-content p-6 ">
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="risk">Risk</label>
              <input
                className="border w-full border-gray-300 bg-white rounded-md p-2"
                type="text"
                name="risk"
                value="1%"
              />
            </div>
          </form>
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="leverage">Leverage</label>
              <select
                className="border w-full border-gray-300 bg-white rounded-md p-2"
                name="leverage"
              >
                <option>Standard (10x)</option>
              </select>
            </div>
          </form>
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="rr_ratio">RR Ratio</label>
              <input
                className="border w-full border-gray-300 bg-white rounded-md p-2"
                type="text"
                name="rr_ratio"
              />
            </div>
          </form>
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="be_level">BE Level</label>
              <input
                className="border w-full border-gray-300 bg-white rounded-md p-2"
                type="text"
                name="be_level"
              />
            </div>
          </form>
        </div>
      )}

      <div className="space-x-2 border-t mt-6 px-6 py-4 text-right">
        <button className="modal-exit btn bg-white border rounded-md text-black px-3 py-2 text-sm font-semibold">
          Cancel
        </button>
        <button className="modal-exit btn bg-black rounded-md text-white px-3 py-2 text-sm font-semibold">
          Update
        </button>
      </div>
    </div>
  );
}
