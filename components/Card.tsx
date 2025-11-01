export default function Card() {
    return (
        <div className="ring-1 p-2 flex gap-x-4 items-center w-64 justify-between">
            <div className="flex flex-col">
            <h3>Today's Money</h3>
            <div className="flex">
            <p>$53,000</p>
            <p>+55%</p>
            </div>
            </div>
            <div className="bg-emerald-200 size-8 rounded-sm"></div>
        </div>
    )
}