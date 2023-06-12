import React from 'react';
import { Link } from "react-router-dom";
import food from '../assets/img/food.jpg';
import food1 from '../assets/img/food1.jpg';
import food2 from '../assets/img/food2.jpg';
import food3 from '../assets/img/food3.jpg';

export default function Homepage() {
    return (
        <main>
            <section className="hero">
                <div className='container column'>
                    <div className="hero-text row-50">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family owned Mediteranean restaurant located in the heart
                            of Chicago. We offer a variety of dishes from all over the
                            Mediteranean region. We are open for lunch and dinner. We also offer
                            catering for all your special events.
                        </p>
                        <div className='btn-wrapper'>
                            <Link to="/booking" className="btn">
                                Reserve a Table
                            </Link>
                        </div>
                    </div>
                    <div className="hero-img row-50">
                        <img href={food} alt="food" />
                    </div>
                </div>
            </section>
            <section className="content container">
                <div className="column justify-between content-headline">
                    <h2>This weeks specials</h2>
                    <div className='btn-wrapper'>
                        <Link to="/" className="btn">
                            Online Menu
                        </Link>
                    </div>
                </div>
                <div className="column justify-between cards">
                    <div className="card row-30">
                        <img href={food1} alt="." className="card-img" />
                        <div className="card-text">
                            <div className="card-title column justify-between">
                                <h3>Greek salad</h3>
                                <p>$12.99</p>
                            </div>
                            <p>
                                The famouse greek salad of chrispy lettuce, peppers, olives and
                                our Chicago styale fetacheese, garnished witch crunchy garlic
                                and rosemary croutons.
                            </p>
                            <a href="#/">Order a delivery</a>
                        </div>
                    </div>
                    <div className="card row-30">
                        <img href={food2} alt="." className="card-img" />
                        <div className="card-text">
                            <div className="card-title column justify-between">
                                <h3>Bruschetta</h3>
                                <p>$5.89</p>
                            </div>
                            <p>
                                Our Bruschetta os made from grilled bread that has been smeared
                                with garlic and seasoned witch sait and olive oil.
                            </p>
                            <a href="#/">Order a delivery</a>
                        </div>
                    </div>
                    <div className="card row-30">
                        <img href={food3} alt="." className="card-img" />
                        <div className="card-text">
                            <div className="card-title column justify-between">
                                <h3>Lemon Dessert</h3>
                                <p>$5.00</p>
                            </div>
                            <p>
                                This cames straight from grandma's recipe book. Every last
                                ingredient has been sourced and is as authantic as can be
                                imagined.
                            </p>
                            <a href="#/">Order a delivery</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
