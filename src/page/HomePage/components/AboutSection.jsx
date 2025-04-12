import React from 'react';
import { Box, Grid, Typography, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import image6 from '../../../asset/image/image6.png';

const TextRed = styled('span')(() => ({
    color: '#F32047',
}));

const AboutSection = () => (
    <Box>
        <Container sx={{ mt: 3 }}>
            <Grid container spacing={4} sx={{
                justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'nowrap' }
                , alignItems: 'center'
            }}>
                <Grid item xl={6} lg={6} md={6} xs={12}>
                    <Box component="img" src={image6} alt="MeID" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xl={6} lg={6} md={6} xs={12}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 4, md: 0 } }}>
                        <Typography sx={{
                            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                            fontWeight: '600',
                            marginBottom: { xs: 4, md: 10 },
                        }}>
                            <TextRed>MeID</TextRed> kết nối các hệ thống thông qua xác thực thông tin về{' '}
                            <TextRed>cơ sở dữ liệu cư dân quốc gia</TextRed>
                        </Typography>
                        <Typography sx={{ marginBottom: 5 }}>
                            Cung cấp các dịch vụ xác thực thông tin về cá nhân thông qua thẻ căn cước công dân. Chỉ cần áp thẻ căn
                            cước công dân sau điện thoại, dữ liệu sẽ được thu thập và đồng bộ ngay lập tức.
                        </Typography>
                        <Link
                            sx={{
                                cursor: 'pointer',
                                color: '#ed1d42',
                                textTransform: 'none',
                                fontWeight: '600',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                textDecoration: 'none',
                                marginBottom: { xs: 4, md: 10 },
                            }}
                            href="#"
                        >
                            <Typography>Về chúng tôi</Typography>
                            <svg style={{ marginLeft: 10 }} width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path
                                    d="M11.5186 3.37007C11.2191 3.04331 10.7253 3.04331 10.4258 3.37007C10.1358 3.6864 10.1358 4.19239 10.4258 4.50872L15.4595 10L10.4258 15.4913C10.1358 15.8076 10.1358 16.3136 10.4258 16.6299C10.7253 16.9567 11.2191 16.9567 11.5186 16.6299L17.0742 10.5693C17.3641 10.253 17.3641 9.74701 17.0742 9.43067L11.5186 3.37007Z"
                                    fill="#ed1d42"
                                />
                                <path
                                    d="M4.01861 3.37007C3.71908 3.04331 3.22532 3.04331 2.92579 3.37007C2.63582 3.6864 2.63582 4.19239 2.92579 4.50872L7.95947 10L2.92579 15.4913C2.63582 15.8076 2.63582 16.3136 2.92579 16.6299C3.22532 16.9567 3.71908 16.9567 4.01861 16.6299L9.57417 10.5693C9.86414 10.253 9.86414 9.74701 9.57417 9.43067L4.01861 3.37007Z"
                                    fill="#ed1d42"
                                />
                            </svg>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default AboutSection;
