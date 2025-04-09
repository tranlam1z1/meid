import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Avatar,
  styled,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../asset/image/logo.png';
import avatar from '../../asset/image/user.jfif';

const MENU_ITEMS = [
  { id: 1, text: 'Dành cho cá nhân', href: '#' },
  { id: 2, text: 'Dành cho doanh nghiệp', href: '#' },
  { id: 3, text: 'Nhà phát triển', href: '#' },
  { id: 4, text: 'Bảo mật', href: '#' },
  { id: 5, text: 'Liên hệ', href: '#' }
];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 0),
}));

const MenuItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  alignItems: 'center',
}));

const AuthButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginLeft: theme.spacing(4),
}));

const Logo = styled('img')({
  height: 50,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const MenuLink = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.grey[300],
    backgroundColor: 'transparent',
  },
}));

function Header() {
  const username = localStorage.getItem('username');

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#800000',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        borderBottom: '2px solid #600000',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>

          <MenuItems component="nav">
            {MENU_ITEMS.map(item => (
              <MenuLink
                key={item.id}
                href={item.href}
                component="a"
              >
                {item.text}
              </MenuLink>
            ))}

            <AuthButtons>
              {username ? (
                <Avatar
                  src={avatar}
                  alt="User Avatar"
                  sx={{ width: 40, height: 40 }}
                />
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    sx={{
                      backgroundColor: '#a52a2a',
                      '&:hover': {
                        backgroundColor: '#8a2323',
                      },
                      border: '1px solid #f60909',
                    }}
                  >
                    Đăng ký
                  </Button>
                  <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    sx={{
                      backgroundColor: '#f40909',
                      '&:hover': {
                        backgroundColor: '#d30808',
                      },
                    }}
                  >
                    Đăng nhập
                  </Button>
                </>
              )}
            </AuthButtons>
          </MenuItems>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Header;