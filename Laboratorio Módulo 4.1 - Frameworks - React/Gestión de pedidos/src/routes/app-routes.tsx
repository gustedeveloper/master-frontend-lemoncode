import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrdersListPage } from "../scenes/orders-list";
import { OrderDetailPage } from "@/scenes/order-detail";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OrdersListPage />} />
          <Route path="/order-detail/:id" element={<OrderDetailPage />} />
        </Routes>
      </Router>
    </>
  );
};
