import React from 'react'
import Blushing from './../assets/Blushing.png'
import Barg from './../assets/Barg.png'
import yonalish from './../assets/yonalish.png'
const Summer = () => {
  return (
    <div className='container flex bg-div relative'>
        <div className='relative plants4 flex ml-4'>
        <img className='relative plants4-img' src={Blushing} alt="Gul" />
        <img className='relative plants4-img1' src={Barg} alt="Barg" />
        <div className="">
        <h1 className='summer-h1'>SUMMER CACTUS & SUCCULENTS</h1>
        <p className='summer-p'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        <button className='summer-btn flex'>Find More <img src="./src/assets/yonalish.png" width="20px" height="20px" alt="yonalish" /></button>
        </div>
    </div>
        <div className='relative plants4 flex ml-10'>
        <img className='relative plants4-img' src={Blushing} alt="Gul" />
        <img className='relative plants4-img1' src={Barg} alt="Barg" />
        <div className="">
        <h1>SUMMER CACTUS & SUCCULENTS</h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        <button className='summer-btn flex'>Find More <img src={yonalish} width="20px" height="20px" alt="yonalish" /></button>
        </div>
    </div>
    </div>
  )
}   

export default Summer