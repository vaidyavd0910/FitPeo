// menuData.js
const sidebarData = {
    logo: "Healthcare.",
    sections: [
      {
        title: "General",
        items: [
          { name: "Dashboard", icon: "grid", active: true },
          { name: "History", icon: "shuffle" },
          { name: "Calendar", icon: "calendar" },
          { name: "Appointments", icon: "clipboard" },
          { name: "Statistics", icon: "bar-chart" }
        ]
      },
      {
        title: "Tools",
        items: [
          { name: "Chat", icon: "message-square" },
          { name: "Support", icon: "phone" }
        ]
      }
    ],
    setting: { name: "Setting", icon: "settings" }
  };
  
  export default sidebarData;