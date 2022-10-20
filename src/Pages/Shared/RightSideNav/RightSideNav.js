import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaReddit, FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BandCarousels from '../BandCarousels/BandCarousels';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login wiht google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup>
            <div>
                <h4>find us </h4>
                <ListGroup variant="flush">
                    <ListGroup.Item className='mb-2' ><FaFacebookSquare></FaFacebookSquare> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaReddit></FaReddit> reddit</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BandCarousels></BandCarousels>
            </div>
        </div>
    );
};

export default RightSideNav;