import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faLinode } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react'
const Footer = () => {
    return (
        <div>
            <div className=' bg-[#018837] px-32 py-6 min-h-screen mt-[40px] '>

                <div className='flex items-center flex-col justify-center h-[100%] gap-44 '>

                    <div className='w-1/2  flex flex-col items-center '>
                        <h1 className='text-center text-white font-bold text-6xl  mb-6 font-inter pt-40 max-lg:text-4xl'>Try ChopLine today</h1>
                        <p className='text-center text-xl font-normal text-white font-inter'>Get started for free.</p>
                        <button className="flex items-center gap-2 bg-[#FFE492] rounded-lg px-6 py-4 mt-7 text-black w-fit">
                            <span className='font-normal text-base font-inter '>Try ChopLine free</span><ArrowRight size={19} />
                        </button>

                        <p className='mt-7 text-white font-normal text-xl font-inter'>On a big team? Contact sales</p>
                        <div className='flex gap-8 mt-10 '>
                            <FontAwesomeIcon icon={faApple} className="text-white size-20" />
                            <FontAwesomeIcon icon={faWindows} className="text-white size-20"  />
                            <FontAwesomeIcon icon={faLinode} className="text-white size-20"  />
                        </div>
                    </div>
                    <div className=''>
                        <div className=' flex gap-20 mb-[120px] max-lg:gap-10 max-[940px]:gap-10 
                         max-[940px]:flex-wrap'>
                            <div className='w-[250px]'>
                                <h6 className='font-medium text-white text-3xl mb-4 font-inter'>ChopLine</h6>
                                <p className='text-white mb-1 font-normal text-lg font-inter'>ChopLine is an intuitive queue management and scheduling platform designed to streamline operations for barbershops, salons, and service-based businesses. </p>
                            </div>
                            <div>
                                <ul>
                                    <li className='font-bold text-lg text-white mb-3 font-inter'>Product</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Overview</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Pricing</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Customer stories</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='font-bold text-lg text-white mb-3 font-inter'>Resources</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Blog</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Guides & tutorials</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Help center</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='font-bold text-lg text-white mb-3 font-inter'>Company</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>About us</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Careers</li>
                                    <li className='mb-1 text-white font-normal text-base font-inter'>Media kit</li>
                                </ul>
                            </div>
                            <div className='w-[200px]'>
                                <h6 className='font-bold  text-white text-3xl mb-4 font-inter'>Try It Today</h6>
                                <p className='text-white font-normal text-base font-inter'>Get started for free. Add your whole team as your needs grows.</p>
                                <button className="flex items-center gap-2 bg-black rounded-md px-6 py-4 mt-4 text-white">
                                    <span className='font-normal text-base font-inter w-[100px]'>Start Today</span>  <ArrowRight size={19} />
                                </button>
                            </div>
                        </div>
                        <hr className='border-white w-full h-[1px] mb-10' />
                        <div className='flex justify-between '>
                            <div className='flex justify-between w-[60%] max-lg:w-[80%] max-[940px]:flex-col'>

                                <div className='flex items-center '>
                                    <p className='text-white font-normal text-base'>English</p><span><ChevronDown size={25} className='text-white' /></span>
                                </div>
                                <p className='text-white font-normal text-base font-inter' >Terms & privacy</p>
                                <p className='text-white font-normal text-base font-inter' >Security</p>
                                <p className='text-white font-normal text-base font-inter' >Status</p>
                                <p className='text-white font-normal text-base font-inter' >Security</p>
                                <p className='text-white font-normal text-base font-inter' >&copy;2024 Whitepace LLC. </p>
                            </div>
                            <div className='flex gap-4'>
                                <Facebook />
                                <Linkedin />
                                <Twitter />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer