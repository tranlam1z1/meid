import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import image10 from '../../../asset/image/image10.png';

export default function LinkedAppSection() {
    return (
        <Box>
            <Container sx={{ mt: 3 }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' }, textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Grid item xs={12} md={6}>
                        <Typography
                            sx={{
                                mb: { xs: 3, md: 5 },
                                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                                fontWeight: 600,
                            }}
                        >
                            Liên kết với hàng trăm ứng dụng từ các nhà phát triển tiềm năng
                        </Typography>
                        <MuiLink
                            sx={{
                                cursor: 'pointer',
                                color: '#ed1d42',
                                fontWeight: '600',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                textDecoration: 'none',
                                mb: { xs: 4, md: 0 },
                            }}
                            href="#"
                        >
                            <Typography>Khám phá ngay</Typography>
                            <svg
                                style={{ marginLeft: 10 }}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M11.5186 3.37007C11.2191 3.04331 10.7253 3.04331 10.4258 3.37007C10.1358 3.6864 10.1358 4.19239 10.4258 4.50872L15.4595 10L10.4258 15.4913C10.1358 15.8076 10.1358 16.3136 10.4258 16.6299C10.7253 16.9567 11.2191 16.9567 11.5186 16.6299L17.0742 10.5693C17.3641 10.253 17.3641 9.74701 17.0742 9.43067L11.5186 3.37007Z"
                                    fill="#ed1d42"
                                />
                                <path
                                    d="M4.01861 3.37007C3.71908 3.04331 3.22532 3.04331 2.92579 3.37007C2.63582 3.6864 2.63582 4.19239 2.92579 4.50872L7.95947 10L2.92579 15.4913C2.63582 15.8076 2.63582 16.3136 2.92579 16.6299C3.22532 16.9567 3.71908 16.9567 4.01861 16.6299L9.57417 10.5693C9.86414 10.253 9.86414 9.74701 9.57417 9.43067L4.01861 3.37007Z"
                                    fill="#ed1d42"
                                />
                            </svg>
                        </MuiLink>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={image10}
                            alt="Linked Apps"
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                mx: { xs: 'auto', md: 0 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
