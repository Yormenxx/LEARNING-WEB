import { navItems } from "../constants"
import { useState } from "react"
import { Menu, X } from "lucide-react"
function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <>
            <header className="w-full relative">
                <nav className="relative z-20 py-5 px-1.5 text-white bg-neutral-950 ">
                    <div className="flex justify-around items-center">

                        <div>
                            <h1 className="font-bold text-2xl uppercase text-emerald-300">Learning web</h1>
                        </div>

                        <div className="lg:flex hidden">
                            <ul className="flex justify-between items-center space-x-5 ">
                                {
                                    navItems.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} className="inline-block capitalize text-lg hover:text-emerald-300 duration-200 ease-in-out relative group">

                                                <div className="w-2 h-2 absolute bg-emerald-300 rounded-full mt-3 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden">

                                                </div>
                                                {item.title}
                                            </a>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <a href="" className="bg-gradient-to-r from-emerald-500 to-emerald-700 py-1 px-4 border rounded-md hover:opacity-70 hidden lg:flex">Sign up</a>

                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar} className=" cursor-pointer">

                                {mobileDrawerOpen ? <X /> : <Menu />}

                            </button>
                        </div>

                    </div>


                    {
                        mobileDrawerOpen && (
                            <div className="w-[98%] py-3 absolute top-18 bg-neutral-950 flex flex-col justify-center items-center lg:hidden">
                                <ul className="relative z-20 flex flex-col p-2 justify-center items-center space-y-5 ">
                                    {
                                        navItems.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link} className="inline-block capitalize text-lg hover:text-emerald-300 duration-200 ease-in-out relative group">

                                                    <div className="w-2 h-2 absolute bg-emerald-300 rounded-full mt-3 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden">

                                                    </div>
                                                    {item.title}
                                                </a>

                                            </li>
                                        ))
                                    }
                                </ul>

                                <a href="" className="bg-gradient-to-r from-emerald-500 to-emerald-700 py-1 px-4 border rounded-md hover:opacity-70">Sign up</a>
                            </div>


                        )
                    }

                </nav>
            </header>
        </>
    )
}

export default Navbar