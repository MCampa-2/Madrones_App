import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Trail1 from "./pages/Trail1";
import Trail2 from "./pages/Trail2";
import Trail3 from "./pages/Trail3";
import ExpoTrail from "./pages/ExpoTrail";
import Results from "./pages/Results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/trail1",
        element: <Trail1 />
    },
    {
        path: "/trail2",
        element: <Trail2 />
    },
    {
        path: "/trail3",
        element: <Trail3 />
    },
    {
        path: "/expoTrail",
        element: <ExpoTrail />
    },
    {
        path: "/results",
        element: <Results />
    }
]);



function  App() {
    return(
        <RouterProvider router={router}></RouterProvider>
    )
};

export default App;
