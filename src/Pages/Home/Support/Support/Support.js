import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from '../Item/Item';
import './Support.css';

const Support = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('./support.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);
    console.log(items);
    return (
        <Container fluid className="py-5">
            <Row xs={1} md={2} lg={4} className="g-3">
            {
                items.map(item => <Item
                key={item.key}
                item={item}
                ></Item>)
            }
            </Row>
        </Container>
    );
};

export default Support;