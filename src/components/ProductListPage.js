import React from 'react';
import { Link } from 'react-router-dom'

const products = ['HONEY', 'CANDLES', 'COSMETICS', 'BEE POLLEN']

const ProductListPage = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ))
  return (
    <>
      <h2>Shop our products!</h2>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </>
  );
}

export default ProductListPage;