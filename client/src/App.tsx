// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
