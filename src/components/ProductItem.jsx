import React, { useState } from 'react';


export default function ProductItem(props) {
  const { product, handleDelete } = props;
  const [count, setCount] = useState(product.count);

  function handleIncrement() {
    if(count < 25) setCount(count + 1);
    else alert('Склад переполнен этим товаром');
  }

  function handleDecrement() {
    if (count > 1) setCount(count - 1);
    else handleDelete(product.id);
  };

  return (
    <div className='card mb-3 bg-secondary text-white'>
      <div className='card-body'>
        <h3 className='card-title'
            onDoubleClick={() => handleDelete(product.id)}>
          
          { product.name }
        </h3>
        <p className='card-text'>Цена: ₽{ product.price }</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-danger me-2'
                  onClick={ handleDecrement }>
            -
          </button>
          <span className='me-2'>{ count }</span>
          <button className='btn btn-success'
                  onClick={ handleIncrement }>
            +
          </button>
        </div>
      </div>
    </div>
  )
}
