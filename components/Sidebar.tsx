export default function Sidebar() {
    return (
        <div className="h-screen bg-amber-200 w-64">
        <h2>dexchange saas</h2>
        <hr />
        <div className="flex flex-col">
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>Dashboard</span>
          </div>
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>Transactions</span>
          </div>
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>Billing</span>
          </div>
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>RTL</span>
          </div>
        </div>
        <div className="mt-8">
          <h3>Account pages</h3>
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>Profile</span>
          </div>
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>Sign In</span>
          </div>
          <div className="flex gap-x-4 p-2 items-center">
            <div className="size-8 rounded-lg bg-gray-300"></div>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    )
}