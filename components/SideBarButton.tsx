import { IconType } from "react-icons";

export default function SidebarButton({ Icon, title }: { Icon: IconType, title: string }) {
    return (
        <div className="flex gap-x-4 p-2 items-center">
            <div className="flex items-center justify-center bg-teal-300 p-1.5 rounded-lg">
                <Icon size={'20'} color="white" />
            </div>
            <span className="text-gray-600">{title}</span>
        </div>
    )
}