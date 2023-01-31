import React from 'react'
import Jsondata from './Jsondata.json'
import {useDispatch} from 'react-redux'
import { incrementcart,decrementcart } from '../redux/CartReducer'

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {
            Jsondata.products.map(product =>
              <div className='col' key={product.id}>
                <div className='card m-1' style={{ "width": "18rem", "height": "30rem" }}>
                  <img className='card-img-top' src={product.src} style={{"width": "18rem", "height": "25rem"}}/>
                  <p className='card-title'>{product.name} | ${product.price}</p>
                  <div className='card-body'>
                    <button className='btn btn-primary ml-auto'
                    onClick={()=>dispatch(incrementcart({
                      productName:product.name,
                      productPrice:product.price
                    }))}>Add</button> &nbsp;
                    <button className='btn btn-primary ml-auto'
                    onClick={()=>dispatch(decrementcart({
                      productName:product.name,
                      productPrice:product.price
                    }))}>Remove </button>
                  </div>
                </div>
              </div>

            )
          }
        </div>
      </div>

    </div>
  )
}

export default Products