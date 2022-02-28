import React from 'react';
import { Col } from 'react-bootstrap';
import './Item.css';

const Item = ({item}) => {
    const {img, name, description} = item;
    return (
        <Col className="support rounded py-3">
            <img className="support-img" src={img} alt="" />
            <div className="support-description">
            <h3>{name}</h3>
            <div className="support-break mx-auto my-3"></div>
            <p>{description.slice(0, 70)}</p>
            </div>
        </Col>
    );
};

export default Item;