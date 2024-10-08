import React from 'react';
import { UilArrowUp,UilArrowDown ,UilTemperature ,UilTear,UilWind,UilSun ,UilSunset    } from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
  return (
    <div>

        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img className='w-20' src='https://blog.weatherbit.io/content/images/2022/12/blog4.png' alt='img'></img>
            <p className='text-5xl'>°34</p>
            <div className='flex flex-col space-y-2 '>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"></UilTemperature>
                    Real fell :
                    <span className='font-medium ml-1'>°34</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"></UilTear>
                    Humidity :
                    <span className='font-medium ml-1'>65%</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"></UilWind>
                    Wind  :
                    <span className='font-medium ml-1'>11 km/h</span>
                </div>

               

            </div>
        </div>
        
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>

            <UilSun></UilSun>
            <p className='font-light'>
                Rise : <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset></UilSunset>
            <p className='font-light'>
                Set : <span className='font-medium ml-1'>07:35 PM</span>
            </p>
            <p className='font-light'>|</p>

            <UilArrowUp></UilArrowUp>
            <p className='font-light'>
                High : <span className='font-medium ml-1'>45°</span>
            </p>
            <p className='font-light'>|</p>

            <UilArrowDown></UilArrowDown>
            <p className='font-light'>
                Low : <span className='font-medium ml-1'>40°</span>
            </p>
            <p className='font-light'>|</p>
        </div>

    </div>
  );
}

export default TemperatureAndDetails;
