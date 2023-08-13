/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className="text-center mt-4">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("MMMM, dddd D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light py-3'>
                <Button className='px-3 mx-3' variant="danger">Latest</Button>
                <Marquee className='text-black' speed={70}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;