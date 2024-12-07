import React from 'react';
import menu from '../assets/images/b6de4d207430137.Y3JvcCwyODc2LDIyNTAsNjQsMA.jpg';
import MenuList from './MenuList';

const Home = () => {
  return (
    <div className="relative w-full">
      
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg">
        <img
          src={menu}
          alt="menu"
          className="w-full h-full object-cover"
        />
      </div>
   
      <MenuList />
    </div>
  );
};

export default Home;
