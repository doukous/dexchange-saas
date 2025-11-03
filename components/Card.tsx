import { IconType } from "react-icons";

export default function Card(
    { title, Icon, quantity, type, percentage }: 
    { title: string, Icon: IconType, quantity: number, type: 'money' | 'units', percentage: number }) 
    {
    return (
        <div className="bg-white shadow-2xs font-bold rounded-2xl p-4 flex items-center w-84 h-16 justify-between">
            <div className="flex flex-col">
                <h3 className="text-gray-400 text-xs">{title}</h3>
                <div className="flex space-x-2">
                    <p>
                        {type === 'money' && '$'}
                        {type === 'units' && quantity > 0 && '+'}
                        {quantity.toLocaleString('en-US')}
                    </p>
                    {
                        percentage >= 0 ?
                        <p className="text-green-500">+{percentage}%</p>
                        :
                        <p className="text-red-600">{percentage}%</p>
                    }
                </div>
            </div>
            <div className="bg-teal-400 size-8 rounded-sm flex items-center justify-center">
                <Icon color="white" size={20} />
            </div>
        </div>
    )
}