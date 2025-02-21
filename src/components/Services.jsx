import { serviceItems, iconMap } from '../constants/index';
import { motion } from 'framer-motion';
function Services() {
    const SlideLeft = (delay) =>{
        return {
            initial:{
                opacity:0,
                x:50
            },
            animate:{
                opacity:1,
                x:0,
                transition:{
                    duration:0.3,
                    delay,
                    ease:"easeInOut"
                }
            }
        }
    }

    return (
        <>
            <section>
                <div className="px-18 pb-14 pt-16 ">
                    <h1 className="capitalize text-4xl font-bold text-left text-emerald-100 pb-10 ">Service we provide</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                        {serviceItems.map((item, index) => {
                            const IconComponent = iconMap[item.icon]; 
                            return (
                                <motion.div 
                                variants={SlideLeft(item.delay)}
                                initial = "initial"
                                whileInView={"animate"}
                                viewport={{once:true}}
                                key={index} className="bg-white rounded-2xl flex flex-col items-center gap-4 px-4 py-8 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl ">
                                    <div className="text-4xl mb-4 flex justify-center text-neutral-700">
                                        {IconComponent && <IconComponent />} 
                                    </div>
                                    <h1 className="text-lg font-bold text-center px-3 text-neutral-700 ">
                                        {item.title}
                                    </h1>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services