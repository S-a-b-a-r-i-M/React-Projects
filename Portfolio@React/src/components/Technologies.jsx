import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { DiDjango } from 'react-icons/di'
import { SiCelery } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { motion } from 'framer-motion'
      

const iconAnimateConfig = (duration) => ({
    animate: {
        y: [5, -10],
        opacity: 1,
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-14'>
        <motion.h2
            initial={{y: -50, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{duration: 0.5}}
            className='text-3xl text-center lg:text-4xl my-20'
        >
            Technologies
        </motion.h2>
        <motion.div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
            <motion.div 
                variants={iconAnimateConfig(2.0)}
                animate="animate"
                className='text-3xl border-4 border-neutral-800 rounded-xl p-4'
            >
                <RiReactjsLine className='text-6xl lg:text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
                variants={iconAnimateConfig(2.5)}
                animate="animate"
                className='text-3xl border-4 border-neutral-800 rounded-xl p-4'
            >
                <SiMongodb className='text-6xl lg:text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
                variants={iconAnimateConfig(3.5)}
                animate="animate"
                className='text-3xl border-4 border-neutral-800 rounded-xl p-4'
            >
                <DiRedis className='text-6xl lg:text-7xl text-red-700'/>
            </motion.div>
            <motion.div 
                variants={iconAnimateConfig(4.5)}
                animate="animate"
                className='text-3xl border-4 border-neutral-800 rounded-xl p-4'
            >
                <DiDjango className='text-6xl lg:text-7xl text-orange-500'/>
            </motion.div>
            <motion.div 
                variants={iconAnimateConfig(3.5)}
                animate="animate"
                className='text-3xl border-4 border-neutral-800 rounded-xl p-4'
            >
                <SiCelery className='text-6xl lg:text-7xl text-green-300'/>
            </motion.div>
            <motion.div 
                variants={iconAnimateConfig(2.5)}
                animate="animate"
                className='text-3xl border-4 border-neutral-800 rounded-xl p-4'
            >
                <SiPostgresql className='text-6xl lg:text-7xl text-sky-500'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies