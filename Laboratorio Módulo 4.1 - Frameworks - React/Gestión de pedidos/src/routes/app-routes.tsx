import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrdersListPage } from "../scenes/orders-list";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OrdersListPage />} />
        </Routes>
      </Router>
    </>
  );
};
