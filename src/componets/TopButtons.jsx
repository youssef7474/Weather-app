import React from 'react';

const TopButtons = () => {


    const cities=
    [
        {
            id:1,
            title:"London"
        },
        {
            id:2,
            title:"Kuala Lumpur"
        },
        {
            id:3,
            title:"Cairo"
        }
        ,
        {   
            id:4,
            title:"Toronto"
        }
       
    ]

    const citiesButton=cities.map((el)=>(
        <button key={el.id} className='text-white text-lg font-medium transition ease-out hover:scale-125'>{el.title}</button>
    ))

  return (
    <div className='flex items-center justify-around my-6'>
        {citiesButton}
    </div>
  );
}

export default TopButtons;
