import React from "react";
import Banner from "../components/Home/Banner";
import Feature from "../components/Home/Feature";
import CategorySection from "../components/Home/CategorySection";
import NewArrival from "../components/Home/NewArrival";
import offer from "../assets/images/offer.jpg"
import Products from "../components/Home/Products";
const Home = () => {
 
  return (
    <>
    
    {/* <!-- banner --> */}
    <Banner/>
    {/* <!-- banner end --> */}
    {/* <!-- features --> */}
    <Feature/>
    {/* <!-- ./features --> */}

    {/* <!-- categories --> */}

    <CategorySection/>
    {/* <!-- categories --> */}

    {/* <!-- new arrival --> */}
     
     <NewArrival/>
    {/* <!-- new arrival --> */}

    {/* <!-- ads --> */}
    <div class="container pb-16">
        <a href="#">
            <img src={offer} alt="ads" class="w-full"/>
        </a>
    </div>
    {/* <!-- ./ads --> */}

    {/* <!-- product --> */}
       <Products/>
    {/* <!-- product --> */}
    </>

  );
};

export default Home;
