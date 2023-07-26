import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiPower } from "react-icons/ci";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { useLocation } from "wouter";
const ProfileMenu = () => {
  const [location, navigate] = useLocation();

  console.log(location);

  const handleClickLink = (path: string) => {
    navigate(path);
  };
  return (
    <div className=" flex items-center">
      <Menubar className=" border-none ">
        <MenubarMenu>
          <MenubarTrigger className=" bg-[#161a1e] rounded-full border-none">
            <Avatar className="  !bg-[#161a1e]  ">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => handleClickLink("/profile")}>
              <CgProfile size={24} />
              <span className=" ml-2 text-base">My Profile</span>
            </MenubarItem>
            <MenubarItem onClick={() => handleClickLink("/edit/profile")}>
              <AiOutlineSetting size={24} />
              <span className=" ml-2 text-base">Edit Profile</span>
            </MenubarItem>
            <MenubarItem onClick={() => handleClickLink("/inbox")}>
              <HiOutlineInboxStack size={24} />
              <span className=" ml-2 text-base">Inbox</span>
            </MenubarItem>
            <MenubarItem onClick={() => handleClickLink("/help")}>
              <BiHelpCircle size={24} />
              <span className=" ml-2 text-base">Help</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => handleClickLink("/login")}>
              <CiPower size={24} />
              <span className=" ml-2 text-base">Logout</span>
            </MenubarItem>
            <MenubarItem onClick={() => handleClickLink("/register")}>
              <CiPower size={24} />
              <span className=" ml-2 text-base">Register</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default ProfileMenu;
