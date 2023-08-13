/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LeftNav.css';
const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <h3>All Category</h3>
         <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}>
                   
                        <NavLink
                            to={`/category/${category.id}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "active"
                                        : "not-active"
                            }
                        >
                            {category.name}
                        </NavLink>



                    </p>)
                }
         </div>
         
        </div>
    );
};

export default LeftNav;
