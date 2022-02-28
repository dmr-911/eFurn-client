import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
        <Container fluid>
            {
                items.map(item => <Item
                key={item.key}
                item={item}
                ></Item>)
            }
        </Container>
    );
};

export default Support;