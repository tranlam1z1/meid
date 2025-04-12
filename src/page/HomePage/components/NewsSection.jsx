import React from 'react';
import {
    Box, Typography, Container, Link, Grid, Card, CardMedia, CardContent, CardActions,
    useMediaQuery, useTheme
} from '@mui/material';
import image14 from '../../../asset/image/image14.jfif';

const NewsSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const newsData = [
        {
            image: image14,
            title: 'Hướng dẫn tra cứu cơ sở dữ liệu quốc gia về dân cư năm 2023',
            content: 'Để tra cứu thông tin cá nhân trên cơ sở dữ liệu quốc gia thì các bạn truy cập vào website...'
        },
        {
            image: image14,
            title: 'Ứng dụng dữ liệu dân cư trong lĩnh vực tài chính - ngân hàng',
            content: 'Thời gian qua, lĩnh vực tài chính - ngân hàng đã tích cực triển khai thực hiện Đề án...'
        },
        {
            image: image14,
            title: 'Đẩy mạnh ứng dụng dữ liệu dân cư, định danh và xác thực điện tử...',
            content: '(Chinhphu.vn) - Bộ Tư pháp đã có Quyết định số 522/QĐ-BTP ban hành Kế hoạch...'
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#F9F3EE',
            py: { xs: 4, md: 6 },
            px: { xs: 0, sm: 0 }
        }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    mb: { xs: 3, md: 5 },
                    gap: { xs: 2, sm: 0 }
                }}>
                    <Typography variant="h4" sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1.5rem', md: '2rem' }
                    }}>
                        Tin tức
                    </Typography>
                    <Link
                        href="/news"
                        sx={{
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <Typography sx={{
                                color: '#ed1d42',
                            }}>
                                Xem tất cả các tin tức
                            </Typography>
                            <svg
                                style={{ marginLeft: 10 }}
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
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
                        </Box>
                    </Link>
                </Box>

                <Grid
                    container
                    spacing={{ xs: 2, md: 4 }}
                    sx={{
                        justifyContent: 'center',
                        flexWrap: { xs: 'wrap', md: 'nowrap' }
                    }}
                >
                    {newsData.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                maxWidth: { xs: '100%', sm: '400px' },
                                mb: { xs: 2, md: 0 }
                            }}
                        >
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <CardMedia
                                    sx={{
                                        height: { xs: '200px', md: '250px' },
                                        objectFit: 'cover'
                                    }}
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1.5,
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            minHeight: '3em' // Ensures consistent height for 2 lines
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            minHeight: '4.5em' // Ensures consistent height for 3 lines
                                        }}
                                    >
                                        {item.content}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ p: 2 }}>
                                    <Link
                                        href="/news"
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer'
                                        }}>
                                            <Typography sx={{
                                                color: '#ed1d42',
                                                fontWeight: 600,
                                                fontSize: '0.9rem'
                                            }}>
                                                Xem thêm
                                            </Typography>
                                            <svg
                                                style={{ marginLeft: 8 }}
                                                width="16"
                                                height="16"
                                                fill="none"
                                                viewBox="0 0 20 20"
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
                                        </Box>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsSection;