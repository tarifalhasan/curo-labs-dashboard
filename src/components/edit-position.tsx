import { useState } from "react";
import { Link } from "wouter";

export default function EditPositionModal() {
  // Function to handle position size selection
  const [positionSize, setPositionSize] = useState<number>(10);

  const handlePositionSizeClick = (size: number) => {
    setPositionSize(size);
  };

  return (
    <div className="modal-container w-full  md:max-w-md">
      <div className="border-b flex justify-between items-center px-6 py-4">
        <h4 className="text-xl font-bold">Edit Position</h4>
      </div>
      <form>
        <div className="p-6">
          <span>Position Size</span>
          <form>
            <ul className="hidden text-sm font-medium text-center text-gray-500 bg-gray-100 rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-400 overflow-hidden">
              <li
                className="w-full"
                onClick={() => handlePositionSizeClick(10)}
              >
                <Link
                  href="#"
                  className={`position_option hover:text-white hover:rounded-lg hover:bg-gray-700 inline-block w-full p-2 font-bold text-curoBlack ${
                    positionSize === 10 ? "bg-gray-100" : "bg-gray-300"
                  } active focus:outline-none bg-gray-300 rounded-lg`}
                  aria-current="page"
                >
                  10%
                </Link>
              </li>
              {/* Add similar li elements for other options and set their onClick handlers */}
            </ul>

            <div className="flex gap-2 mt-2 mb-6">
              <input
                id="position_size"
                className="border w-full border-gray-300 bg-white rounded-md p-2"
                type="number"
                value={positionSize}
                name="position_size"
                onChange={(e) => setPositionSize(parseInt(e.target.value))}
              />
              <button className="w-[150px] modal-exit btn bg-curoRed rounded-md text-white px-3 py-2 text-sm font-semibold">
                Close
              </button>
            </div>
          </form>
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="be_level">Stop Loss (SL)</label>
              <div className="flex gap-2">
                <input
                  className="border w-full border-gray-300 bg-white rounded-md p-2"
                  step="0.01"
                  type="number"
                  name="edit_stop_loss"
                />
                <button className="w-[150px] modal-exit btn bg-black rounded-md text-white px-3 py-2 text-sm font-semibold">
                  Update SL
                </button>
              </div>
            </div>
          </form>
          <form action="#">
            <div className="space-y-2 mb-4">
              <label htmlFor="be_level">Take Profit (TP)</label>
              <div className="flex gap-2">
                <input
                  className="border w-full border-gray-300 bg-white rounded-md p-2"
                  step="0.01"
                  type="number"
                  name="edit_take_profit"
                />
                <button className="w-[150px] modal-exit btn bg-black rounded-md text-white px-3 py-2 text-sm font-semibold">
                  Update TP
                </button>
              </div>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
}
