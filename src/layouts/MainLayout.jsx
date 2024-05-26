import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import MainContainer from "../components/layout/MainContainer";
import { FavouritesContextProvider } from "../store/favourites-context";
import { ToastContextProvider } from "../store/toast-context";

function MainLayout() {
  return (
    <>
      <FavouritesContextProvider>
        <MainNavigation />
        <ToastContextProvider>
          <MainContainer>
            <Outlet />
          </MainContainer>
        </ToastContextProvider>
      </FavouritesContextProvider>
    </>
  );
}
export default MainLayout;
