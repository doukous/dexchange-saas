import Sidebar from "@/components/Sidebar";

export default function PageLayout({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col p-2 gap-y-4">
            {children}
          </div>
        </main>
    )
}