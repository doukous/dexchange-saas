export default function UpperBar() {
    return (
        <div className="w-full flex justify-between">
          <p>Pages / Dashboard</p>
          <div className="flex gap-4">
            <input type="text" name="search" id="search-bar" placeholder="type here..." className="ring-1" />
            <div className="flex items-center gap-x-2">
              <div className="size-6 bg-gray-400 rounded-2xl"></div>
              <p>sign in</p>
            </div>
            <div className="size-6 bg-gray-400 rounded-2xl"></div>
            <div className="size-6 bg-gray-400 rounded-2xl"></div>
          </div>
        </div>
    )
}