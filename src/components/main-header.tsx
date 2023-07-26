import { Logo } from "@/assets/images";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "wouter";
import ProfileMenu from "./profile-menu";

const MainHeader = () => {
  const [location, navigate] = useLocation();

  console.log(location);

  const handleClickLink = (path: string) => {
    navigate(path);
  };
  return (
    <header
      role="banner"
      className="flex items-center bg-black-curo h-16 z-30 border-b shadow-sm transition-all duration-300 ease-in-out   px-5 md:px-8 filter backdrop-blur-2xl"
    >
      <div className="w-full h-full mx-auto">
        <div className="flex h-full items-center justify-between">
          <div className="flex h-full items-center space-x-12">
            <Link className=" cursor-pointer block w-24 fw-svg mr-20" to="/">
              <img width={100} src={Logo} alt="" />
            </Link>
            <nav id="nav" className="hidden h-full lg:flex">
              <ul className="routes flex justify-between items-center space-x-6">
                <li
                  className="nav-item cursor-pointer text-white flex h-full items-center justify-center p-4"
                  key="home"
                >
                  <Link
                    to="/"
                    className="route cursor-pointer text-sm block hover:opacity-50 transition-opacity duration-200 ease-in-out"
                  >
                    Dashboard
                  </Link>
                </li>
                <li
                  data-dropdown-delay={200}
                  data-dropdown-toggle="dropdown"
                  data-dropdown-trigger="hover"
                  data-dropdown-placement="bottom-start"
                  key="trading"
                  className="nav-item cursor-pointer flex h-full items-center justify-center p-4"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Link
                        to="/trading"
                        className="route  text-white text-sm flex gap-2 items-center hover:opacity-70 transition-opacity duration-200 ease-in-out"
                      >
                        Trading
                        <svg
                          width={19}
                          height={19}
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_34_1682)">
                            <path
                              d="M14.1064 6V8.25949L9.5874 13.0497L5.06836 8.25949V6H14.1064Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_34_1682">
                              <rect
                                width="18.0762"
                                height="18.0762"
                                fill="white"
                                transform="translate(0.628906)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white divide-y divide-gray-100 rounded-lg shadow">
                      <DropdownMenuItem>
                        <li className="group flex gap-4 justify-between items-center hover:first-of-type">
                          <Link
                            to="/trading"
                            className="route flex flex-col gap-1"
                          >
                            <span className="group-hover:text-curoGreen title text-sm font-bold">
                              FTMO 100k Trading Account
                            </span>
                            <span className="text-xs font-light">
                              Account ID: 134552181574
                            </span>
                          </Link>
                          <svg
                            width={19}
                            height={19}
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.37939 3.44684L12.0044 9.1918L6.37939 14.9368"
                              stroke="#00F496"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </li>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {" "}
                        <li className="group flex gap-4 justify-between items-center hover:first-of-type">
                          <Link
                            to="/trading"
                            className="route flex flex-col gap-1"
                          >
                            <span className="group-hover:text-curoGreen text-sm font-bold hover:text-curoGreen">
                              Binance Trading Account
                            </span>
                            <span className="text-xs font-light">
                              Account ID: 134552181574
                            </span>
                          </Link>
                          <svg
                            width={19}
                            height={19}
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.37939 3.44684L12.0044 9.1918L6.37939 14.9368"
                              stroke="#00F496"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </li>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <li className="group flex gap-4 justify-between items-center hover:first-of-type">
                          <Link
                            to="/trading"
                            className="route flex flex-col gap-1"
                          >
                            <span className="group-hover:text-curoGreen text-sm font-bold hover:text-curoGreen">
                              ByBit Trading Account
                            </span>
                            <span className="text-xs font-light">
                              Account ID: 134552181574
                            </span>
                          </Link>
                          <svg
                            width={19}
                            height={19}
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.37939 3.44684L12.0044 9.1918L6.37939 14.9368"
                              stroke="#00F496"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </li>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </nav>
          </div>
          <ProfileMenu />
          <div className="sm:block lg:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleClickLink("/")}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleClickLink("/trading")}>
                  Trading
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleClickLink("/login")}>
                  Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
