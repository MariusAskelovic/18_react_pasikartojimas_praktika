import { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

export default function ProductsList() {
  const url = 'https://dummyjson.com/products';
  const [prodArr, setProdArr] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(({ products }) => {
        console.log('xx :: ', products);
        setProdArr(products);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);
  return (
    <div>
      <ul className='unlisted'>
        {prodArr.map((obj) => (
          <SingleProduct key={obj.id} {...obj} />
        ))}
      </ul>
    </div>
  );
}

/*
brand: "Apple"
category: "smartphones"
description: "An apple mobile which is nothing like apple"
discountPercentage: 12.96
id: 1
images: Array(5) [ "https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", … ]
price: 549
rating: 4.69
stock: 94
thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
title: "iPhone 9"
*/
