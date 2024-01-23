import React, { useRef, useState } from 'react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Avatar, Image, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function About({ activeLinkRef, activeLinkView }) {
    const [test, setTest] = useState(false);

    const clientsTestimonies = [
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
        {name: 'Name', jobTitle: 'Ceo Of PUPR', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Tincidunt augue interdum velit euismod. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget nunc lobortis mattis aliquam faucibus. Mattis ullamcorper velit sed ullamcorper.', rating: 5},
    ]

    return(
        <>
            <motion.div className='container mx-auto pt-20 xl:pt-40 overflow-hidden' >
                <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-center items-center text-white mb-52 xl:mb-72' id='about' ref={activeLinkRef}>
                    <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 1}} viewport={{ once: true}} className='font-semibold text-[33px] md:text-4xl 2xl:text-6xl'>Who We Are?</motion.p>
                    <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4, duration: 1}} viewport={{ once: true}} className='text-base md:text-xl 2xl:text-2xl w-11/12 lg:w-3/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia. Ultrices in iaculis nunc sed augue.</motion.p>
                    <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6, duration: 1}} viewport={{ once: true}}>
                        <Image className='h-[250px] md:h-[300px] lg:h-[450px] rounded-3xl w-[95vw] lg:w-screen object-center object-cover' src='/assets/images/BannerAbout.JPEG'/>
                    </motion.div>
                    
                </div>
                <div className='grid grid-cols-5 pb-[400px]'>
                    <div className='col-span-5 xl:col-span-2 flex justify-center items-center'>
                        <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 1}} viewport={{ once: true}} className='text-white text-center xl:text-left text-4xl md:text-[50px] 2xl:text-6xl leading-none w-11/12 xl:w-1/2 mb-10'>What Our Client Says</motion.p>
                    </div>
                    <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4, duration: 1}} viewport={{ once: true}} className='col-span-5 xl:col-span-3 h-full'>
                        <Swiper effect={'cards'} grabCursor={true} loop={true} autoplay={{delay: 2500, disableOnInteraction: false}} modules={[EffectCards, Autoplay]} className="text-black w-9/12 md:w-2/4" >
                            {clientsTestimonies.map((testimony, i) => (
                                <SwiperSlide key={i} className='bg-zinc-300 rounded-[20px] border border-[#0000004D]'>
                                    <div className='flex flex-col xl:w-[400px] w-full h-[520px]'>
                                        <div className='px-5 lg:px-8 py-12 lg:py-16 h-[408px] overflow-hidden'>
                                            <object data="/assets/svg/clientsTitikDua.svg" className='w-[50px] lg:w-[70px] h-[40px] lg:h-[50px]'></object>
                                            <p className='tracking-wide mt-3 text-black text-opacity-50 text-sm md:text-lg xl:text-base 2xl:text-lg 2xl:leading-[26px]'>{testimony.message}</p>
                                        </div>
                                        <div className='h-[112px] border-t border-[#0000004D] py-6 px-7 flex gap-4 overflow-hidden'>
                                            <Avatar size='lg' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                            <div>
                                                <p className='text-xl text-opacity-70 font-medium text-black'>{testimony.name}</p>
                                                <p className='text-black text-opacity-50 tracking-wider'>{testimony.jobTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </motion.div>
            
        </>
    )
}
