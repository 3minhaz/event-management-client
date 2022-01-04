import React from 'react';
import { Card, Col } from 'react-bootstrap'

const GalleryFlowerDeco = ({ photo }) => {
    const { img } = photo;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} style={{ height: "250px" }} />

            </Card>
        </Col>
    );
};

export default GalleryFlowerDeco;