import { OrdersProvider } from "./core/context/orders-provider";
import { AppRoutes } from "./routes/app-routes";

export const App = () => {
  return (
    <OrdersProvider>
      <AppRoutes />
    </OrdersProvider>
  );
};
