import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaSquareXTwitter, FaInstagram} from 'react-icons/fa6';
import QZone from '../QZone/QZone';
import bgNav from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaSquareXTwitter></FaSquareXTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-4'>
                <img src={bgNav} alt="" />
            </div>
        </div>

    );
};

export default RightNav;