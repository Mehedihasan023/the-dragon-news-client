/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Qzone/Qzone';
import bg from '../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 w-75' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button className='mb-2 w-75' variant="outline-secondary"><FaGithub /> Login With Github </Button>

            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='text-center position-relative'>
                <img  src={bg} alt="" />
                <div className='position-absolute top-0 start-0 my-4 mx-auto w-100 text-center'>
                    <h2 className=' text-white '>
                    Create an 
                    <br /> Amazing <br /> 
                    Newspaper</h2>
                    <p className='text-center text-secondary px-4 mx-4 my-4'>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;