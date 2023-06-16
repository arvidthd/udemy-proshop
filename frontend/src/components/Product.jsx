import React from 'react'
import { Card } from "react-bootstrap"
//EXP : Implementing Link Router to make it client side render
import { Link } from 'react-router-dom'

//EXP : Implementing Star Review
import Rating from './Rating'


const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`} >
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body >
        <Link to={`/product/${product._id}`} >
          {/* Adding class product-title for elipsis (shortened the long title) */}
          <Card.Title as="div" className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={ product.rating } text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product