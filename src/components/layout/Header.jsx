import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Avatar,
  styled,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
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
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(1),
  },
}));

const AuthButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(1),
    gap: theme.spacing(1),
  },
}));

const Logo = styled('img')({
  height: 50,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '@media (max-width: 600px)': {
    height: 40,
  },
});

const MenuLink = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.grey[300],
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem',
    padding: theme.spacing(0.5, 1),
  },
}));

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const username = localStorage.getItem('username');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
            {!isMobile ? (
              <>
                {MENU_ITEMS.map(item => (
                  <MenuLink
                    key={item.id}
                    href={item.href}
                    component="a"
                  >
                    {item.text}
                  </MenuLink>
                ))}
              </>
            ) : (
              <IconButton
                edge="end"  // Thay đổi từ "start" thành "end" để đẩy sang phải
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{
                  ml: 'auto', // Tự động căn lề trái để đẩy sang phải
                  order: 1 // Đảm bảo nút menu ở cuối cùng
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

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
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      backgroundColor: '#a52a2a',
                      '&:hover': {
                        backgroundColor: '#8a2323',
                      },
                      border: '1px solid #f60909',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '0.75rem',
                        padding: theme.spacing(0.5, 1),
                      },
                    }}
                  >
                    Đăng ký
                  </Button>
                  <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      backgroundColor: '#f40909',
                      '&:hover': {
                        backgroundColor: '#d30808',
                      },
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '0.75rem',
                        padding: theme.spacing(0.5, 1),
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

      {/* Mobile menu - Điều chỉnh vị trí */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            width: '60%',
            backgroundColor: '#800000',
            color: 'white',
            marginTop: '8px', // Khoảng cách với nút menu
            right: '16px', // Đặt vị trí right
            left: 'auto !important', // Ghi đè left mặc định
          },
        }}
      >
        {MENU_ITEMS.map(item => (
          <MenuItem
            key={item.id}
            onClick={handleMenuClose}
            component="a"
            href={item.href}
            sx={{
              '&:hover': {
                backgroundColor: '#a52a2a',
              },
            }}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default Header;