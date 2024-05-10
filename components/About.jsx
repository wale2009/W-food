'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Button } from './ui/button';


const About = () => {
    return (
        <section className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12
        xl:p-0 items-center'
            id='about'>
            {/* text */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='xl:pl-[135px]'>
                <h1 className='mb-9'>
                    Let's Talk About W'Food
                </h1>
                <p className='mb-8'>
                    Indulge in a culinary journey of exquisite international
                    flavors at W'Food for a Good. Savor each bite as we bring you
                    a symphony of tastes from around the world. Experience
                    dining redefined, where every dish tells a story of passion
                    and authenticity.
                </p>
                <p className=' mb-10'>
                    Satisfy your cravings with a global gastronomic adventure at
                    W'Food for a Good. Explore diverse culinary traditions
                    crafted with love and expertise, promising an unforgettable
                    dining experience.
                </p>
                <Button>Read more</Button>
            </motion.div>
            {/* img */}
            <motion.div
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Image src='/about/img.png' width={705} height={771} alt=''
                    className='hidden xl:flex' />
            </motion.div>
        </section>
    )
}

export default About