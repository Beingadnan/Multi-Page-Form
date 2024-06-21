import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormContextProvider } from "./context/form-context";
import Info from "./pages/Info";
import Address from "./pages/Address";
import Confrmation from "./pages/Confrmation";
import ThankYou from "./pages/ThankYou";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Info /> },
      { path: "/address", element: <Address /> },
      { path: "/confrmation", element: <Confrmation /> },

      { path: "/thank-you", element: <ThankYou /> },
    ],
  },
]);

function App() {
  return (
    <FormContextProvider>
      <RouterProvider router={router} />
    </FormContextProvider>
  );
}

export default App;