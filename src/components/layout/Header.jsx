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
  [theme.breakpoints.down('md')]: {
    display: 'none', 
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
            ) : null}

            {!isMobile && (
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
                      size="medium"
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
                      size="medium"
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
            )}

            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{
                  ml: 'auto',
                  order: 1
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </MenuItems>
        </StyledToolbar>
      </Container>

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
            marginTop: '8px',
            right: '16px',
            left: 'auto !important',
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

        {!username && (
          <>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/register"
              sx={{
                '&:hover': {
                  backgroundColor: '#a52a2a',
                },
              }}
            >
              <Button
                fullWidth
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
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/login"
              sx={{
                '&:hover': {
                  backgroundColor: '#a52a2a',
                },
              }}
            >
              <Button
                fullWidth
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
            </MenuItem>
          </>
        )}

        {username && (
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              '&:hover': {
                backgroundColor: '#a52a2a',
              },
            }}
          >
            <Avatar
              src={avatar}
              alt="User Avatar"
              sx={{ width: 40, height: 40 }}
            />
            <Typography sx={{ ml: 2 }}>{username}</Typography>
          </MenuItem>
        )}
      </Menu>
    </AppBar>
  );
}

export default Header;