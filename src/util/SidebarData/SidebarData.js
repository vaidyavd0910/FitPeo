import {
  RxDashboard
} from "react-icons/rx";
import {
  FiShuffle,
  FiCalendar,
  FiClipboard,
  FiBarChart,
  FiMessageSquare,
  FiPhone,
  FiSettings
} from "react-icons/fi";

const sidebarData = {
  logo: "Healthcare.",
  sections: [
    {
      title: "General",
      items: [
        { name: "Dashboard", icon: RxDashboard },
        { name: "History", icon: FiShuffle },
        { name: "Calendar", icon: FiCalendar },
        { name: "Appointments", icon: FiClipboard },
        { name: "Statistics", icon: FiBarChart }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Chat", icon: FiMessageSquare },
        { name: "Support", icon: FiPhone }
      ]
    }
  ],
  setting: { name: "Setting", icon: FiSettings }
};

export default sidebarData;
