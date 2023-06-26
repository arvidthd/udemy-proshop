import { useParams } from 'react-router-dom'
import { useEffect, useState, } from 'react'    
// import products from '../products'

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

import Rating from '../components/Rating'
import { FaCartPlus } from 'react-icons/fa';

import axios from 'axios'

const ProductScreen = () => {
    const [product, setProduct] = useState({});

    //Fetch Dynamic Param from URL
    const { id: productId } = useParams();

    //--Using API--
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios({url:`/api/products/${productId}`, baseURL:"http://localhost:8111"});
            setProduct(data);
        }

        fetchProduct();
    });

    //--Using File--
    // // Fetch Dynamic Param
    // const { id: productId } = useParams();
    // // Fetch Product Detail from Database
    // const product = products.find((p) => p._id === productId);
    // console.log(product);

  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price : ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price :</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status :</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className='btn-block'
                                type='button'
                                disabled={product.countInStock === 0}
                            >
                                <FaCartPlus className='mx-2 mb-1' />
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen