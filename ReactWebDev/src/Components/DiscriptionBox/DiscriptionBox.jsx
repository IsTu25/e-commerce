import React from 'react'
import './DiscriptionBox.css'
export const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-navbox">Discription</div>
            <div className="discriptionbox-navbox fade">Reviews(122)</div>
        </div>
        <div className="discriptionbox-discription">
        <p>
            An e-commerce website is an online platform that facilitates 
            buying and selling of products or services over the internet. It 
            serves as a virtual marketplace where businesses and individuals 
            showcase their products, interact with customers, and conduct 
            transactions without the need for a physical presence. E-commerce 
            websites have gained immense popularity due to their convenience, 
            accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerce websites typically display products or services along with 
            detailed descriptions, images, prices, and any available variations 
            (e.g., sizes, colors). Each product usually has its own dedicated page 
            with relevant information.
        </p>
        </div>
    </div>
  )
}
