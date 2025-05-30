import React from 'react'
import './NewsLatter.css'
export const NewsLatter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and get exclusive offers on your email</p>
        <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
