import React from 'react'

function Logins() {
  return (
    <div className='w-[100%] lg:w-[100%] lg:h-[100vh] h-[100vh]  flex justify-center  items-center lg:flex lg:justify-center lg:items-center'>
        <div className='blackdiv flex flex-col lg:px-5 bg-black lg:gap-4 lg:w-[65%] w-[70%] items-center justify-center lg:py-4 py-6 rounded-xl lg:flex lg:flex-row lg:items-center lg:justify-center'>
            <div className=' gap-4 pb-3 lg:flex-col lg:gap-4 rounded-xl lg:flex lg:items-center lg:justify-center flex flex-col items-center justify-center'>
                <img className='lg:w-[200px] w-[100px]' src='https://d1nl4izteao6lk.cloudfront.net/images/portronics_logo_1.png'></img>
            <label className=' lg:text-[13px] text-[13px] text-center w-[80%] lg:w-full lg:text-justify  font-semibold text-[white]'>Welcome to Portronics-India’s most loved gadget Brand!</label>
            </div>

            <div className='white  gap-3 rounded-lg px-[20px] py-[20px]  justify-center flex-col flex items-center bg-white w-[80%] lg:w-[40%] ' >
                <label className='text-[14px]  font-semibold'>Unlock Maximum Savings</label>
                <label className='text-[12px]'>Enter Mobile Number</label>
                <div className=' text-[10px] flex lg:flex lg:flex-col flex-col gap-3 w-[100%]'>
                <input className='w-[100%] h-[5vh] border border-[2px] pl-2' placeholder='Enter Mobile Number'></input>
                <input className='w-[100%] h-[5vh] border border-[2px] pl-2' placeholder='Password'></input>
                    <button className='bg-black py-2 text-[white] '>Login</button>
                </div>
                <div className='flex lg:flex gap-2'>
                    <input type='checkbox'></input>
                    <label className='text-[10px]'>Notify me for any updates & offers</label>
                </div>
                <div className='flex  items-center gap-2 w-[80%] lg:flex lg:items-center'>
                    <div className='w-[100px] h-[2px] bg-black'></div>
                    <label>OR</label>
                    <div className='w-[100px] h-[2px] bg-black'></div>
                </div>

                <div className=' cursor-pointer justify-center w-[100%] text-[12px]  border border-[2px]  border-[#26d466] flex gap-3 py-2 px-3 rounded-lg '>
                <img src='https://pdp.gokwik.co/kwikpass/assets/icons/whatsapp_icon.svg'></img>
                <label>Whatsaap Login</label>
                </div>
                <div className=' w-[100%]  lg:flex  flex lg:flex-col flex-col items-center'>
                    <label className=' lg:w-full text-[10px] text-center  '>I accept that I have read & understood Gokwik's</label>
                    <label className='text-[10px]  underline  cursor-pointer'>Privacy Policy and T&Cs.</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logins