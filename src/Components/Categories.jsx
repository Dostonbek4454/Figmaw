import React from 'react'

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
        <img src="./src/assets/aylana.png" width="15px" height="15px" alt="aylana" />
        <img className='uzunlik' src="./src/assets/uzunlik.png" width="161px" height="0" alt="uzunlik" />
        <img src="./src/assets/aylana.png" width="15px" height="15px" alt="aylana" />
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
                    <img className='' src="./src/assets/yonalish past.png" width="16px" height="16px" alt="Pastki yonalish" />
                </div>
            </div>
        </div>
        <div className='categories-section relative'></div>


        
        <div className='categories-img relative'>
            <div className='img static'>
                <img className='super-img ml-10 mr-10' src="./src/assets/Super Sale.png" alt="Super Sale" />
                <h1 className='img-h1 text-center'>UP TO 75% OFF</h1>
            </div>
            <div>
                <img className='relative img-gul' src="./src/assets/Gul.png" width="370px" height="370px" alt="Gul" />
            </div>
        </div>
    </div>
  )
}

export default Categories