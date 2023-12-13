import React from 'react';
import { UilSearch,UilLocationPinAlt  } from '@iconscout/react-unicons'
const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>

        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            type='text'
            className='text-xl font-light p-4 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-full'
            placeholder='Search for city'
            >
            </input>
            <UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-125"></UilSearch>
            <UilLocationPinAlt size={30} className="text-white cursor-pointer transition ease-out hover:scale-125"></UilLocationPinAlt>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button  name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125'>°F</button>
      

        </div>
    </div>
  );
}

export default Inputs;
