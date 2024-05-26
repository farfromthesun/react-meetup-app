import { Link } from "react-router-dom";
import classes from "./pageSection.module.css";
import { useMountedAnimation } from "../hooks/useMountedAnimation";

function NotFound() {
  const isMounted = useMountedAnimation();

  return (
    <section
      className={`${classes.pageSection} ${!isMounted && classes.pageSectionHidden}`}
    >
      <h1 className="">404 Not Found</h1>
      <p className="">This page does not exist</p>
      <Link to="/" className="">
        Go to Homepage
      </Link>
    </section>
  );
}

export default NotFound;
