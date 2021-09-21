import React from 'react';
import ReactDOM from 'react-dom';


// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const title = React.createElement('h2', null, 'Price: 10.99$');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);

// /*
//  * Для передачи детей также используется свойство children параметра props.
//  * Обратите внимание на то, что свойство children это массив.
//  */
// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button],
// });



const Product = props => (
<div>
  <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Alt" />
  <h2>{props.name}</h2>
  <p>Price: 10.99$</p>
  <button type="button">Add to cart</button>
</div>
);


ReactDOM.render(<Product name="Tacos With Lime" />, document.getElementById('root'));