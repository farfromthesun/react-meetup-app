import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const { totalFavourites } = useContext(FavouritesContext);
  const navlinksArray = [
    {
      slug: "/",
      text: "All Meetups",
    },
    {
      slug: "/new-meetup",
      text: "Add New Meetup",
    },
    {
      slug: "/favourites",
      text: "My Favourites",
    },
  ];

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {navlinksArray.map((link) => (
            <li key={link.slug}>
              <NavLink
                to={link.slug}
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                {link.text}
              </NavLink>
              {link.slug.includes("/favourites") && (
                <span className={classes.badge}>{totalFavourites}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
