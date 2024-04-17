import React, { useState } from 'react';

const ProductTable = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToBasket = (id) => {
    // Add logic to add the product to the basket
    console.log(`Added product with id ${id} to basket`);
  };

  const handleQuantityChange = (itemIndex, change) => {
    const newData = [...data];
    const newQuantity = newData[selectedItem].fullInfo[itemIndex].quantity + change;
    if (newQuantity >= 0) {
      newData[selectedItem].fullInfo[itemIndex].quantity = newQuantity;
      setData(newData);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Short Info</th>
          <th>Full Info</th>
          <th>Add to Basket</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, itemIndex) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.shortInfo}</td>
            <td>
              <ul>
                {item.fullInfo.map((info, index) => (
                  <li key={index}>
                    {info.itemName}: {info.itemPrice}
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    {info.quantity}
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <button onClick={() => handleAddToBasket(item.id)}>Add to Basket</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
