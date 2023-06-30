import React from 'react'
import facebook from "../assets/mdi_facebook.svg";
import insta from "../assets/basil_instagram-solid.svg";
import mail from "../assets/uil_youtube.svg";
import twitter from "../assets/uil_twitter.svg";
import polyfooter from "../assets/Polygon 2.png";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <footer className="py-4 text-white text-center sticky footerContent">
                    <div className='grid grid-rows-5 gap-2 justify-center text-center footerDiv'>
                        <h1 className='text-4xl font-bold font-inter text-black'>We have what you’re looking for</h1>
                        <p className='text-center text-12 font-normal font-poppins text-purple-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
                        <div>
                            <button className='rounded-lg px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white my-4'>Get Started Now</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center py-4 bottom-0 left-0  border-t border-white'>
                            <div className='flex items-center gap-4'>
                                <h2 className='text-white'>All Right Reserved @Copyright 2023</h2>
                                <div className='w-8'></div>
                            </div>
                            <div className='flex items-center gap-16 px-8 p-auto'>
                                <div className='flex items-center gap-8 px-8 p-auto'>
                                    <div className='flex-2 text-white'>
                                        <h3>Terms of Service</h3>
                                    </div>
                                    <div className='flex-2 text-white'>
                                        <h3>Privacy Policy</h3>
                                    </div>
                                    <div className='flex-1 text-white'>
                                        <h3>Product</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 px-2 md:gap-4 md:px-8'>
                                    <div className='flex-1 text-white'>
                                        <img
                                            className=" inset-0  object-cover rounded-lg"
                                            src={facebook}
                                            alt="Image 2"
                                        />
                                    </div>
                                    <div className='flex-1 text-white'>
                                        <img
                                            className=" inset-0  object-cover rounded-lg"
                                            src={insta}
                                            alt="Image 2"
                                        />
                                    </div>
                                    <div className='flex-1 text-white'>
                                        <img
                                            className=" inset-0  object-cover rounded-lg"
                                            src={mail}
                                            alt="Image 2"
                                        />
                                    </div>
                                    <div className='flex-1 text-white'>
                                        <img
                                            className=" inset-0  object-cover rounded-lg"
                                            src={twitter}
                                            alt="Image 2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <img
                    className="triangle2 sticky"
                    src={polyfooter}
                    alt="Image 2"
                />
            </div >
        </>
    )
}
