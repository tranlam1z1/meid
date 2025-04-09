import React from "react";
import {
    Box,
    Typography,
    Grid,
    Container,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from "@mui/material";
import {
    SERVICE_TITLE,
    MAIN_SERVICES_TITLE,
    SERVICE_DATA,
    FINANCE_BANKING_TITLE,
    FINANCE_BANKING_SERVICE,
    PERSONAL_SERVICES_TITLE,
    PERSONAL_SERVICES_DESCRIPTION,
    PERSONAL_SERVICES_SERVICE,
} from "../../const/service";
import Navbar from "../../components/layout/Navbar";
import Content from "../../components/layout/Content";

function IndividulDetail() {
    return (
        <>
            <Navbar />
            <Content />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h6" color="error" fontWeight="bold" gutterBottom>
                        {SERVICE_TITLE}
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                        {MAIN_SERVICES_TITLE}
                    </Typography>

                    <Grid container spacing={4}>
                        {SERVICE_DATA.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        image={service.image}
                                        alt={service.alt}
                                        sx={{ height: 200, objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {service.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            fullWidth
                                            sx={{ mx: 1, mb: 1 }}
                                        >
                                            {service.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mb: 8 }}>
                    <Typography variant="h6" color="error" fontWeight="bold" gutterBottom>
                        {FINANCE_BANKING_TITLE}
                    </Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            image={FINANCE_BANKING_SERVICE.image}
                            alt={FINANCE_BANKING_SERVICE.alt}
                            sx={{ height: 200, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {FINANCE_BANKING_SERVICE.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{ mx: 1, mb: 1 }}
                            >
                                {FINANCE_BANKING_SERVICE.buttonText}
                            </Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box>
                    <Typography variant="h6" color="error" fontWeight="bold" gutterBottom>
                        {PERSONAL_SERVICES_TITLE}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        {PERSONAL_SERVICES_DESCRIPTION}
                    </Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            image={PERSONAL_SERVICES_SERVICE.image}
                            alt={PERSONAL_SERVICES_SERVICE.alt}
                            sx={{ height: 200, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {PERSONAL_SERVICES_SERVICE.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{ mx: 1, mb: 1 }}
                            >
                                {PERSONAL_SERVICES_SERVICE.buttonText}
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </>
    );
}

export default IndividulDetail;