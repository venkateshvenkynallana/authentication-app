import React from 'react'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import bg4 from '../assets/bg4.png'
import globe from '../assets/globe.png'

const Dashboard = () => {
    return (
        <div className="bg-[url('./src/assets/bg.png')] bg-contain  bg-black w-full min-h-screen text-white space-y-20">
            <div className='flex justify-between pt-[4%] pl-[11%] pr-[11%] items-center'>
                <span className=' font-bold text-3xl'>Squid</span>
                <div className='flex gap-[5%]'>
                    <button className='p-[2%]'>
                        Home
                    </button>
                    <p className='bg-pink-300 p-[3%] rounded-md w-full'>
                        Download Template
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center text-center gap-8'>
                <h1 className='text-6xl w-1/2'>
                    Beautiful Landing Page Design for you
                </h1>
                <p className='w-1/3 items-center justify-center'>
                    A good design is not only aesthetically pleasing but also functional. It should  be able to solve the problem.
                </p>
                <p className='bg-pink-300 p-[1%] rounded-md'>
                    Download Template
                </p>
            </div>

            <img src={bg2} alt="" className='w-full' />

            <div>
                <div className='pl-[6%] space-y-6'>
                    <h1 className='text-3xl font-bold'>
                        Feature Boxes
                    </h1>
                    <p className='w-1/2'>
                        A good design is not only aesthetically pleasing but also functional. It should  be able to solve the problem.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-[5%] pl-[5%] pr-[5%]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className=" h-70 rounded-xl border border-gray-500 bg-gray-500  shadow-sm text-center items-center justify-center space-y-12"
                        >
                            <span className="text-lg font-semibold">Box {i + 1}</span>
                            <h1>Fully Customizable</h1>
                            <p className=''>
                                A good design is not only aesthetically pleasing but also functional. It should  be able to solve the problem.
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            <div className='flex ml-[8%] mr-[4%] gap-[7%]'>

                <img src={bg3} alt="" className='w-full h-full' />

                <div className='space-y-6'>
                    <h1 className='text-6xl font-bold mr-[6]'>We're here to guide and help you at all times</h1>
                    <p className='w-1/2'> A good design is not only aesthetically pleasing but also functional. It should  be able to solve the problem.</p>
                </div>
            </div>

            <div className='bg-gray-900 w-full flex flex-col items-center justify-center w-1/2 space-y-10 pt-[3%]'>
                <h1 className='text-4xl font-bold'>Companies we Worked with in since 2015</h1>
                <img src={bg4} alt="" className='w-full' />
            </div>

            <div className='flex'>
                <img src={globe} alt="" className='w-full h-[20%] ml-[6%] mr-[12%]' />
                <div className='flex flex-col mr-[2%] space-y-4'>
                    <h1 className='text-4xl font-bold'>Get In Touch</h1>
                    <p className='w-full'> A good design is not only aesthetically pleasing but also functional. It should  be able to solve the problem.</p>

                    <div className='space-y-3'>
                        <input type="text" className='bg-gray-500 p-[1%] w-full' placeholder='Your Email' />
                        <br/>
                        <input type="text" className='bg-gray-500 p-[1%] w-full' placeholder='Name' />
                        <br/>
                        <input type="text" className='bg-gray-500 p-[1%] w-full h-20px' placeholder='Name' />
                    </div>
                    <p className='bg-pink-300 p-[3%] rounded-md '>
                        Get In Touch
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard