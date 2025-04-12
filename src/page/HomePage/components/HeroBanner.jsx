import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import banner from '../../../asset/image/banner2.1.png';
import banner2 from '../../../asset/image/banner2.png';

const HeroBanner = () => (
    <Box
        sx={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
        }}
    >
        <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mt: 2 }}>
                MeID
            </Typography>
            <Typography>
                Cung cấp nền tảng tích hợp định danh số phục vụ phát triển kinh tế - xã hội dành cho cá nhân, cơ quan, tổ
                chức cần xác thực định danh trong quá trình giao dịch
            </Typography>
            <Box component="img" src={banner} alt="MeID" sx={{ width: '60%' }} />
        </Container>
    </Box>
);

export default HeroBanner;
