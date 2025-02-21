import banner from "../assets/banner.png"

import { motion } from "framer-motion"

function Community() {
    return (
        <>
            <section>

                <div className="px-20 py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">

                    <motion.div 
                     initial={{opacity:0, x:-50}}
                     whileInView={{opacity:1, x:0}}
                    
                    className="flex flex-col justify-center">

                        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                            <h1 className="text-4xl font-bold !leading-snug text-emerald-200">
                                Join Our Community to Start your Journey
                            </h1>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
                            </p>
                            <a href="" className="!mt-8  bg-emerald-600 text-white px-3 py-2 rounded-2xl ">
                                Suscribe now

                            </a>
                        </div>

                    </motion.div>
                    <div className="flex justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                          
                            src={banner} alt="" className="w-[350px] md-w-[450px] object-cover drop-shadow-2xl " />
                    </div>

                </div>

            </section>

        </>
    )
}

export default Community