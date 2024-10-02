import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes, BrowserRouter } from "react-router-dom";

// layouts
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import LoadingScreen from "../components/LoadingScreen";
import GeneralApp from "../pages/dashboard/GeneralApp";
import Chats from "../pages/dashboard/Chats";
// loading screen component

// lazy loaded components
const Page404 = lazy(() => import('../pages/Page404'));

// Loadable higher-order component
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Wrapped lazy loaded components with Loadable

const LoadablePage404 = Loadable(Page404);

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        
        {path:"",element:<GeneralApp/>},
        // {path:"chats",element:<Chats/>},
        { path: "404", element: <LoadablePage404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    
  ]);
};

export default AppRoutes;
