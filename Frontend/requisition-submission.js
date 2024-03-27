import React, { useState } from 'react';
import axios from 'axios';

const RequisitionForm = () => {
  const [itemDescription, setItemDescription] = useState('');
  const [budgetAllocation, setBudgetAllocation] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/requisitions',
        { itemDescription, budgetAllocation, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Requisition submitted successfully, handle accordingly
    } catch (err) {
      console.error(err);
      // Handle requisition submission error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget Allocation"
        value={budgetAllocation}
        onChange={(e) => setBudgetAllocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Submit Requisition</button>
    </form>
  );
};

export default RequisitionForm;