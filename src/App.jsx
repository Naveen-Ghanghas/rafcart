import { useState } from 'react'

import './App.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './components/Layout';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Account from './Pages/Account';
import Checkout from './Pages/Checkout';
import ProductDetails from './Pages/ProductDetails';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Shop from './Pages/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home/></Layout>,
    },
    {
      path: "/account",
      element: <Layout><Account/></Layout>,
    },
    {
      path: "/register",
      element: <Layout><Signup></Signup> </Layout>,
    },
    {
      path: "/login",
      element: <Layout><Login></Login> </Layout>,
    },
    {
      path: "/checkout",
      element: <Layout><Checkout></Checkout> </Layout>,
    },
    {
      path: "/product/:id",
      element: <Layout><ProductDetails></ProductDetails> </Layout>,
    },
    {
      path: "/profile",
      element: <Layout><Profile></Profile> </Layout>,
    },
    {
      path: "/cart",
      element: <Layout><Cart></Cart> </Layout>,
    },
    {
      path: "/about",
      element: <Layout><About></About> </Layout>,
    },
    {
      path: "/contact",
      element: <Layout><Contact></Contact> </Layout>,
    },
    {
      path: "/shop",
      element: <Layout><Shop></Shop> </Layout>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
