import React, { useContext } from 'react';
import './CSS/ShopCatagory.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );

  return (
    <div className='shopcatagory'>
      <img className='shopcatagory-banner' src={props.banner} alt="Category Banner" />

      <div className="shopcatagory-index-sort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcatagory-sort">
          Sort by <img src={drop_down_icon} alt="Sort" />
        </div>
      </div>

      <div className="shopcatagory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
