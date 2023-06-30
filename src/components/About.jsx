import React from 'react'

export default function About() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 aboutPage mx-32" id='About'>
                <div className="p-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2  md:gap-10 gap-6">
                        <div className="col-span-1 ">
                            <div className=" border-purple-900 border-2 rounded-md p-6 py-8">
                                <h1 className='text-2xl font-bold font-poppins'>Interactive Features</h1>
                                <p className='text-xs font-normal font-poppins py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            </div>
                            <div className=" border-purple-900 border-2 rounded-md p-6 mt-10 py-8">
                                <h1 className='text-2xl font-bold font-poppins'>Interactive Features</h1>
                                <p className='text-xs font-normal font-poppins py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            </div>
                        </div>
                        <div className="col-span-1 mt-8">
                            <div className=" border-purple-900 border-2 rounded-md p-6 py-8">
                                <h1 className='text-2xl font-bold font-poppins'>Interactive Features</h1>
                                <p className='text-xs font-normal font-poppins py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            </div>
                            <div className=" border-purple-900 border-2 rounded-md p-6 mt-10 py-8">
                                <h1 className='text-2xl font-bold font-poppins'>Interactive Features</h1>
                                <p className='text-xs font-normal font-poppins py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 lg:m-16">
                    <div className='flex flex-col'>
                        <h1 className='text-5xl font-inter font-bold text-black my-4'>About the Course</h1>
                        <p className='text-base font-inter font-normal text-black my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
                        <div>
                            <button className='rounded-lg px-12 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white my-4'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
