import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="product-display-left">
            <div className="product-display-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-image">
            <img className='product-display-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="product-display-right-price-old">
                    ${product.old_price}
                </div>
                <div className="product-display-right-price-new">${product.new_price}</div>
            </div>
            <div className="product-display-right-discription">
            A carefully crafted piece of apparel made from soft, breathable, and durable fabrics, designed to offer a perfect blend of comfort and style. Tailored to flatter all body shapes, this garment features fine stitching, premium-quality materials, and a modern silhouette — making it ideal for everyday wear, social gatherings, or elevated occasions. Available in an array of colors, patterns, and sizes to suit your personal style.
            </div>
            <div className="product-display-right-size">
                <h1>Select size</h1>
                <div className="product-display-right-sizes">
                    <div >S</div>
                    <div >M</div>
                    <div >L</div>
                    <div >XL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-right-category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
            <p className='product-display-right-category'><span>Tags :</span>Modern , Latest , Crop Top</p>
        </div>
    </div>
  )
}
