import React from 'react'
import everyone from "../assets/everyone-is-smiling.png";
import group from "../assets/group-business.png";
import dot from "../assets/Ellipse 94.svg";

export default function Signup() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 signupPage">
                <div className="p-4">
                    <div className='h-700 flex  justify-center ml-10 mt-10'>
                        <div className='container my-10 w-auto mx-16'>
                            <div className='flex flex-col'>
                                <h1 className='text-4xl font-inter font-bold text-white my-4'>Learn how to launch a successful podcast</h1>
                                <p className='text-base font-inter font-normal text-white my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div>
                                    <button className='rounded-lg px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white my-4'>Sign up Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className='container'>
                        <div className='groupImg'>
                            <img
                                className=" inset-0  object-cover rounded-lg"
                                src={group}
                                alt="Image 1"
                            />
                        </div>
                        <div className='everyoneImg'>
                            <img
                                className=" inset-0  object-cover rounded-lg"
                                src={everyone}
                                alt="Image 2"
                            />
                        </div>
                        <div className='dotImg'>
                            <div className="grid grid-cols-10 gap-8 dotImgURL">
                                {Array.from(Array(70).keys()).map((index) => (
                                    <img
                                        key={index}
                                        src={dot}
                                        alt="Image"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
