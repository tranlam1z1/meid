import React from 'react';
import {
  Box,
  Typography,
  Button,
  styled,
  Container
} from '@mui/material';
import backgroundImage from '../../asset/image/img.png';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '530px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  color: theme.palette.common.white,
}));

const HeroContent = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f40909',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: '#d30808',
  },
  padding: theme.spacing(1.5, 3),
  fontWeight: 'bold',
}));

function Navbar() {
  return (
    <HeroContainer>
      <Container>
        <HeroContent>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Khám phá các dịch vụ tại MelD
          </Typography>

          <Typography
            variant="h6"
            component="p"
            gutterBottom
            sx={{
              mb: 4,
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            MelD cung cấp xác thực bằng căn cước công dân đáng tin cậy cho tất cả các giao dịch và thanh toán hàng ngày.
          </Typography>

          <HeroButton variant="contained">
            Liên hệ dịch vụ
          </HeroButton>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
}

export default Navbar;