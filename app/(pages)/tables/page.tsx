import { Metadata } from "next";
import UpperBar from "@/components/UpperBar";
import TableCustom from "@/components/TableCustom";
import authorsData from "../../../data/authorsTable.json";
import projectsData from "../../../data/projetctsTable.json";
import { TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = {
  title: "Dexchange - Tables",
};

export default function Table() {
    const authorsHeaderList = ['author', 'function', 'status', 'employed']
    const projectsHeaderList = ['compagnies', 'budget', 'status', 'completion']

    return (
        <>
            <UpperBar />
            <h1 className="font-bold mx-2">Tables</h1>
            <TableCustom 
                headerList={authorsHeaderList}
                title="Author table"
            >
                {
                    authorsData.map((item: AuthorsDataItem, key) => (
                        <TableRow className="[&>td]:font-bold" key={key}>
                            <TableCell>
                                <h4>{item.name}</h4>
                                <span className="font-light">{item.email}</span>
                            </TableCell>
                            <TableCell>
                                <h4>{item.role}</h4>
                                <span className="font-light">{item.department}</span>
                            </TableCell>
                            <TableCell>
                            {
                                item.is_online ?
                                <p className="bg-green-600/80 text-white text-center w-15 py-1 rounded-lg">Online</p>
                                :
                                <p className="bg-gray-400/60 text-white text-center w-15 py-1 rounded-lg">Offline</p>
                            }
                            </TableCell>
                            <TableCell>{item.employed_at}</TableCell>
                            <TableCell className="text-gray-600">Edit</TableCell>
                        </TableRow>
                    ))}
            </TableCustom>
            <TableCustom 
                headerList={projectsHeaderList}
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
                            <TableCell>
                                {
                                item.budget ?
                                <span>${item.budget}</span>
                                :
                                <span>Not Set</span>
                                }
                                    
                            </TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell className="text-teal-400">
                                <p>{item.completion}%</p>
                                <Progress className="h-1 w-32 **:data-[slot='progress-indicator']:bg-teal-400" value={item.completion} />
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    )
                )}
            </TableCustom>
        </>
    )
}