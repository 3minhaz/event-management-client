import React, { useEffect, useState } from 'react';

import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ManagePrograms = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            })
    }, [isDeleted])
    const handleProductDelete = id => {
        const proceed = window.confirm('are you sure you want to delete the product');
        if (proceed) {
            fetch(``, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('successfully deleted');
                        setIsDeleted(true);

                    }
                })
        }
    }
    return (
        <div>
            <div>
                <h2>Total products. {products.length}</h2>
                {isLoading && <CircularProgress />}
                <Grid container spacing={3}>
                    {
                        products.map(product => <Grid key={product._id} item xs={12} md={6}>
                            <Paper sx={{ p: 3 }} elevation={3} >
                                <img style={{ width: '75%', height: '25vh', }} src={product.image} alt="" />
                                <Typography variant="h4" sx={{ textAlign: 'left', marginLeft: 2 }}>
                                    Product Name: {product.productName}
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'left', marginLeft: 2 }}>
                                    Price: {product.price}
                                </Typography>
                                {/* <Button onClick={() => handleProductDelete(product._id)} variant="outlined" color="error" sx={{ textAlign: 'left' }}>Delete</Button> */}
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </div >
        </div>
    );
};

export default ManagePrograms;