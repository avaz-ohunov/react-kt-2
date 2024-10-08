import React, { useState } from 'react';
import ProductItem from './components/ProductItem';


export default function App() {
  const [data, setData] = useState([
    {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
    {id: 2, name: 'Самокат', price: 700, count: 1}, 
    {id: 3, name: 'Ролики', price: 1300, count: 2}, 
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}    
  ]);

  function handleDelete(id) {
    setData(data.filter(product => product.id !== id));
  }

  function handleAddProduct() {
    const promptProduct = prompt(
      'Добавить новый товар', 'Велосипед 1000'
    );

    if(!promptProduct) return;

    const name = promptProduct.split(' ')[0];
    const price = +promptProduct.split(' ')[1];
  
    if (name && price > 0) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        count: 1,
      };
      
      setData([...data, newProduct]);
    }
    else {
      alert(
        'Введите через пробел название продукта и его цену \nПример: Велосипед 1000'
      );
    }
  }

  return (
    <div className="container bg-dark text-white p-4 rounded">
      <h1>Avaz Market</h1>
      <button className='btn btn-primary' onClick={ handleAddProduct }>
        Добавить новый товар
      </button>
      <div className='row mt-4'>
        {
          data.length === 0 ? (
            <p>Товаров нет :(</p>
          ) : (
            data.map((product) => (
              <div className="col-md-4 mb-2" key={ product.id }>
                <ProductItem product={ product } handleDelete={ handleDelete } />
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}
