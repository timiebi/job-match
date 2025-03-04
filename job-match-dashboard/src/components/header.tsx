import { useLocation } from "react-router-dom"

export function Header() {
    const location = useLocation();

    return (
        <>
            <header
                className=" md:fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6 text-center rounded-b-3xl shadow-lg">
                <h1 className="text-3xl md:text-5xl font-extrabold">AI-Powered Job Match</h1>
                {location.state && <span>welcome: {location.state.email}</span>}
                <p className="text-l md:text-xl mt-3 opacity-90">
                    Find your dream job with intelligent AI matching!
                </p>
            </header>
        </>
    )
}