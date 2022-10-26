import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';

const LiftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res=>res.json())
      .then(data=>setCategories(data))
    },[])
    return (
        <div>
             <h6>All Categories:{categories.length}</h6>

            {
                categories.map(category=> <p 
                    
                    key={category.id}
                    
                    
                    ><Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
            }
        </div>
    );
};

export default LiftSideNav;