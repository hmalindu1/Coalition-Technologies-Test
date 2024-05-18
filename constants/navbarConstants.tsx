import Home from "@/assets/icons/navbar/Home"
import Patients from "@/assets/icons/navbar/Patients"
import Message from "@/assets/icons/navbar/Message"
import Schedule from "@/assets/icons/navbar/Schedule"
import Transaction from "@/assets/icons/navbar/Schedule"


export const navbarConstants = [
  { href: '/', label: 'Overview', icon: <Home /> },
  { href: '/patients', label: 'Patients', icon: <Patients /> },
  { href: '/schedule', label: 'Schedule', icon: <Schedule /> },
  { href: '/message', label: 'Message', icon: <Message /> },
  { href: '/transactions', label: 'Transactions', icon: <Transaction /> },
]
