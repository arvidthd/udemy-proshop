import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    //EXP : define current year from native function
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    <Col className = 'text-center py-3'>
                        <p>VidShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
