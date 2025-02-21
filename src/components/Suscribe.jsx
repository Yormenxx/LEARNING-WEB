import { FaBell } from "react-icons/fa"
import { motion } from "framer-motion"
function Suscribe() {
  return (
    <>
    <section >

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}

        
        className="px-20 py-24 md:py-48 bgSuscribe">
            <motion.div 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6, ease:"easeInOut"}}

            
            className="flex flex-col justify-center">
                <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                    <h1 className="text-4xl font-bold !leading-snug">450K+ Students are learning from us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima</p>
                    <a href="" className="!mt-8 inline-flex items-center gap-4 group bg-emerald-600 text-white px-3 py-2 rounded-2xl ">
                        Suscribe now
                        <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200"/>
                    </a>
                </div>
            </motion.div>
        </motion.div>

    </section>
    
    </>
  )
}

export default Suscribe