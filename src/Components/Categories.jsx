import React from 'react'

import aylana from './../assets/aylana.png'
import uzunlik from './../assets/uzunlik.png'
import yonalish from './../assets/yonalish.png'
import Barbeton from './../assets/Barbeton.png'
import Angel from './../assets/Angel.png'
import African from './../assets/African.png'
import Xarid from './../assets/Xarid.png'
import Yurak from './../assets/Yurak.png'
import Lupa from './../assets/Lupa.png'
import Beach from './../assets/Beach.png'
import Blushing from './../assets/Blushing.png'
import Aluminum from './../assets/Aluminum.png'
import Birds from './../assets/Birds.png'
import Broadlef from './../assets/Broadlef.png'
import Chinese from './../assets/Chinese.png'
import Number from './../assets/Number.png'
import SuperSale from './../assets/Super Sale.png'
import Gul from './../assets/Gul.png'


const Categories = () => {
  return (
    <div className='container static'>
        <div className='categories'>
        <div className='categories-div mb-4'>
        <h1 className='categories-h1'>
        Categories
        </h1>
        <div className='categories-plants flex justify-between'>
                <ul className='categories-ul'>
                    <li className='li-1 categories-li'>House Plants</li>
                    <li className='categories-li'>Potter Plants</li>
                    <li className='categories-li'>Seeds</li>
                    <li className='categories-li'>Small Plants</li>
                    <li className='categories-li'>Big Plants</li>
                    <li className='categories-li'>Succulents</li>
                    <li className='categories-li'>Trerrariums</li>
                    <li className='categories-li'>Gardening</li>
                    <li className='categories-li'>Accessories</li>
                </ul>
                <ol className='categories-ol'>
                    <span className='categories-span span-1'>(33)</span>
                    <span className='categories-span'>(12)</span>
                    <span className='categories-span'>(65)</span>
                    <span className='categories-span'>(39)</span>
                    <span className='categories-span'>(23)</span>
                    <span className='categories-span'>(17)</span>
                    <span className='categories-span'>(19)</span>
                    <span className='categories-span'>(13)</span>
                    <span className='categories-span'>(18)</span>
                    </ol>
        </div>
        </div>
        <div className='price'>
        <h1 className='price-h1'>
        Price Range
        </h1>
        <div className='flex mt-4 ml-2'>
        <img src={aylana} width="15px" height="15px" alt="aylana" />
        <img className='uzunlik' src={uzunlik} width="161px" height="0" alt="uzunlik" />
        <img  src={aylana} width="15px" height="15px" alt="aylana" />
        </div>
        <p className='ml-2 mt-4 price-p'>Price:<span className='price-span'>$39 - $1230</span></p>
        <button className='price-btn ml-2'>Filter</button>
        </div>





        <div className='size'>
            <h1 className='size-h1'>
            Size
            </h1>
            <div className='flex justify-between'>
            <ul className='size-ul ml-2'>
                <li className='size-li'>Small</li>
                <li className='size-li'>Medium</li>
                <li className='size-li'>Large</li>
            </ul>
            <ol className='size-ol'>
                <span className='size-span'>(119)</span>
                <span className='size-span'>(86)</span>
                <span className='size-span'>(78)</span>
            </ol>
            </div>
        </div>
        </div>




        <div className='categories-header relative'>
            <div className='flex justify-between'>
                <ul className='flex'>
                    <li className='mr-8 header-li'>All Plants</li>
                    <li className='mr-8 header-li1'>New Arrivals</li>
                    <li className='header-li2'>Sale</li>
                </ul>
                <div className='flex'>
                    <p className='tepa-p'>Short by:</p>
                    <span className='tepa-span'>Default sorting</span>
                    <img className='' src={yonalish} width="16px" height="16px" alt="Pastki yonalish" />
                </div>
            </div>
        </div>








        <div className='categories-section relative'>
        <button className='btn1'><span className='span3'>13% OFF</span></button>
        <div className='planets flex ml-10'>
            <img src={Barbeton} width="250px" height="250px" alt="Barberton" />
            <img src={Angel} width="250px" height="250px" alt="Angel" />
            <img src={African} width="250px" height="250px" alt="African" />
        </div>
        <div className='icons flex justify-center items-center'>
            <img src={Xarid} width="20px" height="20px" alt="Xarid" />
            <img src={Yurak} width="20px" height="20px" alt="Yurak" />
            <img src={Lupa} width="20px" height="20px" alt="Lupa" />
        </div>
        <div className='planets-price flex mb-4'>
        <div className='mb-4'>
            <h4 className='mr-40 planets-h4'>Barberton Daisy</h4>
            <p className='mr-40 planets-p'>$119.00</p>
        </div>
        <div>
            <h4 className='mr-40 planets1-h4'>Angel Wing Begonia</h4>
            <p className='mr-40 planets1-p'>$169.00</p>
        </div>
        <div>
            <h4 className='planets2-h4'>African Violet</h4>
            <div className='flex'><p className='planets2-p'>$199.00</p>
            <span className='ml-4 line-through plants-span'>$229.00</span></div>
        </div>
        </div>
        <div className='planets flex ml-10 mb-10'>
            <img src={Beach} width="250px" height="250px" alt="Beach" />
            <img src={Blushing} width="250px" height="250px" alt="Blushing" />
            <img src={Aluminum} width="250px" height="250px" alt="Aluminum" />
        </div>
        <div className='planets-price flex'>
        <div>
            <h4 className='mr-40 planets3-h4'>Beach Spider Lily</h4>
            <p className='mr-40 planets3-p'>$129.00</p>
        </div>
        <div>
            <h4 className='mr-40 planets4-h4'>Blushing Bromeliad</h4>
            <p className='mr-40 planets4-p'>$139.00</p>
        </div>
        <div>
            <h4 className='planets5-h4'>Aluminum Plant</h4>
            <p className='planets5-p'>$179.00</p>
        </div>
        </div>
        <div className='planets flex ml-10 mt-10'>
            <img src={Birds} width="250px" height="250px" alt="Birds" />
            <img src={Broadlef} width="250px" height="250px" alt="Broadleaf" />
            <img src={Chinese} width="250px" height="250px" alt="Chinese" />
        </div>
        <div className='planets-price flex'>
        <div>
            <h4 className='mr-40 planets6-h4'>Birds Nest Fern</h4>
            <p className='mr-40 planets-p'>$99.00</p>
        </div>
        <div>
            <h4 className='mr-40 planets7-h4'>Broadleaf Lady Palm</h4>
            <p className='mr-40 planets7-p'>$59.00</p>
        </div>
        <div>
            <h4 className='planets8-h4'>Chinese Evergreen</h4>
            <p className='planets8-p'>$39.00</p>
        </div>
        </div>
        <div className='flex justify-end'>
            <img className='number' src={Number} alt="Number" />
        </div>
        </div>


        








        <div className='categories-img relative'>
            <div className='img static'>
                <img className='super-img ml-10 mr-10' src={SuperSale} alt="Super Sale" />
                <h1 className='img-h1 text-center'>UP TO 75% OFF</h1>
            </div>
            <div>
                <img className='relative img-gul' src={Gul} width="370px" height="370px" alt="Gul" />
            </div>
        </div>
    </div>
  )
}

export default Categories