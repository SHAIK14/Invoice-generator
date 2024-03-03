// InvoiceDetails.js
import { useSelector } from "react-redux";

const InvoiceDetails = () => {
  console.log("Rendering InvoiceDetails");
  const invoiceData = useSelector((state) => state.invoice.invoiceData);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="container mx-auto p-8 max-w-2xl border shadow-lg rounded-md bg-white flex flex-col items-end">
        <div className="mb-8 w-full flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Invoice Details</h1>
            <p className="text-gray-600">
              Date: {new Date().toLocaleDateString()}
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate PDF
          </button>
        </div>

        {invoiceData && (
          <table className="w-full mb-8">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Rate</th>
                <th className="p-3 text-left">Total (INR)</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.qty}</td>
                  <td className="p-3">{product.rate}</td>
                  <td className="p-3">{`INR ${product.total.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {invoiceData && (
          <div className="w-full">
            <div className="border p-4 rounded bg-gray-100 mb-8">
              <p className="text-xl font-semibold mb-2">Summary</p>
              <p className="flex items-center">
                <span className="w-32 font-bold">Total Cost:</span>
                {`INR ${invoiceData.totalProductsCost.toFixed(2)}`}
              </p>
              <p className="flex items-center">
                <span className="w-32 font-bold">GST:</span>
                {`INR ${invoiceData.gst.toFixed(2)}`}
              </p>
              <p className="flex items-center">
                <span className="w-32 font-bold">Grand Total:</span>
                {`INR ${invoiceData.grandTotal.toFixed(2)}`}
              </p>
              <p className="flex items-center">
                <span className="w-32 font-bold">Valid Until:</span>
                {formatDate(invoiceData.validUntil)}
              </p>
            </div>

            <div className="text-sm text-gray-600 bg-gray-100 p-4 rounded mt-4">
              <p className="mb-2">
                <strong>Terms and Conditions:</strong> We are happy to supply
                any further information you may need and trust that you call on
                us to fill your order which will receive our prompt and careful
                attention.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceDetails;
