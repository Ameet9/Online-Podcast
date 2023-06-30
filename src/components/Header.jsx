import React from 'react'

export default function Header() {
    return (
        <>
            <div className='container mx-auto bg-transparent'>
                <div className='flex items-center justify-between py-4 px-28'>
                    <div className='flex items-center gap-4'>
                        <h2 className='text-white text-base font-inter font-normal'>Logo</h2>
                        <div className='w-8'></div>
                    </div>
                    <div className='flex items-center gap-16 px-8'>
                        <div className='flex-1 text-white'>
                            <h3 className='text-white text-base font-inter font-normal'>About</h3>
                        </div>
                        <div className='flex-1 text-white'>
                            <h3 className='text-white text-base font-inter font-normal'>Pricing</h3>
                        </div>
                        <div className='flex-1 text-white'>
                            <h3 className='text-white text-base font-inter font-normal'>Reviews</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
