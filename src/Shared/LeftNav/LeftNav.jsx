/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';
import './LeftNav.css';
import { FaRegCalendar } from 'react-icons/fa';
const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-mehedihasan023.vercel.app/categories')
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

            <div className='mt-4'>
                <Row xs={1} md={1} lg={1} className="g-4">

                    <Col >
                        <Card className='border border-0 px-4'>
                            <Card.Img variant="top" src={first} />
                            <Card.Body >
                                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>

                                <div className='d-flex '>
                                    <h6>Sports</h6>
                                    <span className='d-flex'><FaRegCalendar className='me-2 ms-4 mt-1'></FaRegCalendar><p>Jan 4, 2022</p></span>
                                </div>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='border border-0 px-4'>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>

                                <div className='d-flex '>
                                    <h6>Sports</h6>
                                    <span className='d-flex'><FaRegCalendar className='me-2 ms-4 mt-1'></FaRegCalendar><p>Jan 4, 2022</p></span>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='border border-0 px-4'>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>

                                <div className='d-flex '>
                                    <h6>Sports</h6>
                                    <span className='d-flex'><FaRegCalendar className='me-2 ms-4 mt-1'></FaRegCalendar><p>Jan 4, 2022</p></span>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>

        </div>
    );
};

export default LeftNav;
