import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
import MainSection from "./components/product/mainSection";
import InvoiceDetails from "./components/product/invoiceDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ProductPage" element={<MainSection />} />
          <Route path="/InvoiceDetails" element={<InvoiceDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
