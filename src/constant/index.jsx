import { FaRegFolder, FaRegImage } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
export const navbar = [
  {
    to: "dashboard",
    name: "DashBoard",
    icon:<MdOutlineDashboard/>
  },
  {
    to: "manage-users",
    name: "Manage User",
    icon:<GrUserManager/>
  },
  { to: "manage-folder", name: "Manage Folder",icon:<FaRegFolder/>},
  { to: "manage-images", name: "Manage Images",icon:<FaRegImage/>},
];
