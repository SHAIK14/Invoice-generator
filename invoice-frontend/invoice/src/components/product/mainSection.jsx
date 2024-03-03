// src/components/MainSection.js
import { useEffect, useState } from "react";
import axios from "axios";

const MainSection = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    qty: 1,
    rate: 0,
    total: "",
  });

  const handleAddProduct = (e) => {
    e.preventDefault();

    const total = newProduct.qty * newProduct.rate;

    setProducts([...products, { ...newProduct, total }]);

    setNewProduct({ name: "", qty: 1, rate: 0, total: "" });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleQtyChange = (e) => {
    const qty = parseInt(e.target.value, 10);
    const total = qty * newProduct.rate;
    setNewProduct({ ...newProduct, qty, total });
  };

  const handleRateChange = (e) => {
    const rate = parseFloat(e.target.value);
    const total = newProduct.qty * rate;
    setNewProduct({ ...newProduct, rate, total });
  };

  const totalProductsCost = products.reduce(
    (total, product) => total + product.total,
    0
  );
  const gst = (totalProductsCost * 18) / 100;
  const grandTotal = totalProductsCost + gst;

  const [validUntil, setValidUntil] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const validityDate = new Date(currentDate);
    validityDate.setDate(currentDate.getDate() + 15);

    const validUntilDate = validityDate.toISOString();
    setValidUntil(validUntilDate);
  }, [totalProductsCost, gst, grandTotal]);
  const handlePrint = async () => {
    try {
      await axios.post("http://localhost:5000/api/invoices", {
        products,
        totalProductsCost,
        gst,
        grandTotal,
        validUntil,
      });

      console.log("Data sent to the backend successfully!");
    } catch (error) {
      console.error("Error sending data to the backend:", error);
    }
  };
  return (
    <main className="container mx-auto p-4 max-w-2xl shadow-md rounded-md">
      <button
        onClick={handlePrint}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green mb-4 "
      >
        Print
      </button>
      <h1 className="text-2xl font-bold mb-4 text-center">Invoice Generator</h1>

      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Product</th>
            <th className="border-b p-2 text-left">Qty</th>
            <th className="border-b p-2 text-left">Rate</th>
            <th className="border-b p-2 text-left">Total (INR)</th>
            <th className="border-b p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.qty}</td>
              <td className="p-2">{product.rate}</td>
              <td className="p-2">{`INR ${product.total.toFixed(2)}`}</td>
              <td className="p-2">
                <button
                  onClick={() => handleDeleteProduct(index)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAddProduct} className="mb-4">
        <div className="flex mb-4">
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            placeholder="Product Name"
            className="p-2 flex-1 mr-2"
          />
          <input
            type="number"
            value={newProduct.qty}
            onChange={handleQtyChange}
            placeholder="Qty"
            className="p-2 w-1/4 mr-2"
          />
          <input
            type="number"
            value={newProduct.rate}
            onChange={handleRateChange}
            placeholder="Rate"
            className="p-2 w-1/4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Add New Item
        </button>
      </form>
      <div className="flex justify-end">
        <div>
          <div className="flex justify-between mb-3">
            <span>Total Cost:</span>
            <span>{`INR ${totalProductsCost.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span style={{ marginRight: "8px" }}>GST (18%):</span>
            <span>{`INR ${gst.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="font-bold">Grand Total:</span>
            <span className="font-bold">{`INR ${grandTotal.toFixed(2)}`}</span>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="mt-4 text-center">
        <span className="text-gray-700">Valid till:</span>{" "}
        <span className="font-bold">{validUntil}</span>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-lg font-bold mb-2">Terms and Conditions</h2>
        <p>
          This is a sample invoice generator. All products and rates are for
          demonstration purposes only.
        </p>
      </div>
    </main>
  );
};

export default MainSection;
