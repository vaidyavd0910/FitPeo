import { GiLoveInjection } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";

const upcomingScheduleData = [
  {
    day: "Thursday",
    appointments: [
      {
        type: "Health checkup complete",
        icon: GiLoveInjection ,
        time: "11:00 AM"
      },
      {
        type: "Ophthalmologist",
        icon: FaRegEye,
        time: "14:00 PM"
      }
    ]
  },
  {
    day: "Saturday",
    appointments: [
      {
        type: "Cardiologist",
        icon: FaHeart,
        time: "12:00 AM"
      },
      {
        type: "Neurologist",
        icon: IoIosPerson,
        time: "16:00 PM"
      }
    ]
  }
];
 
export default upcomingScheduleData;