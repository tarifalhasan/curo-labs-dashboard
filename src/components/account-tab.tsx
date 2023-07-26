import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FiSettings } from "react-icons/fi";
import SettingsModal from "./settings-modal";
const AccountTab = () => {
  return (
    <div id="tab-account" className="side-tab">
      <div className="mt-8 mb-6 flex flex-col">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex gap-2">
            <svg
              width={30}
              height={29}
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={30} height={29} rx="6.76471" fill="#161A1E" />
              <path
                d="M15.0002 19.5834C15.2599 19.5834 15.4777 19.4954 15.6537 19.3194C15.8297 19.1434 15.9174 18.9258 15.9168 18.6667V15C15.9168 14.7403 15.8288 14.5225 15.6528 14.3465C15.4768 14.1705 15.2593 14.0828 15.0002 14.0834C14.7404 14.0834 14.5226 14.1714 14.3466 14.3474C14.1706 14.5234 14.0829 14.7409 14.0835 15V18.6667C14.0835 18.9264 14.1715 19.1443 14.3475 19.3203C14.5235 19.4963 14.7411 19.584 15.0002 19.5834ZM15.0002 12.25C15.2599 12.25 15.4777 12.162 15.6537 11.986C15.8297 11.81 15.9174 11.5925 15.9168 11.3334C15.9168 11.0737 15.8288 10.8558 15.6528 10.6798C15.4768 10.5038 15.2593 10.4161 15.0002 10.4167C14.7404 10.4167 14.5226 10.5047 14.3466 10.6807C14.1706 10.8567 14.0829 11.0743 14.0835 11.3334C14.0835 11.5931 14.1715 11.811 14.3475 11.987C14.5235 12.163 14.7411 12.2507 15.0002 12.25ZM15.0002 24.1667C13.7321 24.1667 12.5404 23.9259 11.4252 23.4444C10.3099 22.9628 9.33975 22.3098 8.51475 21.4855C7.68975 20.6605 7.03677 19.6903 6.55583 18.575C6.07489 17.4598 5.83411 16.2681 5.8335 15C5.8335 13.732 6.07427 12.5403 6.55583 11.425C7.03739 10.3098 7.69036 9.33962 8.51475 8.51462C9.33975 7.68962 10.3099 7.03665 11.4252 6.55571C12.5404 6.07476 13.7321 5.83399 15.0002 5.83337C16.2682 5.83337 17.4599 6.07415 18.5752 6.55571C19.6904 7.03726 20.6606 7.69024 21.4856 8.51462C22.3106 9.33962 22.9639 10.3098 23.4454 11.425C23.927 12.5403 24.1674 13.732 24.1668 15C24.1668 16.2681 23.9261 17.4598 23.4445 18.575C22.9629 19.6903 22.31 20.6605 21.4856 21.4855C20.6606 22.3105 19.6904 22.9637 18.5752 23.4453C17.4599 23.9268 16.2682 24.1673 15.0002 24.1667ZM15.0002 22.3334C17.0474 22.3334 18.7814 21.623 20.2022 20.2021C21.6231 18.7813 22.3335 17.0473 22.3335 15C22.3335 12.9528 21.6231 11.2188 20.2022 9.79796C18.7814 8.37712 17.0474 7.66671 15.0002 7.66671C12.9529 7.66671 11.2189 8.37712 9.79808 9.79796C8.37725 11.2188 7.66683 12.9528 7.66683 15C7.66683 17.0473 8.37725 18.7813 9.79808 20.2021C11.2189 21.623 12.9529 22.3334 15.0002 22.3334Z"
                fill="#00F496"
              />
            </svg>
            <h4 className="text-xl text-curoBlack font-bold">Account Info</h4>
          </div>
          <Dialog>
            <DialogTrigger>
              <button
                data-modal="account-modal"
                className="flex items-center justify-center rounded-md border-[1px] w-8 h-8"
              >
                <FiSettings size={20} />
              </button>
            </DialogTrigger>
            <DialogContent>
              <SettingsModal />
            </DialogContent>
          </Dialog>
        </div>
        <div className="divide-y mt-4">
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Balance:</span>
            <span className="text-sm font-bold text-curoBlack">100,532.05</span>
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Risk:</span>
            <span className="text-sm font-bold text-curoBlack">1%</span>
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Leverage:</span>
            <span className="text-sm font-bold text-curoBlack">5</span>
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Exchange:</span>
            <span className="text-sm font-bold text-curoBlack">MT5</span>
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Take Profit (RR):</span>
            <span className="text-sm font-bold text-curoBlack">3</span>
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Auto BE Level (RR):</span>
            <span className="text-sm font-bold text-curoBlack">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
