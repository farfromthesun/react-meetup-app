import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";

function useFavourites() {
  const context = useContext(FavouritesContext);

  return context;
}
export default useFavourites;
