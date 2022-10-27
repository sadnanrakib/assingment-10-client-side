import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./Shipping.css'


const Shipping = () => {
  const news = useLoaderData();
    return (
        <div className='check'>
            
            <div>
              <button>Purcess</button>
              </div>
        </div>
    );
};

export default Shipping;