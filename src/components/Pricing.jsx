import React, { useState } from 'react'
import line from "../assets/Line 2.png";

export default function Pricing() {
    const [selectedOption, setSelectedOption] = useState('monthly');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const pricingDataMo = [
        { id: 1, planName: "Basic Plan", content: "Lorem Ipsum is simply dummy text of the printing and typesetting", price: "$ 54", planType: "/month", planContent: "Free access to video className" },
        { id: 2, planName: "Premium Plan", content: "Lorem Ipsum is simply dummy text of the printing and typesetting", price: "$ 54", planType: "/month", planContent: "Free access to video className" },
        { id: 3, planName: "Basic Plan", content: "Lorem Ipsum is simply dummy text of the printing and typesetting", price: "$ 54", planType: "/month", planContent: "Free access to video className" },
    ];

    const pricingDataYr = [
        { id: 1, planName: "Basic Plan", content: "Lorem Ipsum is simply dummy text of the printing and typesetting", price: "$ 154", planType: "/yearly", planContent: "Free access to video className" },
        { id: 2, planName: "Premium Plan", content: "Lorem Ipsum is simply dummy text of the printing and typesetting", price: "$ 254", planType: "/yearly", planContent: "Free access to video className" },
        { id: 3, planName: "Basic Plan", content: "Lorem Ipsum is simply dummy text of the printing and typesetting", price: "$ 154", planType: "/yearly", planContent: "Free access to video className" },
    ];
    return (
        <>
            <div className='mt-20' id='Pricing'>
                <div className='flex items-center justify-center'>
                    <div className="grid grid-cols-1 text-center">
                        <div className="p-4">
                            <h1 className='text-3xl font-inter font-bold'>Choose your plan</h1>
                        </div>
                        <div className="p-4">
                            <p className='text-s font-poppins font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center space-x-4 justify-center bg-gray-200 p-1 shadow-lg rounded-full w-60 m-auto">
                                <div className={`rounded-full p-1 w-24 focus:outline-none transition-all duration-500 ${selectedOption === 'monthly' ? 'bg-green-500 ' : 'bg-gray-500'}`}>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="monthly"
                                            checked={selectedOption === 'monthly'}
                                            onChange={handleOptionChange}
                                            className="h-4 w-4 text-blue-500 radio-input"
                                        />
                                        <span className=" text-black text-center text-14 font-poppins font-bold">Monthly</span>
                                    </label>
                                </div>
                                <div className={`rounded-full p-1 w-24 focus:outline-none transition-all duration-500 ${selectedOption === 'yearly' ? 'bg-green-500 ' : 'bg-gray-500'}`}>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="yearly"
                                            checked={selectedOption === 'yearly'}
                                            onChange={handleOptionChange}
                                            className="h-4 w-4 text-blue-500 radio-input"
                                        />
                                        <span className=" text-black text-center text-14  font-poppins font-bold">Yearly</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 mx-10 md:mx-20 lg:mx-30">
                            {selectedOption === 'yearly' ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-10">
                                    {pricingDataYr.map((y) => (
                                        <div className='border border-black rounded transition-all duration-300 transform hover:bg-purple-500 hover:scale-110 p-10'>
                                            <div key={y.id} className='grid grid-flow-row auto-rows-max gap-4 rounded '>
                                                <h1 className='text-black text-3xl font-inter font-bold'>{y.planName}</h1>
                                                <p className='text-black text-s font-poppins font-normal'>{y.content}</p>
                                                <div className='h-auto'>
                                                    <p className='text-purple-900 text-2xl font-inter font-bold '>{y.price}{y.planType}</p>
                                                </div>
                                                <ul className='list-disc'>
                                                    <li className="text-black text-s font-inter font-bold">{y.planContent}</li>
                                                    <li className="text-black text-s font-inter font-bold">{y.planContent}</li>
                                                    <li className="text-black text-s font-inter font-bold">{y.planContent}</li>
                                                </ul>
                                                <button className='p-2 px-4 m-auto bg-white border border-black rounded shadow-lg text-s font-poppins font-normal'>Start Free Trial</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-10">
                                    {pricingDataMo.map((p) => (
                                        <div className='border border-black rounded transition-all duration-300 transform hover:bg-purple-500  hover:scale-110 p-10'>
                                            <div key={p.id} className='grid grid-flow-row auto-rows-max gap-4 rounded'>
                                                <h1 className='text-black text-3xl font-inter font-bold'>{p.planName}</h1>
                                                <p className='text-black text-s font-poppins font-normal'>{p.content}</p>
                                                <div>
                                                    <p className='text-purple-900 text-2xl font-inter font-bold '>{p.price}{p.planType}</p>
                                                </div>
                                                <ul className='list-disc'>
                                                    <li className="text-black text-s font-inter font-bold">{p.planContent}</li>
                                                    <li className="text-black text-s font-inter font-bold">{p.planContent}</li>
                                                    <li className="text-black text-s font-inter font-bold">{p.planContent}</li>
                                                </ul>
                                                <button className='p-2 px-4 m-auto bg-white border border-black rounded shadow-lg text-s font-poppins font-normal'>Start Free Trial</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>)}
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="lineImg"
                        src={line}
                        alt="Image 1"
                    />
                    <img
                        className="lineImg2"
                        src={line}
                        alt="Image 1"
                    />
                    <img
                        className="lineImg3"
                        src={line}
                        alt="Image 1"
                    />
                </div>
            </div>
        </>
    )
}
