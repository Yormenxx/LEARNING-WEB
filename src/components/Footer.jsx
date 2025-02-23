import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { motion } from "framer-motion"


function Footer() {
  return (
    <>

        <footer >
            <div className="px-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">

                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold text-white">The Coding Journey</h1>
                        <p className=" text-neutral-200">TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold text-white">Courses</h1>
                            <div className="text-white">  
                                <ul className="space-y-2 text-lg ">
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        Web development
                                    </li>
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        Software development
                                    </li>
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        Apps development
                                    </li>
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        E-learning
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold text-white">Links</h1>
                            <div className="text-white">  
                                <ul className="space-y-2 text-lg ">
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                       Home
                                    </li>
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        Services
                                    </li>
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        About
                                    </li>
                                    <li className="cursor-pointer hover:text-emerald-200 duration-200 ease-in-out">
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h1></h1>
                    </div>

                </div>


            </div>


        </footer>
    
    </>
  )
}

export default Footer