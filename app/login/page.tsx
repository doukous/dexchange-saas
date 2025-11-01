export default function LoginPage() {
    return (
        <>
        <header className="flex w-full justify-around">
                <nav>Dashboard</nav>
                <nav>Profile</nav>
                <nav>Sign up</nav>
                <nav>Sign in</nav>
                <button>Call to action</button>
            </header>
        <main className="flex flex-col items-center gap-y-4 h-full">
            <h1>Welcome!</h1>
            <div className="flex flex-col items-center ring-1 w-96 p-4 rounded-2xl">
                <h2 className="my-4">Register with</h2>
                <div className="flex gap-x-8">
                    <div className="size-16 rounded-2xl bg-gray-300"></div>
                    <div className="size-16 rounded-2xl bg-gray-300"></div>
                    <div className="size-16 rounded-2xl bg-gray-300"></div>
                </div>
                <span>or</span>
                <form method="post">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="ring-1" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="ring-1" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className="ring-1" />
                    </div>
                    <div>
                        <label htmlFor="remember">Remember me</label>
                        <input type="radio" name="remember" />
                        <input type="radio" name="remember" />
                    </div>
                    <input type="submit" value="Sign up" />
                    <span>Already have an account ? Sign In</span>
                </form>
            </div>
        </main>
        </>
    )
}