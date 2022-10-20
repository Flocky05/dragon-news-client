import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import num1 from '../../../Asests/Bands/num1.jpg'
import num2 from '../../../Asests/Bands/num2.jpg'

const BandCarousels = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={num1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={num2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BandCarousels;