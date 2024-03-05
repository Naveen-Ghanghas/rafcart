import React from 'react'
import banner from '../../assets/images/banner-bg.jpg'
const Banner = () => {
  return (
    <div  className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${banner})`}}>
  
    <div class="container">
        <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br/> home decoration
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br/>
            accusantium perspiciatis, sapiente
            magni eos dolorum ex quos dolores odio</p>
        <div class="mt-12">
            <a href="#" class="bg-primary border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
        </div>
    </div>
</div>
  )
}

export default Banner