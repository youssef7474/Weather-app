import React from 'react';

const Forcast = ({title}) => {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2'></hr>

      <div className='flex flex-row items-center justify-between text-white'>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>4:30 PM</p>
                <img className='w-12 my-1' src='https://blog.weatherbit.io/content/images/2022/12/blog4.png' alt='img'></img>
                <p className='font-medium '>°34</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>4:30 PM</p>
                <img className='w-12 my-1' src='https://blog.weatherbit.io/content/images/2022/12/blog4.png' alt='img'></img>
                <p className='font-medium '>°34</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>4:30 PM</p>
                <img className='w-12 my-1' src='https://blog.weatherbit.io/content/images/2022/12/blog4.png' alt='img'></img>
                <p className='font-medium '>°34</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>4:30 PM</p>
                <img className='w-12 my-1' src='https://blog.weatherbit.io/content/images/2022/12/blog4.png' alt='img'></img>
                <p className='font-medium '>°34</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>4:30 PM</p>
                <img className='w-12 my-1' src='https://blog.weatherbit.io/content/images/2022/12/blog4.png' alt='img'></img>
                <p className='font-medium '>°34</p>
            </div>

      </div>



    </div>
  );
}

export default Forcast;
