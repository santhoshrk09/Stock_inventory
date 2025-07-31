import React, { useState } from 'react';
import products from '../data/product.json';

export default function Middlesection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBox, setShowBox] = useState(false);

  function showData(product) {
    // If you click the same product again, it toggles (hide)
    if (selectedProduct && selectedProduct.product_id === product.product_id) {
      setShowBox(!showBox);
    } else {
      setSelectedProduct(product);
      setShowBox(true);
    }
  }

  return (
     <div className="overflow-x-auto rounded-xl shadow-xl border border-gray-200 bg-white ">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-blue-50 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-6 py-4 text-left tracking-wider">Product Name</th>
              <th className="px-6 py-4 text-left tracking-wider">Category</th>
              <th className="px-6 py-4 text-left tracking-wider">View</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => showData(product)}
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
   
   
   
      {/* Detail Box */}
      {showBox && selectedProduct && (
        <div
          className="absolute top-10 right-10 bg-white shadow-lg border p-4 rounded-lg w-96 cursor-pointer"
          onClick={() => setShowBox(false)}
        >
          <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
          <p className="text-gray-700 mb-1">
            <strong>Description:</strong> {selectedProduct.description}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Category:</strong> {selectedProduct.category}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Price:</strong> ₹{selectedProduct.price}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Stock ID:</strong> {selectedProduct.stock_id}
          </p>
          <p className="text-gray-700">
            <strong>Created At:</strong>{' '}
            {new Date(selectedProduct.created_at).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
