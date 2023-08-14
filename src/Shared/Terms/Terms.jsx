/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga perspiciatis quis, autem odit, natus accusamus nesciunt porro assumenda magnam delectus fugiat. Aperiam veritatis obcaecati magnam libero minus nihil nobis omnis!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;