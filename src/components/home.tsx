import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import AddNewAccount from "./add-new-account-modal";
import MainHeader from "./main-header";

const HomePage = () => {
  const [isActiveTab, setIsActiveTab] = useState(true);
  const [isShowKey, setIsShowKey] = useState(false);

  return (
    <div>
      <MainHeader />
      <section className="mt-16 p-2 h-[90vh]">
        <div className="space-y-3 pb-4">
          <div className="bg-white rounded-lg px-6 xl:px-10 py-6">
            <h3 id="greetings" className="text-black-curo text-2xl font-bold">
              Good morning, James
            </h3>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="grid grid-cols-2 bg-white rounded-lg px-6 md:px-10 py-10">
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Daily Performance</h4>
                <p>Today</p>
                <h2 className="text-4xl font-bold">$701.57</h2>
                <span
                  style={{ color: "#00f496" }}
                  className="flex items-center gap-2"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.46609 3.69148C9.56461 3.69148 9.65697 3.70676 9.74317 3.7373C9.82937 3.76784 9.90942 3.8203 9.98331 3.89468L14.8599 8.77125C15.0077 8.91903 15.0815 9.09439 15.0815 9.29733C15.0815 9.50027 15.0077 9.67588 14.8599 9.82415C14.7121 9.97192 14.5397 10.0458 14.3427 10.0458C14.1456 10.0458 13.9732 9.97192 13.8255 9.82415L10.205 6.20366L10.205 14.4791C10.205 14.6884 10.134 14.8608 9.99217 14.9963C9.85031 15.1317 9.67495 15.1995 9.46609 15.1995C9.25675 15.1995 9.08114 15.1285 8.93928 14.9867C8.79741 14.8448 8.72673 14.6694 8.72722 14.4606L8.72722 6.20366L5.10673 9.82415C4.95896 9.97192 4.78655 10.0458 4.58952 10.0458C4.39249 10.0458 4.22008 9.97192 4.07231 9.82415C3.92453 9.67637 3.85064 9.50077 3.85064 9.29733C3.85064 9.09389 3.92453 8.91853 4.07231 8.77125L8.94888 3.89468C9.02277 3.82079 9.10281 3.76833 9.18902 3.7373C9.27522 3.70626 9.36758 3.69099 9.46609 3.69148Z"
                      fill="#00F496"
                    />
                  </svg>
                  6%
                </span>
              </div>
              <div className=" w-full">
                <canvas id="daily-profit"></canvas>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-white rounded-lg px-6 md:px-10 py-10">
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Weekly Performance</h4>
                <p>Last 7 Days</p>
                <h2 className="text-4xl font-bold">$932.03</h2>
                <span className="flex items-center gap-2 text-[#00f496]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.46609 3.69148C9.56461 3.69148 9.65697 3.70676 9.74317 3.7373C9.82937 3.76784 9.90942 3.8203 9.98331 3.89468L14.8599 8.77125C15.0077 8.91903 15.0815 9.09439 15.0815 9.29733C15.0815 9.50027 15.0077 9.67588 14.8599 9.82415C14.7121 9.97192 14.5397 10.0458 14.3427 10.0458C14.1456 10.0458 13.9732 9.97192 13.8255 9.82415L10.205 6.20366L10.205 14.4791C10.205 14.6884 10.134 14.8608 9.99217 14.9963C9.85031 15.1317 9.67495 15.1995 9.46609 15.1995C9.25675 15.1995 9.08114 15.1285 8.93928 14.9867C8.79741 14.8448 8.72673 14.6694 8.72722 14.4606L8.72722 6.20366L5.10673 9.82415C4.95896 9.97192 4.78655 10.0458 4.58952 10.0458C4.39249 10.0458 4.22008 9.97192 4.07231 9.82415C3.92453 9.67637 3.85064 9.50077 3.85064 9.29733C3.85064 9.09389 3.92453 8.91853 4.07231 8.77125L8.94888 3.89468C9.02277 3.82079 9.10281 3.76833 9.18902 3.7373C9.27522 3.70626 9.36758 3.69099 9.46609 3.69148Z"
                      fill="#00F496"
                    />
                  </svg>
                  12%
                </span>
              </div>
              <div className=" w-full">
                <canvas id="weekly-profit"></canvas>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-white rounded-lg px-6 md:px-10 py-10">
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Performance & Loss</h4>
                <p>All Time</p>
                <h2 className="text-4xl font-bold">- $241.91</h2>
                <span className="flex  text-[#d02626] items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.46701 14.8853C9.3685 14.8853 9.27614 14.87 9.18993 14.8395C9.10373 14.8089 9.02369 14.7565 8.9498 14.6821L4.07322 9.80553C3.92545 9.65776 3.85156 9.4824 3.85156 9.27945C3.85156 9.07651 3.92545 8.9009 4.07322 8.75263C4.221 8.60486 4.3934 8.53097 4.59044 8.53097C4.78747 8.53097 4.95987 8.60486 5.10765 8.75263L8.72814 12.3731V4.09772C8.72814 3.88837 8.79907 3.71597 8.94093 3.58051C9.0828 3.44505 9.25816 3.37732 9.46701 3.37732C9.67636 3.37732 9.85197 3.44825 9.99383 3.59012C10.1357 3.73198 10.2064 3.90734 10.2059 4.11619V12.3731L13.8264 8.75263C13.9741 8.60486 14.1466 8.53097 14.3436 8.53097C14.5406 8.53097 14.713 8.60486 14.8608 8.75263C15.0086 8.90041 15.0825 9.07601 15.0825 9.27945C15.0825 9.48289 15.0086 9.65825 14.8608 9.80553L9.98422 14.6821C9.91034 14.756 9.83029 14.8085 9.74409 14.8395C9.65789 14.8705 9.56553 14.8858 9.46701 14.8853Z"
                      fill="#D02626"
                    />
                  </svg>
                  2%
                </span>
              </div>
              <div className=" w-full">
                <canvas id="profit-loss"></canvas>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg py-6 w-full">
            <div className="flex justify-between items-center mb-6 px-6 md:px-10">
              <h4 className="font-bold text-xl">Account Integrations</h4>
              <Dialog>
                <DialogTrigger>
                  <span
                    data-modal="modal-one"
                    className="btn bg-black rounded-md text-white px-3 py-2 text-sm font-semibold"
                  >
                    Add new +
                  </span>
                </DialogTrigger>
                <DialogContent>
                  <AddNewAccount />
                </DialogContent>
              </Dialog>
            </div>
            <div className="text-sm font-medium text-center text-gray-500 border-b px-6 md:px-10">
              <ul className="flex flex-wrap">
                <li className="mr-2">
                  <button
                    onClick={() => setIsActiveTab(true)}
                    className={`flex items-center tab-option  p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  ${
                      isActiveTab && "activeTab"
                    }`}
                  >
                    Active Accounts
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    onClick={() => setIsActiveTab(false)}
                    className={`flex items-center tab-option  p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  ${
                      !isActiveTab && "activeTab"
                    }`}
                    aria-current="page"
                  >
                    Archived Accounts
                  </button>
                </li>
              </ul>
            </div>

            {isActiveTab ? (
              <div id="active-accounts" className="tab-content px-6 md:px-10">
                <div className="overflow-scroll md:overflow-auto">
                  <table className="curo-table w-full table-auto">
                    <thead className="border-b">
                      <tr className="text-sm">
                        <th className="font-light py-4" align="left">
                          Account Name
                        </th>
                        <th className="font-light py-4" align="left">
                          Account ID
                        </th>
                        <th className="font-light py-4" align="left">
                          API Key
                        </th>
                        <th className="font-light py-4" align="left">
                          Secret Key
                        </th>
                        <th className="font-light py-4" align="left">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2">ByBit Trading Account</td>
                        <td className="px-2">134552181574</td>
                        <td className="px-2">1gcM741l0YYAzhM3r3</td>
                        <td className="px-2">
                          <div className="flex items-center gap-2">
                            {isShowKey ? (
                              <p
                                data-secret="secret1"
                                id="visible"
                                className=""
                              >
                                FxceWipnCjLZpLnnepJRdHGMmj4
                              </p>
                            ) : (
                              <p
                                data-secret="secret1"
                                id="hidden"
                                className="inline-block"
                              >
                                ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                              </p>
                            )}

                            <button
                              onClick={() => setIsShowKey((prev) => !prev)}
                            >
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.5 2.8125C4.375 2.8125 1.70625 4.75625 0.625 7.5C1.70625 10.2438 4.375 12.1875 7.5 12.1875C10.625 12.1875 13.2937 10.2438 14.375 7.5C13.2937 4.75625 10.625 2.8125 7.5 2.8125ZM7.5 10.625C5.775 10.625 4.375 9.225 4.375 7.5C4.375 5.775 5.775 4.375 7.5 4.375C9.225 4.375 10.625 5.775 10.625 7.5C10.625 9.225 9.225 10.625 7.5 10.625ZM7.5 5.625C6.4625 5.625 5.625 6.4625 5.625 7.5C5.625 8.5375 6.4625 9.375 7.5 9.375C8.5375 9.375 9.375 8.5375 9.375 7.5C9.375 6.4625 8.5375 5.625 7.5 5.625Z"
                                  fill="#161A1E"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-2">
                          <div
                            data-dropdown-toggle="action-account"
                            className="cursor-pointer flex items-center justify-center border rounded-md w-6 h-6"
                          >
                            <svg
                              width="10"
                              height="4"
                              viewBox="0 0 10 4"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.625 2C1.625 2.09946 1.58549 2.19484 1.51517 2.26517C1.44484 2.33549 1.34946 2.375 1.25 2.375C1.15054 2.375 1.05516 2.33549 0.984835 2.26517C0.914509 2.19484 0.875 2.09946 0.875 2C0.875 1.90054 0.914509 1.80516 0.984835 1.73483C1.05516 1.66451 1.15054 1.625 1.25 1.625C1.34946 1.625 1.44484 1.66451 1.51517 1.73483C1.58549 1.80516 1.625 1.90054 1.625 2ZM1.625 2H1.25M5.375 2C5.375 2.09946 5.33549 2.19484 5.26517 2.26517C5.19484 2.33549 5.09946 2.375 5 2.375C4.90054 2.375 4.80516 2.33549 4.73483 2.26517C4.66451 2.19484 4.625 2.09946 4.625 2C4.625 1.90054 4.66451 1.80516 4.73483 1.73483C4.80516 1.66451 4.90054 1.625 5 1.625C5.09946 1.625 5.19484 1.66451 5.26517 1.73483C5.33549 1.80516 5.375 1.90054 5.375 2ZM5.375 2H5M9.125 2C9.125 2.09946 9.08549 2.19484 9.01517 2.26517C8.94484 2.33549 8.84946 2.375 8.75 2.375C8.65054 2.375 8.55516 2.33549 8.48483 2.26517C8.41451 2.19484 8.375 2.09946 8.375 2C8.375 1.90054 8.41451 1.80516 8.48483 1.73483C8.55516 1.66451 8.65054 1.625 8.75 1.625C8.84946 1.625 8.94484 1.66451 9.01517 1.73483C9.08549 1.80516 9.125 1.90054 9.125 2ZM9.125 2H8.75"
                                stroke="#161A1E"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div
                            id="action-account"
                            className="z-10 hidden bg-white divide-y divide-gray-900 rounded-lg shadow w-50"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDefaultButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center gap-2 px-4 py-2 text-curoBlack"
                                >
                                  <svg
                                    width="24"
                                    height="27"
                                    viewBox="0 0 24 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.5 20.1818L2 18.5455L9.5 10.3636L13.5 14.7273L20.6 6L22 7.52727L13.5 18L9.5 13.6364L3.5 20.1818Z"
                                      fill="#161A1E"
                                    />
                                  </svg>
                                  Trade Account
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center gap-2 px-4 py-2 text-curoRed"
                                >
                                  <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 19.1819C6 20.2819 6.9 21.1819 8 21.1819H16C17.1 21.1819 18 20.2819 18 19.1819V7.18188H6V19.1819ZM8 9.18188H16V19.1819H8V9.18188ZM15.5 4.18188L14.5 3.18188H9.5L8.5 4.18188H5V6.18188H19V4.18188H15.5Z"
                                      fill="#D02626"
                                    />
                                  </svg>
                                  Remove Account
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div id="archived-accounts" className=" tab-content px-10">
                <div className="overflow-scroll md:overflow-auto">
                  <table className="curo-table w-full table-auto">
                    <thead className="border-b">
                      <tr className="text-sm">
                        <th className="font-light py-4" align="left">
                          Account Name
                        </th>
                        <th className="font-light py-4" align="left">
                          Account ID
                        </th>
                        <th className="font-light py-4" align="left">
                          API Key
                        </th>
                        <th className="font-light py-4" align="left">
                          Secret Key
                        </th>
                        <th className="font-light py-4" align="left">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-gray-300">
                        <td>ByBit Trading Account</td>
                        <td>134552181574</td>
                        <td>1gcM741l0YYAzhM3r3</td>
                        <td>
                          <div className="flex items-center gap-2">
                            <input
                              id="secret3"
                              className="border-0 w-44 text-sm"
                              type="password"
                              disabled
                              value="FxceWipnCjLZpLnnepJRdHGMmj4"
                            />
                            <button>
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.5 2.8125C4.375 2.8125 1.70625 4.75625 0.625 7.5C1.70625 10.2438 4.375 12.1875 7.5 12.1875C10.625 12.1875 13.2937 10.2438 14.375 7.5C13.2937 4.75625 10.625 2.8125 7.5 2.8125ZM7.5 10.625C5.775 10.625 4.375 9.225 4.375 7.5C4.375 5.775 5.775 4.375 7.5 4.375C9.225 4.375 10.625 5.775 10.625 7.5C10.625 9.225 9.225 10.625 7.5 10.625ZM7.5 5.625C6.4625 5.625 5.625 6.4625 5.625 7.5C5.625 8.5375 6.4625 9.375 7.5 9.375C8.5375 9.375 9.375 8.5375 9.375 7.5C9.375 6.4625 8.5375 5.625 7.5 5.625Z"
                                  fill="text-gray-300"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            data-dropdown-toggle="archived-action-account"
                            className="cursor-pointer flex items-center justify-center border rounded-md w-6 h-6"
                          >
                            <svg
                              width="10"
                              height="4"
                              viewBox="0 0 10 4"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.625 2C1.625 2.09946 1.58549 2.19484 1.51517 2.26517C1.44484 2.33549 1.34946 2.375 1.25 2.375C1.15054 2.375 1.05516 2.33549 0.984835 2.26517C0.914509 2.19484 0.875 2.09946 0.875 2C0.875 1.90054 0.914509 1.80516 0.984835 1.73483C1.05516 1.66451 1.15054 1.625 1.25 1.625C1.34946 1.625 1.44484 1.66451 1.51517 1.73483C1.58549 1.80516 1.625 1.90054 1.625 2ZM1.625 2H1.25M5.375 2C5.375 2.09946 5.33549 2.19484 5.26517 2.26517C5.19484 2.33549 5.09946 2.375 5 2.375C4.90054 2.375 4.80516 2.33549 4.73483 2.26517C4.66451 2.19484 4.625 2.09946 4.625 2C4.625 1.90054 4.66451 1.80516 4.73483 1.73483C4.80516 1.66451 4.90054 1.625 5 1.625C5.09946 1.625 5.19484 1.66451 5.26517 1.73483C5.33549 1.80516 5.375 1.90054 5.375 2ZM5.375 2H5M9.125 2C9.125 2.09946 9.08549 2.19484 9.01517 2.26517C8.94484 2.33549 8.84946 2.375 8.75 2.375C8.65054 2.375 8.55516 2.33549 8.48483 2.26517C8.41451 2.19484 8.375 2.09946 8.375 2C8.375 1.90054 8.41451 1.80516 8.48483 1.73483C8.55516 1.66451 8.65054 1.625 8.75 1.625C8.84946 1.625 8.94484 1.66451 9.01517 1.73483C9.08549 1.80516 9.125 1.90054 9.125 2ZM9.125 2H8.75"
                                stroke="#161A1E"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div
                            id="archived-action-account"
                            className="z-10 hidden bg-white divide-y divide-gray-900 rounded-lg shadow w-50"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDefaultButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center gap-2 px-4 py-2 text-curoRed"
                                >
                                  <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 19.1819C6 20.2819 6.9 21.1819 8 21.1819H16C17.1 21.1819 18 20.2819 18 19.1819V7.18188H6V19.1819ZM8 9.18188H16V19.1819H8V9.18188ZM15.5 4.18188L14.5 3.18188H9.5L8.5 4.18188H5V6.18188H19V4.18188H15.5Z"
                                      fill="#D02626"
                                    />
                                  </svg>
                                  Remove Account
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
