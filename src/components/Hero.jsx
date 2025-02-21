import { MoveUp } from "lucide-react"
import hero from "../assets/hero.png"
import blob from "../assets/blob.svg"
import { animate, motion } from "framer-motion"

export const FadeUp = (delay) =>{
    return {
        initial:{
            opacity:0,
            y:50
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                stiffness:100,
                duration:0.5,
                delay,
                ease:"easeInOut"
            }
        }
    }
}


function Hero() {
    return (
        <>
            <section className="px-10 bg-neutral-900 overflow-hidden relative">

                <div className="grid grid-cols-1 md:grid-cols-2  py-4 md:py-20 h-[600px]">

                    <div className="text-center md:text-left space-y-10 lg:max-w-[500px] py-4 md:py-20">
                        <motion.h1 
                        variants={FadeUp(0.6)}
                        initial="initial"
                        animate="animate"
                        
                        className="text-emerald-100 text-4xl md:text-6xl font-bold !leading-snug">Let's learn to build a {" "}
                            <span className="text-emerald-600">website</span> for your business
                        </motion.h1>

                        <motion.div 
                        variants={FadeUp(0.8)}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center md:justify-start " >
                            <a href="" className="bg-white text-emerald-900 flex items-center gap-2 py-2 px-4 border rounded-lg hover:opacity-70 group">
                                Get started
                                <MoveUp />
                            </a>
                        </motion.div>
                    </div>


                    <div className=" flex justify-center items-center">
                        <motion.img 
                        
                        initial={{x:50, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.6, delay:0.4, ease:"easeInOut"}}
                        src={hero} className="relative w-1/2 md:w-[80%] drop-shadow-2xl z-20" alt="hero" />
                        <motion.img 
                        initial={{x:-50, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.6, delay:0.2, ease:"easeInOut"}}
                        src={blob} alt=""  className="absolute  w-[700px] md:w[1500] z-10"/>
                    </div>

                   

                </div>


            </section>


        </>
    )
}

export default Hero