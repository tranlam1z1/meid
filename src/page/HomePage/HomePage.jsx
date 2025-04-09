import React from 'react';
import './HomePage.css';
import banner from '../../asset/image/banner2.1.png';
import banner2 from '../../asset/image/banner2.png';
import image6 from '../../asset/image/image6.png';
import { styled, useTheme } from '@mui/material/styles';
import image7 from '../../asset/image/image7.png';
import image8 from '../../asset/image/image8.png';
import image9 from '../../asset/image/image9.png';
import image10 from '../../asset/image/image10.png';
import image11 from '../../asset/image/image11.png';
import image12 from '../../asset/image/image12.png';
import image13 from '../../asset/image/image13.png';
import image14 from '../../asset/image/image14.jfif';

import { Box, Typography, Grid, Container, Link, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Button from '../../components/ui/Button';

const TextRed = styled('span')(() => ({
    color: '#F32047',
}));

function HomePage() {
    const theme = useTheme();

    const newsData = [
        {
            image: image14,
            title: 'Hướng dẫn tra cứu cơ sở dữ liệu quốc gia về dân cư năm 2023',
            content:
                'Để tra cứu thông tin cá nhân trên cơ sở dữ liệu quốc gia thì các bạn truy cập vào website “Cơ sở dữ liệu quốc gia về dân cư” –> Chọn “Đăng nhập” –> Chọn “Tài khoản cổng DVC quốc gia” –> Chọn “Tài khoản được cấp bởi cổng DVC quốc gia” –> C',
        },
        {
            image: image14,
            title: 'Ứng dụng dữ liệu dân cư trong lĩnh vực tài chính - ngân hàng',
            content:
                'Thời gian qua, lĩnh vực tài chính - ngân hàng đã tích cực triển khai thực hiện Đề án Phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử phục vụ việc chuyển đổi số (CĐS) quốc gia giai đoạn 2022-2025...',
        },
        {
            image: image14,
            title: 'Đẩy mạnh ứng dụng dữ liệu dân cư, định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia',
            content:
                '(Chinhphu.vn) - Bộ Tư pháp đã có Quyết định số 522/QĐ-BTP ban hành Kế hoạch thực hiện Chỉ thị số 05/CT-TTg ngày 23/2/2023 của Thủ tướng Chính phủ Thời gian qua, lĩnh vực tài chính - ngân hàng đã tích cực triển khai thực hiện Đề án Phát triển ứng dụng dữ liệu về dân cư, định danh ',
        },
    ];

    return (
        <>
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

            <Box>
                <Container sx={{ mt: 3 }}>
                    <Grid
                        container
                        spacing={4}
                        sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center' }}
                    >
                        <Grid item xl={6} lg={6} md={6} xs={12}>
                            <Box component="img" src={image6} alt="MeID" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} xs={12}>
                            <Box>
                                <Typography sx={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: 10 }}>
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
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                    }}
                                ><Typography>Về chúng tôi</Typography>

                                    <svg
                                        style={{ marginLeft: 10 }}
                                        className="icon-outline-direction-2-right-arrow"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#5f0004', padding: '20px 0' }}>
                <Container>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }} spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={image7} alt="MeID" style={{ width: '100%' }} />
                            <Typography sx={{ fontSize: '2rem', textAlign: 'center', color: '#fff', marginTop: '10px' }}>Khách hàng cá nhân</Typography>
                            <div className="button7">
                                <Link to="/">
                                    <Button text="Xem các dịch vụ" />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={image8} alt="MeID" style={{ width: '100%' }} />
                            <Typography sx={{ fontSize: '2rem', textAlign: 'center', color: '#fff', marginTop: '10px' }}>Khách hàng doanh nghiệp</Typography>
                            <div className="button7">
                                <Link to="/">
                                    <Button text="Xem tính năng" />
                                </Link>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={image9} alt="MeID" style={{ width: '60%' }} />
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontSize: '33px',
                                    }}
                                >
                                    {' '}
                                    +
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                    }}
                                >
                                    NGƯỜI DÙNG
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={image9} alt="MeID" style={{ width: '60%' }} />
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontSize: '33px',
                                    }}
                                >
                                    {' '}
                                    +
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                    }}
                                >
                                    GIAO DIỆN HẰNG THÁNG
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={image9} alt="MeID" style={{ width: '60%' }} />
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontSize: '33px',
                                    }}
                                >
                                    {' '}
                                    +
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                    }}
                                >
                                    DỊCH VỤ KHẢ DỤNG
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box>
                <Container sx={{ mt: 3 }}>
                    <Grid
                        container
                        spacing={4}
                        sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center' }}
                    >
                        <Grid item xl={6} lg={6} md={6} xs={12}>
                            <Box>
                                <Typography sx={{ marginBottom: 5, fontSize: '2.5rem', fontWeight: '600' }}>
                                    Liên kết với hàng trăm ứng dụng từ các nhà phát triển tiềm năng
                                </Typography>
                                <Link
                                    sx={{
                                        cursor: 'pointer',
                                        color: '#ed1d42',
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                    }}
                                ><Typography>
                                        Khám phá ngay
                                    </Typography>

                                    <svg
                                        style={{ marginLeft: 10 }}
                                        className="icon-outline-direction-2-right-arrow"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} xs={12}>
                            <Box component="img" src={image10} alt="MeID" sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box>
                <Container sx={{ mt: 10, mb: 10 }}>
                    <Typography variant="h3" sx={{ textAlign: 'center' }}>
                        Dịch vụ tích hợp
                    </Typography>
                    <Grid
                        container
                        spacing={4}
                        sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center' }}
                        marginTop={5}
                    >
                        <Grid item md={6} sm={12} xs={12}>
                            <Typography variant="h4">Chữ ký số cá nhân</Typography>
                            <Typography>
                                Dễ dàng thực hiện ký kết các hợp đồng giữa Doanh nghiệp với Doanh nghiệp, Doanh nghiệp với Cá nhân trên
                                môi trường <br /> điện tử
                            </Typography>
                            <Box component="img" src={image11} alt="MeID" sx={{ width: '100%' }} />
                            <Link to="/">
                                <Button text="Khám phá các dịch vụ" className="button-service" />
                            </Link>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <Box>
                                <Grid
                                    container
                                    spacing={4}
                                    sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'flex-start' }}
                                >
                                    <Grid item md={12} lg={6} sx={{ width: '100%', maxWidth: '400px' }}>
                                        <Typography variant="h4">Xác thực thông tin cá nhân</Typography>
                                        <Typography>
                                            Định danh và xác thực khách hàng thông qua việc ứng dụng công nghệ để xác thực danh tính của khách
                                            hàng
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12} lg={6} >
                                        <img src={image12} alt="MeID" style={{ width: '100%', maxWidth: '400px', marginTop: '100px' }} />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid
                                    container
                                    spacing={4}
                                    sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'flex-start' }}
                                    marginTop={3}
                                >
                                    <Grid item md={12} lg={6} sx={{ width: '100%', maxWidth: '400px' }}>
                                        <Typography variant="h4">Làm sạch dữ liệu</Typography>
                                        <Typography>
                                            Làm sạch dữ liệu người dùng được xem là giải pháp quan trọng thúc đẩy dịch vụ thanh toán không dùng tiền
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12} lg={6} >
                                        <img src={image13} alt="MeID" style={{ width: '100%', maxWidth: '400px', marginTop: '100px' }} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#F9F3EE', padding: '20px 0' }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h4">Tin tức</Typography>
                        <Box >
                            <Link href="/news" sx={{ textDecoration: 'none' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <Typography sx={{ color: '#ed1d42' }}>Xem tất cả các tin tức</Typography>
                                    <svg
                                        style={{ marginLeft: 10 }}
                                        className="icon-outline-direction-2-right-arrow"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                    </Box>
                    <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }} marginTop={5}>
                        {newsData.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{ width: '100%', maxWidth: '400px' }}>
                                <Card>
                                    <CardMedia sx={{ height: '300px' }} image={item.image} title={item.title} />
                                    <CardContent>
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                color: 'black',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
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
                                                WebkitLineClamp: 2,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="/news" sx={{ textDecoration: 'none' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                                <Typography sx={{ color: '#ed1d42' }}>Xem thêm</Typography>
                                                <svg
                                                    style={{ marginLeft: 10 }}
                                                    className="icon-outline-direction-2-right-arrow"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
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
        </>
    );
}

export default HomePage;
