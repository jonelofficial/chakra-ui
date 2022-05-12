import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineFilePdf,
  AiOutlineBarChart,
} from "react-icons/ai";

export const navlink = [
  {
    id: "1",
    name: "Dashboard",
    icon: AiOutlineHome,
    path: "/",
    accordion: {},
    defaultShow: true,
  },
  {
    id: "2",
    name: "Team",
    icon: AiOutlineTeam,
    path: "#",
    accordion: [
      { name: "Team", icon: "", path: "/team" },
      { name: "Team List", icon: "", path: "/team/team-list" },
    ],
    defaultShow: true,
  },
  {
    id: "3",
    name: "Calendar",
    icon: AiOutlineCalendar,
    path: "/calendar",
    accordion: {},
    defaultShow: true,
  },
  {
    id: "4",
    name: "Requester",
    icon: AiOutlineFilePdf,
    path: "/request",
    accordion: {},
    defaultShow: false,
  },
  {
    id: "5",
    name: "Support",
    icon: AiOutlineBarChart,
    path: "/suppport",
    accordion: {},
    defaultShow: false,
  },
];
