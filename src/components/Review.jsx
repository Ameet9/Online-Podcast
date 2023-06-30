import React from 'react'
import profilePic from "../assets/Lolla 1.png";
import arrow from "../assets/pepicons-pencil_arrow-right.svg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import star from "../assets/fluent-emoji-flat_star.svg";

export default function Review() {
    return (
        <>
            <div className='p-40' id='Reviews'>
                <div>
                    <h1 className='text-black text-4xl font-inter font-bold'>Review from customers</h1>
                    <p className='text-black text-s font-poppins font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                </div>
                <div className="container mx-auto">
                    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                        {/* Carousel for desktop and large size devices */}
                        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={3} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center reviewCarousel">
                                <ButtonBack role="button" aria-label="slide backward" className="sticky z-30 left-10 ml-8  cursor-pointer" id="prev">
                                    <img src={arrow} alt="" className="scale-x-[-1] p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white" />
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider>
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            {Array.from(Array(6).keys()).map((index) => (
                                                <Slide index={index} key={index}>
                                                    <div className=" flex flex-shrink-0 relative w-full sm:w-auto bg-white rounded-lg shadow-md border border-gray-200 p-4">
                                                        <div>
                                                            <div className='grid grid-flow-row auto-rows-max gap-4'>
                                                                <div className='grid grid-flow-col auto-cols-max gap-4'>
                                                                    <div>
                                                                        <img src={profilePic} className="" />
                                                                    </div>
                                                                    <div>
                                                                        <h1 className='text-black text-base font-inter font-bold'>Lolla Smith</h1>
                                                                        <h1 className='text-black text-sm font-poppins font-normal'>Microsoft</h1>
                                                                        <div className='grid grid-flow-col auto-cols-max' >
                                                                            {Array.from(Array(5).keys()).map((s) => (
                                                                                <img src={star} alt="" key={s} />
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className='text-black text-xs font-poppins font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Slide>
                                            ))}
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="sticky z-30 right-10 mr-8 " id="next">
                                    <img src={arrow} alt="" className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' />
                                </ButtonNext>
                            </div>
                        </CarouselProvider>

                        {/* Carousel for tablet and medium size devices */}
                        <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="sticky z-30 left-10 ml-8  cursor-pointer" id="prev">
                                    <img src={arrow} alt="" className="scale-x-[-1] p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white" />
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider>
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            {Array.from(Array(6).keys()).map((index) => (
                                                <Slide index={index} key={index}>
                                                    <div className=" flex flex-shrink-0 relative w-full sm:w-auto bg-white rounded-lg shadow-md border border-gray-200 p-4">
                                                        <div className='grid grid-flow-row auto-rows-max gap-4'>
                                                            <div className='grid grid-flow-col auto-cols-max gap-4'>
                                                                <div>
                                                                    <img src={profilePic} className="" />
                                                                </div>
                                                                <div>
                                                                    <h1>Lolla Smith</h1>
                                                                    <h1>Microsoft</h1>
                                                                    <div className='grid grid-flow-col auto-cols-max' >
                                                                        {Array.from(Array(5).keys()).map((s) => (
                                                                            <img src={star} alt="" key={s} />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slide>
                                            ))}
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="sticky z-30 right-10 mr-8 " id="next">
                                    <img src={arrow} alt="" className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' />
                                </ButtonNext>
                            </div>
                        </CarouselProvider>

                        {/* Carousel for mobile and Small size Devices */}
                        <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={1} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="sticky z-30 left-10 ml-8  cursor-pointer" id="prev">
                                    <img src={arrow} alt="" className="scale-x-[-1] p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white" />
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider>
                                        <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                            {Array.from(Array(6).keys()).map((index) => (
                                                <Slide index={index} key={index}>
                                                    <div className=" flex flex-shrink-0 relative w-full sm:w-auto bg-white rounded-lg shadow-md border border-gray-200 p-4">
                                                        <div className='grid grid-flow-row auto-rows-max gap-4'>
                                                            <div className='grid grid-flow-col auto-cols-max gap-4'>
                                                                <div>
                                                                    <img src={profilePic} className="" />
                                                                </div>
                                                                <div>
                                                                    <h1>Lolla Smith</h1>
                                                                    <h1>Microsoft</h1>
                                                                    <div className='grid grid-flow-col auto-cols-max' >
                                                                        {Array.from(Array(5).keys()).map((s) => (
                                                                            <img src={star} alt="" key={s} />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slide>
                                            ))}
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="sticky z-30 right-10 mr-8" id=" next">
                                    <img src={arrow} alt="" className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' />
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>
                </div >
            </div >
        </>
    )
}
