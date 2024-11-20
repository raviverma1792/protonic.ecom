import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Header() {
  const Navigate =useNavigate()
  const [hoverbar, sethoverbar] = useState(false)
  const [audio, setaudio] = useState(false)
  const [icon,seticon] = useState(false)
  const [login,Setlogin] = useState(false)
  const [search,setSerch]=useState(false)

  return (
    <div className='h-[10vh] '>
      <div className='h-[10vh] z-20 bg-black flex  items-center   w-full fixed   justify-center' >
        <div className='h-[10vh] bg-black flex   items-center  w-[80%] justify-between'>
          <img onClick={()=> Navigate("/")}   className=' cursor-pointer lg:h-[7vh] h-[5vh]' src='  https://www.portronics.com/cdn/shop/files/logo_f6f5e2d7-11ef-46f4-b9b8-4d4c99fe098f.png'></img>
          <div className='text-white lg:flex hidden text-[14px] gap-5'>
            <div className=' cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-2 ' onClick={() => sethoverbar(true)}><div>Category</div> <i class=" fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <label className=' cursor-pointer'>New Arrivals</label>
            <label className=' cursor-pointer'>Daily Deals</label>
            <label className=' cursor-pointer'>Corporate Gifting</label>
            <label className=' cursor-pointer'>Sipport</label>

          </div>
          <div className='icone flex  gap-3 '>
            <i onClick={()=> setSerch(true)} class=" cursor-pointer text-[gray] text-[22px] fa fa-search" aria-hidden="true"></i>
            <i class=" cursor-pointer text-[gray] text-[22px] lg:block hidden fa fa-shopping-cart" aria-hidden="true"></i>
            <i onClick={()=> Setlogin(true)} class=" cursor-pointer text-[gray] text-[22px] lg:block hidden fa fa-user" aria-hidden="true"></i>
            <i onClick={() => sethoverbar(true)} class="fa fa-bars text-[gray] text-[22px] lg:hidden block" aria-hidden="true"></i>

          </div>
        </div>

        {hoverbar == true ?

          <div className='upsidebar lg:flex lg:flex-row  z-10  lg:w-[80%] w-[80%] justify-start right-0 lg:right-[10%] top-16 h-[100vh] lg:h-[60vh] absolute bg-white flex flex-col '>

            <button onClick={() => sethoverbar(false)} className='close h-[50px] w-[50px] flex absolute top-2 right-[-3%] text-[20px]'>X</button>
            <div className=' w-full flex flex-col justify-start   items-center   lg:justify-start  lg:flex lg:items-center pt-3  pl-3 text-[10px]  lg:flex-col gap-3'>

              <label className='hidden lg:flex cursor-pointer  font-bold'>Audio</label>


              <div className=' lg:hidden  pt-6 justify-around   cursor-pointer text-[16px] w-full flex items-center'>
                <div className='flex  items-center gap-3 w-full '>
                <img className='  w-[60px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/16_ec0950e7-aba0-4075-86b5-b3fec26ec99f.png?v=1709792605'></img>
                <label>Audio</label>
                </div>
                <i onClick={()=> setaudio(true)} class="fa fa-angle-down" aria-hidden="true"></i>
                

              </div>

             { audio == true?
              <div className='    lg:hidden bg-black flex w-full h-[5vh]'>
                <i onClick={()=> setaudio(false)} class=" text-[30px] absolute top-14  right-7 fa fa-angle-up" aria-hidden="true"></i>
            
              </div>
             :null}
             {audio == true ?
             <i onClick={()=> seticon(true)} class="fa fa-angle-down" aria-hidden="true"></i>
                 : <i onClick={()=> seticon(false)} class=" absolute top-14  right-7 fa fa-angle-up" aria-hidden="true"></i>}
               
              
                
                 



               <div className='lg:flex hidden lg:flex-col gap-3' >
                <div onClick={()=> Navigate('/Proitem')} className=' cursor-pointer lg:flex flex items-center gap-3'>
                  <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/16_ec0950e7-aba0-4075-86b5-b3fec26ec99f.png?v=1709792605'></img>
                  <label >Soundbars</label>
                </div>

                <div className=' cursor-pointer lg:flex flex items-center gap-3'>
                  <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/18.png?v=1709792707'></img>
                  <label>Party Speaker</label>
                </div>

                <div className=' cursor-pointer lg:flex flex items-center gap-3'>
                  <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/20.png?v=1709792794'></img>
                  <label>Portable Speakers</label>
                </div>

                <div className=' cursor-pointer lg:flex flex items-center gap-3'>
                  <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/17.png?v=1709792636'></img>
                  <label>TWS</label>
                </div>















                
              </div>
            </div>


            <div className=' w-full flex flex-col  items-center   lg:justify-start  lg:flex lg:items-center pt-3  pl-3 text-[10px]  lg:flex-col gap-3'>

<label className='hidden lg:flex cursor-pointer  font-bold'>Mobile Accessories</label>


<div className=' lg:hidden  pt-6 justify-around 0  cursor-pointer text-[16px] w-full flex items-center'>
  <div className='flex  items-center gap-3 w-full '>
  <img className='  w-[60px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/3_8a66a4fc-6931-432d-b489-f13b6ff35526.png?v=1709792049'></img>
  <label>Mobile Accessories</label>
  </div>
  <i onClick={()=> setaudio(true)} class="fa fa-angle-down" aria-hidden="true"></i>
  

</div>

{ audio == true?
<div className='    lg:hidden bg-black flex w-full h-[5vh]'>
  <i onClick={()=> setaudio(false)} class=" text-[30px] absolute top-14  right-7 fa fa-angle-up" aria-hidden="true"></i>

</div>
:null}
{audio == true ?
<i onClick={()=> seticon(true)} class="fa fa-angle-down" aria-hidden="true"></i>
   : <i onClick={()=> seticon(false)} class=" absolute top-14  right-7 fa fa-angle-up" aria-hidden="true"></i>}
 

  
   



 <div className='lg:flex hidden lg:flex-col gap-3' >
  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/3_8a66a4fc-6931-432d-b489-f13b6ff35526.png?v=1709792049'></img>
    <label>Power Bank</label>
  </div>

  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/23.png?v=1717224393'></img>
    <label>Cables</label>
  </div>

  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/24.png?v=1717224435'></img>
    <label>Wireless Chargers</label>
  </div>

  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/2_67adc5a2-4564-45f5-a525-b0794a377052.png?v=1709791944'></img>
    <label>Chargers</label>
  </div>















  
</div>
            </div>

            <div className=' w-full flex flex-col  items-center   lg:justify-start  lg:flex lg:items-center pt-3  pl-3 text-[10px]  lg:flex-col gap-3'>

<label className='hidden lg:flex cursor-pointer  font-bold'>Computer Accessories</label>


<div className=' lg:hidden  pt-6 justify-around 0  cursor-pointer text-[16px] w-full flex items-center'>
  <div className='flex  items-center gap-3 w-full '>
  <img className='  w-[60px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/14_5ecdc838-6b27-471f-98a6-42ed0be46e02.png?v=1709792542'></img>
  <label>Computer Accessories</label>
  </div>
  <i onClick={()=> setaudio(true)} class="fa fa-angle-down" aria-hidden="true"></i>
  

</div>

{ audio == true?
<div className='    lg:hidden bg-black flex w-full h-[5vh]'>
  <i onClick={()=> setaudio(false)} class=" text-[30px] absolute top-14  right-7 fa fa-angle-up" aria-hidden="true"></i>

</div>
:null}
{audio == true ?
<i onClick={()=> seticon(true)} class="fa fa-angle-down" aria-hidden="true"></i>
   : <i onClick={()=> seticon(false)} class=" absolute top-14  right-7 fa fa-angle-up" aria-hidden="true"></i>}
 

  
   



 <div className='lg:flex hidden lg:flex-col gap-3' >
  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/14_5ecdc838-6b27-471f-98a6-42ed0be46e02.png?v=1709792542'></img>
    <label>Keyboard & Mouse Combo</label>
  </div>

  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/1_0cd3f12e-fe4a-43cf-8ee2-6552329a6877.png?v=1717224531'></img>
    <label>Wireless Keyboard</label>
  </div>

  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/10_9b03972e-b50f-4e19-b05d-1b0d4d683974.png?v=1717224561'></img>
    <label>Wired Keyboard</label>
  </div>

  <div className=' cursor-pointer lg:flex flex items-center gap-3'>
    <img className='lg:w-[40px] w-[50px] border rounded-full' src='https://www.portronics.com/cdn/shop/files/12_02959ce5-bede-470d-bf0a-657ec7d26060.png?v=1717224592'></img>
    <label>Gaming Keyboard</label>
  </div>















  
</div>
            </div>

            
          </div> : null}
          
          


      </div>
  {login == true ?
      <div className=' z-20  fixed w-[100%] lg:w-[100%] lg:h-[100vh] h-[100vh]  flex justify-center  items-center lg:flex lg:justify-center lg:items-center'>
        <div className='blackdiv flex flex-col lg:px-5 relative bg-black lg:gap-4 lg:w-[65%] w-[70%] items-center justify-center lg:py-4 py-6 rounded-xl lg:flex lg:flex-row lg:items-center lg:justify-center'>
           <button  onClick={()=> Setlogin(false)} className='text-[white] absolute  top-1 right-2'>x</button>
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
    </div> :null}
   
    {search==true ?
    <div className='lg:w-[50%] lg:top-3 rounded-2xl lg:h-[6vh] top-[7%] left-[25%] lg:left-[310px] bg-white lg:flex fixed z-50 '>
         <div onClick={()=> setSerch(false)} className=' cursor-pointer fixed lg:right-[18%] lg:top-1 right-[25%] top-[5%] text-[white]'>x</div>
         <input className='w-full rounded-2xl pl-3 ' placeholder='search'></input>     
    </div>:null}
   
    </div>


  )
}

export default Header