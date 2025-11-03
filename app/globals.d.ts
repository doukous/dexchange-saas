declare module '*.css';
interface AuthorsDataItem {
    name: string
    email: string
    role: string
    department: string
    is_online: boolean
    employed_at: string
}

interface ProjectsDataItem {
    name: string | null
    members: string[]
    budget: number | null
    completion: number
    status: string | null
}

interface OrdersDataItem {
    icon: string
    title: string
    datetime: string
}