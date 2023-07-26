import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import EditPositionModal from "./edit-position";
import { ToastAction } from "./ui/toast";
const TrandingTab = () => {
  const { toast } = useToast();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
  const [isLimitChecked, setLimitChecked] = useState<boolean>(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleLimitChange = () => {
    setLimitChecked(true);
  };

  const handleMarketChange = () => {
    setLimitChecked(false);
  };

  return (
    <div id="tab-trading" className="side-tab">
      <div className="mt-8 mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            =
            <rect
              width="30.1176"
              height="29.4118"
              rx="6.76471"
              fill="#161A1E"
            />
            <path
              d="M7.26709 21.2059L5.89209 19.7059L12.7671 12.2059L16.4338 16.2059L22.9421 8.20587L24.2254 9.60587L16.4338 19.2059L12.7671 15.2059L7.26709 21.2059Z"
              fill="#00F496"
            />
          </svg>
          <h4 className="text-xl text-curoBlack font-bold">Place Trade</h4>
        </div>
        <Dialog>
          <DialogTrigger>
            <button className="flex items-center justify-center rounded-md border-[1px] w-8 h-8">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 1.5H4.5C3.67157 1.5 3 2.17157 3 3V15C3 15.8284 3.67157 16.5 4.5 16.5H13.5C14.3284 16.5 15 15.8284 15 15V3C15 2.17157 14.3284 1.5 13.5 1.5Z"
                  stroke="#161A1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4.5H12M12 10.5V13.5M12 7.5H12.0075M9 7.5H9.0075M6 7.5H6.0075M9 10.5H9.0075M6 10.5H6.0075M9 13.5H9.0075M6 13.5H6.0075"
                  stroke="#161A1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent>
            <EditPositionModal />
          </DialogContent>
        </Dialog>
      </div>
      <hr />
      <form>
        <div className="my-6">
          <div className="flex gap-6">
            <button
              id="limit"
              onClick={handleLimitChange}
              className={`cursor-pointer trade-type  ${
                isLimitChecked ? "!text-black" : "text-gray-400"
              }  font-bold`}
            >
              Limit
            </button>
            <button
              id="market"
              onClick={handleMarketChange}
              className={`cursor-pointer trade-type  ${
                !isLimitChecked ? "!text-black" : "text-gray-400"
              }  font-bold`}
            >
              Market
            </button>
          </div>
        </div>
        {isLimitChecked && (
          <div id="limit_field" className="my-6 space-y-2">
            <label htmlFor="limit">Limit</label>
            <select
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              name="limit"
            >
              <option>1</option>
            </select>
          </div>
        )}
        <div className="mt-4 mb-6 space-y-2">
          <label htmlFor="username">Symbol</label>
          <select
            className="border w-full border-gray-300 bg-white rounded-md p-2"
            name="stop_loss"
            placeholder="Stop Loss (SL)"
          >
            <option>1</option>
          </select>
        </div>
        <div>
          <span className="text-sm">Risk</span>
          <ul className="hidden text-sm font-medium text-center text-gray-500 bg-gray-100 rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full">
              <a
                href="#"
                className="risk_option inline-block hover:rounded-lg hover:text-white hover:bg-gray-700 w-full p-2 bg-gray-300 text-curoBlack font-bold rounded-lg active focus:outline-none"
                aria-current="page"
              >
                10%
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="risk_option font-bold inline-block hover:rounded-lg w-full p-2 focus:outline-none hover:text-white hover:bg-gray-700"
              >
                25%
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="risk_option inline-block hover:rounded-lg w-full p-2 focus:outline-none hover:text-white hover:bg-gray-700"
              >
                50%
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="risk_option inline-block hover:rounded-lg w-full p-2 focus:outline-none hover:text-white hover:bg-gray-700"
              >
                75%
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="risk_option inline-block hover:rounded-lg w-full p-2 focus:outline-none hover:text-white hover:bg-gray-700"
              >
                100%
              </a>
            </li>
          </ul>
          <input
            type="hidden"
            defaultValue={10}
            id="risk_value"
            name="risk_value"
          />
          <div className="mt-4 bg-gray-100 rounded-lg py-2 px-4 text-xs text-gray-500">
            By placing this trade you are risking <b>1%</b> of your account as
            per your account settings, this is approximately
            <b>$1,000.00</b>.
          </div>
        </div>
        <div className="my-6 space-y-2">
          <label htmlFor="stop_loss">Stop Loss (SL)</label>
          <input
            className="border w-full border-gray-300 bg-white rounded-md p-2"
            type="number"
            step="0.01"
            name="stop_loss"
          />
        </div>
        <div className="my-6 flex items-center gap-2">
          <input
            id="add_take_profit"
            name="add_take_profit"
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="add_take_profit">Add Take Profit (TP)?</label>
        </div>
        {isCheckboxChecked && (
          <div id="take_profit" className="my-6 space-y-2">
            <label htmlFor="take_profit">Take Profit (TP)</label>
            <input
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              type="number"
              step="0.01"
              name="take_profit"
            />
          </div>
        )}

        <div className="mt-4 flex gap-4">
          <button
            type="button"
            onClick={() => {
              toast({
                title: "Buy/Long position placed Close",
                action: <ToastAction altText="Close">Close</ToastAction>,
                variant: "success",
              });
            }}
            className="w-full flex-auto text-white font-bold rounded-md bg-curoGreen py-2 px-6"
          >
            Buy/Long
          </button>
          <button
            type="button"
            onClick={() => {
              toast({
                title: "Sell/Short position placed",
                action: (
                  <ToastAction altText="Try again">Try again</ToastAction>
                ),
                variant: "destructive",
              });
            }}
            className="w-full flex-auto text-white font-bold rounded-md bg-curoRed py-2 px-6"
          >
            Sell/Short
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrandingTab;
