import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import { productsData } from "./api/api";


import { Footer } from "./componients/footer/Footer";
import { Header } from "./componients/header/Header";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";

const Layout =()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/signin" element={<Signin/>}/>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;