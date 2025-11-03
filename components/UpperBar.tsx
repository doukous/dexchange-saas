"use client"

import { usePathname } from "next/navigation"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { BsFillPersonFill } from "react-icons/bs"
import { IoSettingsSharp } from "react-icons/io5"
import { FaBell } from "react-icons/fa6"

export default function UpperBar() {
  const pathname = usePathname()

    return (
        <div className="w-full flex justify-between">
          <div className="flex justify-between space-x-2 items-center">
            <span className="text-gray-500">Pages</span>
            <span>/</span>
            {
              pathname === '/dashboard' ?
              <span>Dashboard</span>
              :
              <span>Tables</span>
            }
          </div>
          <div className="flex items-center gap-4 text-gray-600 px-8">
            <Input
              type="text"
              name="search"
              id="search-bar"
              placeholder="Type here..."
              className="rounded-2xl bg-white h-7"
              iconLeft={<Search size={16}/>}
            />
            <div className="flex items-center gap-x-2">
              <BsFillPersonFill color="gray" />
              <p>Sign in</p>
            </div>
            <IoSettingsSharp color="gray" />
            <FaBell color="gray" />
          </div>
        </div>
    )
}