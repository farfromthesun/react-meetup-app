import classes from "./MainContainer.module.css";

function MainContainer({ children }) {
  return <main className={classes.main}>{children}</main>;
}
export default MainContainer;
