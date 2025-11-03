import Card from "@/components/Card";
import TableCustom from "@/components/TableCustom";
import { TableCell, TableRow } from "@/components/ui/table";
import UpperBar from "@/components/UpperBar";
import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoGlobe, IoWallet } from "react-icons/io5";
import projectsData from "../../../data/projetctsTable.json";
import ordersData from "../../../data/orders.json";
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = {
  title: "Dexchange - Dashboard",
};

export default function Dashboard() {
  const headerList = ['compagnies', 'members', 'budget', 'completion']

  return (
      <>
        <UpperBar />
        <h1 className="font-bold mx-2">Dashboard</h1>
        <div className="flex">
          <div className="w-full flex items-center flex-wrap gap-y-2 justify-between">
            <Card 
              title="Today's Money" 
              Icon={IoWallet}
              quantity={53000}
              percentage={55}
              type="money"
            />
            <Card 
              title="Today's Users" 
              Icon={IoGlobe}
              quantity={2300}
              percentage={-5} 
              type="units"
            />
            <Card 
              title="New clients" 
              Icon={IoGlobe}
              quantity={3052}
              percentage={-14} 
              type="units"
            />
            <Card 
              title="Total Sales" 
              Icon={IoGlobe}
              quantity={173000}
              percentage={8} 
              type="money"
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap h-56">
          <div className="bg-white shadow-md shadow-gray-100 rounded-2xl w-4/7 flex justify-between">
            <div className="flex flex-col justify-between p-4">
              <div className="w-96">
                <h3 className="text-gray-400 font-bold text-sm">Lorem ipsum</h3>
                <h2 className="text-black font-bold">Lorem Dashboard</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center space-x-2 font-bold text-sm">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </div>
            <Image
              src="/chakra-img.png"
              alt="chakra image"
              width={360}
              height={204}
              className="object-contain px-2 mr-2"
            />
          </div>
          <div
            className="bg-white shadow-md shadow-gray-100 rounded-2xl p-2 w-2/5"
          >
            <div className="relative h-full w-full rounded-2xl text-white overflow-hidden">
              <Image
              src="/bg-lorem-ipsum.jpg"
              alt="lorem ipsum image"
              fill
              className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-gray-900/90 to-transparent" />
              <h3 className="absolute top-4 left-5 font-bold z-10">Lorem Ipsum</h3>
              <p className="absolute top-10 left-5 z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Lorem
              </p>
              <div className="absolute flex items-center space-x-2 bottom-2 left-5">
                <p className="text-xs font-bold">Read more</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full h-96 gap-4">
          <TableCustom 
            headerList={headerList} 
            additionalClassName="col-span-2"
            title="Projects"
            description={
              <>
                <strong>30 done</strong> this month
              </>
            }
          >
            {
              projectsData.map((item: Partial<ProjectsDataItem>, key) => (
                <TableRow className="[&>td]:font-bold" key={key}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>
                    {
                      item.budget ?
                      <span>${item.budget}</span>
                      :
                      <span>Not Set</span>
                    }
                        
                  </TableCell>
                  <TableCell className="text-teal-400">
                    <p>{item.completion}%</p>
                    <Progress className="h-1 w-32 **:data-[slot='progress-indicator']:bg-teal-400" value={item.completion} />
                  </TableCell>
                </TableRow>
            ))}
          </TableCustom>
          <div className="w-full bg-white shadow-md shadow-gray-100 rounded-xl p-4 col-span-1">
            <div>
              <h3 className="font-bold">Orders overview</h3>
              <p className="text-gray-400">
                <strong className="text-green-600">+30%</strong> this month
              </p>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
                {
                  ordersData.map((item: OrdersDataItem, index) => (
                    <div key={index} className="flex items-center gap-x-4 relative">
                      {index < ordersData.length - 1 && (
                        <div className="absolute left-[11px] rounded top-10 h-8 w-0.5 bg-gray-300" />
                      )}
                      <div className="size-6 rounded-2xl bg-black"></div>
                      <div className="flex flex-col">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="font-light">{item.datetime}</p>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </>
  );
}
