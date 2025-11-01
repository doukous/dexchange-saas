import Card from "@/components/Card";
import UpperBar from "@/components/UpperBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dexchange - Home",
};

export default function Dashboard() {
  return (
      <>
        <UpperBar />
        <h1>Dashboard</h1>
        <div className="flex">
          <div className="w-full flex items-center justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex justify-between h-48">
          <div className="bg-gray-400 w-4/7"></div>
          <div className="bg-gray-400 w-2/5"></div>
        </div>
        <div className="flex justify-between w-full h-96">
          <div className="flex w-7/10 flex-col ring-1">
            <div>
              <h3>Projects</h3>
              <p><strong>30 done</strong> this month</p>
            </div>
          </div>
          <div className="w-1/4 ring-1">

          </div>
        </div>
      </>
  );
}
