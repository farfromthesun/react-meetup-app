import { RouterProvider } from "react-router-dom";
import { router } from "./components/constants/router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
