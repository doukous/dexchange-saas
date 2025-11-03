import { IconType } from 'react-icons';
import { Button } from './ui/button';

export default function AuthIconCard({ Icon } : { Icon : IconType }) {
    return (
        <Button variant={'link'} type='button' className="size-16 rounded-2xl ring-1 ring-gray-200 flex items-center justify-center">
            <Icon className='size-6' />
        </Button>
    )
}

