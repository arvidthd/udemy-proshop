import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
// import products from '../products';

//EXP : fetching data from backend API
import { useEffect, useState } from 'react';


const HomeScreen = () => {


    const[products, setProduts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios({url:'/api/products', baseURL:'http://localhost:8111'});
            setProduts(data);
        };

        fetchProducts();
    }, []);

return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
        </>
    )
}

export default HomeScreen