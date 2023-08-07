import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Not_found = () => {
    const { error, status } = useRouteError()
    return (
        <div className='text-center'>
            <img style={{height:400,width:800}} className='mx-auto' src="https://i.ibb.co/ZHPJ7vY/9097-png-860.png" alt="" />
            <div>
            <h3 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h3>
     
               <Link to='/'><button className='bg-[#FFB01F] font-bold text-white p-3 rounded-md'>GOT TO HOME PAGE</button></Link>
            </div>
        </div>
        
        )
};

export default Not_found;