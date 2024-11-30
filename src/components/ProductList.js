import { data } from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const ProductList = ({setSelectedProduct}) => {
    const handleProductSelect = (productId) => {
        setSelectedProduct(productId);
		console.log('ID del producto seleccionado:', handleProductSelect);
		
    };
	return (
		<div class="container">
			<br/>
			<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.image} alt={product.title} />
					</figure>
					<div className='info-product'>
						<h2>{product.title}</h2>
                        <p className='price'>${product.price}</p>
						<p className='instructor'>Instructor: {product.instructor}</p>
						<p className='level'>Nivel: {product.level}</p>
						<p className='description'>{product.description}</p>
                        <p className='duration'>Duracion: {product.duration}</p>
                        
						<Link to={`/product/${product.id}`}>
						<button onClick={() => handleProductSelect(product.id)}>Ver detalles</button>
						</Link>
					</div>
				</div>
			))}
		</div>
		</div>
	);
};
