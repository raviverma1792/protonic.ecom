import React from 'react'


function Carousal() {

  return (
    <div className='crow  lg:w-[100%]  overflow-hidden    relative '>

      <div className='carousal w-[500%]  flex items-start  bg-slate-400'>

        <img className='lg:h-[60vh] w-[20%] h-[30vh]  ' src='https://www.portronics.com/cdn/shop/files/Glide_Banner_Web.png?v=1725427891'></img>
        <img className='lg:h-[60vh] w-[20%] h-[30vh]  ' src='https://www.portronics.com/cdn/shop/files/Harmony_Mini_Banner_Web.png?v=1724735443'></img>


        <img className='lg:h-[60vh] w-[20%] h-[30vh]  ' src='https://www.portronics.com/cdn/shop/files/Muff_M3_Banner_Web_b7df3c6c-df30-4159-9dae-39ca8af9a72d.png?v=1723752795'></img>


        <img className='lg:h-[60vh] w-[20%] h-[30vh]  ' src='https://www.portronics.com/cdn/shop/files/Harmony_Banner_Web.png?v=1718344894'></img>


        <img className='lg:h-[60vh] h-[30vh] w-[20%] ' src='https://www.portronics.com/cdn/shop/files/WhatsApp_Image_2024-05-10_at_11.22.02_AM.jpg?v=1715320395'></img>


      </div>

      {/* <div className=' flex absolute w-[100%] gap-4 bottom-[-5%] left-[45%] h-[8vh]'>

        <i class=" text-[25px] text-[#fcc297] cursor-pointer fa fa-minus" aria-hidden="true"></i>
        <i class=" text-[25px] text-[#fcc297] cursor-pointer fa fa-minus" aria-hidden="true"></i>
        <i class=" text-[25px] text-[#fcc297] cursor-pointer fa fa-minus" aria-hidden="true"></i>
        <i class=" text-[25px] text-[#fcc297] cursor-pointer fa fa-minus" aria-hidden="true"></i>
        <i class=" text-[25px] text-[#fcc297] cursor-pointer fa fa-minus" aria-hidden="true"></i>


      </div> */}


    </div>


  )
}

export default Carousal