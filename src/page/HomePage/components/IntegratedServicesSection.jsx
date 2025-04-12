import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import image11 from '../../../asset/image/image11.png';
import image12 from '../../../asset/image/image12.png';
import image13 from '../../../asset/image/image13.png';

export default function IntegratedServicesSection() {
    return (
        <Box>
            <Container sx={{ mt: 10, mb: 10 }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
                    }}
                >
                    Dịch vụ tích hợp
                </Typography>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                        alignItems: 'center',
                    }}
                    marginTop={5}
                >
                    <Grid item md={6} sm={12} xs={12}>
                        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }}>
                            Chữ ký số cá nhân
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                marginBottom: 2,
                            }}
                        >
                            Dễ dàng thực hiện ký kết các hợp đồng giữa Doanh nghiệp với Doanh nghiệp, Doanh nghiệp với Cá nhân trên
                            môi trường <br /> điện tử
                        </Typography>
                        <Box component="img" src={image11} alt="MeID" sx={{ width: '100%', maxWidth: '100%' }} />
                        <Link to="/">
                            <Button text="Khám phá các dịch vụ" className="button-service" />
                        </Link>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box>
                            <Grid
                                container
                                spacing={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Grid item md={12} lg={6} sx={{ width: '100%', maxWidth: '400px' }}>
                                    <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }}>
                                        Xác thực thông tin cá nhân
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1rem', sm: '1.2rem' },
                                            marginBottom: 2,
                                        }}
                                    >
                                        Định danh và xác thực khách hàng thông qua việc ứng dụng công nghệ để xác thực danh tính của khách
                                        hàng
                                    </Typography>
                                </Grid>
                                <Grid item md={12} lg={6}>
                                    <img
                                        src={image12}
                                        alt="MeID"
                                        style={{
                                            width: '100%',
                                            maxWidth: '400px',
                                            marginTop: '100px',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid
                                container
                                spacing={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                                    alignItems: 'flex-start',
                                }}
                                marginTop={3}
                            >
                                <Grid item md={12} lg={6} sx={{ width: '100%', maxWidth: '400px' }}>
                                    <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }}>
                                        Làm sạch dữ liệu
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1rem', sm: '1.2rem' },
                                            marginBottom: 2,
                                        }}
                                    >
                                        Làm sạch dữ liệu người dùng được xem là giải pháp quan trọng thúc đẩy dịch vụ thanh toán không dùng tiền
                                    </Typography>
                                </Grid>
                                <Grid item md={12} lg={6}>
                                    <img
                                        src={image13}
                                        alt="MeID"
                                        style={{
                                            width: '100%',
                                            maxWidth: '400px',
                                            marginTop: '100px',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
