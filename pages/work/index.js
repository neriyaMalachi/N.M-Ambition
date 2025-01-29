import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <div>
      <div className='h-full bg-primary/30 py-36 flex items-center '>
        <Circles />
        <div className='container mx-auto '>
          <div className='flex flex-col xl:flex-row gap-x-8 xl:mt-32' >
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ' >
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-12'>
                כל פרויקט גדול
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='text-center text-2xl ' >
               מתחיל מתכנון קטן .
              </motion.p>

            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-[65%]'
            >

              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>);
};

export default Work;
