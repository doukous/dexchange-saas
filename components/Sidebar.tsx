import { FaHome } from "react-icons/fa"
import SidebarButton from "./SideBarButton"
import { IoBuild, IoDocument, IoRocketSharp, IoStatsChart } from "react-icons/io5"
import { BsCreditCardFill, BsPersonFill } from "react-icons/bs"

export default function Sidebar() {
    return (
      <div className="h-screen w-64 px-6">
        <h2 className="text-center font-bold my-6">DEXCHANGE SAAS</h2>
        <hr />
        <div className="flex flex-col">
          <SidebarButton Icon={FaHome} title="Dashboard" />
          <SidebarButton Icon={IoStatsChart} title="Transactions" />
          <SidebarButton Icon={BsCreditCardFill} title="Billing"/>
          <SidebarButton Icon={IoBuild} title="RTL" />
        </div>
        <div className="mt-8">
          <h3>ACCOUNT PAGES</h3>
          <SidebarButton Icon={BsPersonFill} title="Profile" />
          <SidebarButton Icon={IoDocument} title="Sign In" />
          <SidebarButton Icon={IoRocketSharp} title="Sign Up" />
        </div>
      </div>
    )
}