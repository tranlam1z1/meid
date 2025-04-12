import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import image7 from '../../../asset/image/image7.png';
import image8 from '../../../asset/image/image8.png'; 
import image9 from '../../../asset/image/image9.png';  
import Button from '../../../components/ui/Button';

export default function CustomerStatsSection() {
    const customerTypes = [
        {
            image: image7,
            title: 'Khách hàng cá nhân',
            buttonText: 'Xem các dịch vụ',
            to: '/',
        },
        {
            image: image8,
            title: 'Khách hàng doanh nghiệp',
            buttonText: 'Xem tính năng',
            to: '/',
        },
    ];

    const stats = ['NGƯỜI DÙNG', 'GIAO DIỆN HẰNG THÁNG', 'DỊCH VỤ KHẢ DỤNG'];

    return (
        <Box sx={{ backgroundColor: '#5f0004', py: 5 }}>
            <Container>
                <Grid container justifyContent="center" spacing={4} mb={6}>
                    {customerTypes.map(({ image, title, buttonText, to }, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <img src={image} alt={title} style={{ width: '100%' }} />
                            <Typography sx={{ fontSize: '2rem', textAlign: 'center', color: '#fff', mt: 2 }}>
                                {title}
                            </Typography>
                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Link to={to}>
                                    <Button text={buttonText} sx={{ backgroundColor: '#5f0004', color: '#fff'}}/>
                                </Link>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Grid container justifyContent="center" spacing={4}>
                    {stats.map((text, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img src={image9} alt="Stat" style={{ width: '60%' }} />
                                <Typography sx={{ color: 'white', fontSize: '33px' }}> + </Typography>
                                <Typography sx={{ color: 'white', textAlign: 'center' }}>{text}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
