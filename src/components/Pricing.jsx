import React, { useState } from 'react'

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
            <div className='flex items-center justify-center'>
                <div className="grid grid-cols-1 text-center">
                    <div className="p-4">
                        <h1 className='text-3xl font-inter font-bold'>Choose your plan</h1>
                    </div>
                    <div className="p-4">
                        <p className='text-sm font-poppins font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center space-x-4 justify-center">
                            <div className={`rounded p-4 focus:outline-none transition-all duration-500 ${selectedOption === 'monthly' ? 'bg-green-500 ' : 'bg-gray-500'}`}>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="option"
                                        value="monthly"
                                        checked={selectedOption === 'monthly'}
                                        onChange={handleOptionChange}
                                        className="h-4 w-4 text-blue-500 radio-input"
                                    />
                                    <span className="ml-2">Monthly</span>
                                </label>
                            </div>
                            <div className={`rounded p-4 focus:outline-none transition-all duration-500 ${selectedOption === 'yearly' ? 'bg-green-500 ' : 'bg-gray-500'}`}>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="option"
                                        value="yearly"
                                        checked={selectedOption === 'yearly'}
                                        onChange={handleOptionChange}
                                        className="h-4 w-4 text-blue-500 radio-input"
                                    />
                                    <span className="ml-2">Yearly</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mx-40">
                        {selectedOption === 'yearly' ? (
                            <div className="grid grid-cols-3 gap-10">
                                {pricingDataYr.map((p) => (
                                    <div className='border border-black rounded transition-all duration-300 transform hover:bg-purple-500 hover:scale-110 p-10'>
                                        <div key={p.id} className='grid grid-rows-5 gap-2 rounded '>
                                            <h1>{p.planName}</h1>
                                            <p>{p.content}</p>
                                            <div>
                                                <p>{p.price}{p.planType}</p>
                                            </div>
                                            <ul>
                                                <li>{p.planContent}</li>
                                                <li>{p.planContent}</li>
                                                <li>{p.planContent}</li>
                                            </ul>
                                            <button className='p-2 m-auto bg-white border border-black rounded'>Start Free Trial</button>
                                        </div>
                                    </div>
                                ))}
                            </div>) : (
                            <div className="grid grid-cols-3 gap-10">
                                {pricingDataMo.map((p) => (
                                    <div className='border border-black rounded transition-all duration-300 transform hover:bg-purple-500 hover:scale-110 p-10'>
                                        <div key={p.id} className='grid grid-rows-5 gap-2 rounded '>
                                            <h1>{p.planName}</h1>
                                            <p>{p.content}</p>
                                            <div>
                                                <p>{p.price}{p.planType}</p>
                                            </div>
                                            <ul>
                                                <li>{p.planContent}</li>
                                                <li>{p.planContent}</li>
                                                <li>{p.planContent}</li>
                                            </ul>
                                            <button className='p-2 m-auto bg-white border border-black rounded'>Start Free Trial</button>
                                        </div>
                                    </div>
                                ))}
                            </div>)}
                    </div>
                </div>
            </div>
            <div></div>
        </>
    )
}
