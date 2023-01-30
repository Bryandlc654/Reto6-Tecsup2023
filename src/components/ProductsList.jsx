import React, { useEffect } from 'react'

import { fetchAllProducts } from '../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {

  const { list: products } = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch])

  return (
    <div className='constainer mt-4'>
      <div className="row">
        {
          products.map((product, index) => (
            <div key={index} className='col-md-3 mb-4'>
              <div className="card">
                <img src={product.attributes.url_image} alt="avatar" />
                <div className="card-body">
                  <h5>{`${product.id} ${product.attributes.name}`}</h5>
                  <p className='card-text'>{product.attributes.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList;