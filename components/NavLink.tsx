import { IconType } from "react-icons";

export default function NavLink({ Icon, name }: { Icon: IconType, name: string }) {
    return (
        <nav className="flex items-center gap-x-1 font-bold">
            <Icon />
            {name}
        </nav>
    )
}