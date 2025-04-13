import React from 'react';
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Button
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessIcon from '@mui/icons-material/Business';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';

const drawerWidth = 240;

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#f7f8fc',
                    pt: 1,
                    pb: 2,
                    marginTop: '48px', // Đẩy Drawer xuống dưới Header
                    height: 'calc(100% - 48px)', // Chiều cao trừ phần Header
                },
            }}
        >

            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {/* Trang chủ */}
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trang chủ" />
                    </ListItemButton>

                    {/* Dịch vụ */}
                    <Box px={2} mt={1}>
                        <Typography variant="caption" color="text.secondary">DỊCH VỤ</Typography>
                    </Box>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsApplicationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dịch vụ của tôi" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SupportAgentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ticket hỗ trợ" />
                    </ListItemButton>

                    {/* Doanh nghiệp */}
                    <Box px={2} mt={1}>
                        <Typography variant="caption" color="text.secondary">DOANH NGHIỆP</Typography>
                    </Box>
                    <ListItemButton>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Doanh nghiệp" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý ứng dụng" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Đối soát" />
                    </ListItemButton>

                    {/* Tài khoản */}
                    <Box px={2} mt={1}>
                        <Typography variant="caption" color="text.secondary">TÀI KHOẢN</Typography>
                    </Box>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Thông tin tài khoản" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ReceiptIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hóa đơn" />
                    </ListItemButton>
                </List>

                {/* Trạng thái tài khoản */}
                <Box px={2} mt={2}>
                    <Typography variant="caption" color="text.secondary">
                        TRẠNG THÁI TÀI KHOẢN
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: '#61d400',
                            mt: 1,
                            fontSize: 13,
                            boxShadow: 2,
                            '&:hover': {
                                backgroundColor: '#52b300',
                            },
                        }}
                    >
                        ✔ ĐÃ XÁC THỰC
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
