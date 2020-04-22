import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'

const ProductsPage = ({ match }) => {

  return (
    <>
      <Product id={match.params.id} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit quia in? Laborum placeat, fugit odio iure provident deleniti quia autem omnis ea voluptates dicta. Non nesciunt nemo culpa cum!</p>
      <Link to="/products">Go back to the list of products</Link>
    </>
  );
}

export default ProductsPage;