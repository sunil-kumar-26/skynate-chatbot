import { MdOutlineQuestionAnswer } from "react-icons/md";
import { SiInductiveautomation } from "react-icons/si";
import { GiQuickSlash } from "react-icons/gi";
import { GiFreemasonry } from "react-icons/gi";
import { FaWordpressSimple } from "react-icons/fa";

type content = {
  label: string;
  icon: React.ReactNode;
};
export const StripContent: content[] = [
  {
    label: "Fast Resolution",
    icon: <MdOutlineQuestionAnswer />,
  },
  {
    label: "Smart-Automation",
    icon: <SiInductiveautomation />,
  },
  {
    label: "Quick-Assist",
    icon: <GiQuickSlash />,
  },
  {
    label: "Free-Use",
    icon: <GiFreemasonry />,
  },
  {
    label: "Easy-Use",
    icon: <FaWordpressSimple />,
  },
  
  
];
