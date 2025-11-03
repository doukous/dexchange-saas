import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";


export default function TableCustom({ headerList, children, additionalClassName='', title, description }: {headerList: string[], children: React.ReactNode, additionalClassName?: string, title: string, description?: React.ReactNode }) {
    return (
        <div className={`${additionalClassName} w-full p-4 flex flex-col bg-white rounded-2xl shadow-md shadow-gray-100`}>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-400 text-sm">
                    {description}
                </p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="[&>th]:text-gray-400">
                        <TableHead className="w-xl">{headerList[0].toUpperCase()}</TableHead>
                        {
                            headerList.slice(1).map((item, key) => (
                                <TableHead key={key}>{item.toUpperCase()}</TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </div>
    )
}