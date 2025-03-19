import { AppRoutes } from "./routes/app-routes";
import { PicturesProvider } from "./core/context/pictures-provider";

export const App = () => {
  return (
    <PicturesProvider>
      <AppRoutes />
    </PicturesProvider>
  );
};
