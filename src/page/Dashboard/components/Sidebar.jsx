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

import {
    Home,
    SettingsApplications,
    SupportAgent,
    Business,
    Apps,
    Assignment,
    Person,
    Receipt
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
    {
        title: "Trang chủ",
        icon: Home,
    },
    {
        section: "DỊCH VỤ",
        items: [
            {
                title: "Dịch vụ của tôi",
                icon: SettingsApplications,
            },
            {
                title: "Ticket hỗ trợ",
                icon: SupportAgent,
            }
        ]
    },
    {
        section: "DOANH NGHIỆP",
        items: [
            {
                title: "Doanh nghiệp",
                icon: Business,
            },
            {
                title: "Quản lý ứng dụng",
                icon: Apps,
            },
            {
                title: "Đối soát",
                icon: Assignment,
            }
        ]
    },
    {
        section: "TÀI KHOẢN",
        items: [
            {
                title: "Thông tin tài khoản",
                icon: Person,
            },
            {
                title: "Hóa đơn",
                icon: Receipt,
            }
        ]
    }
];

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
                    marginTop: '48px',
                    height: 'calc(100% - 48px)',
                },
            }}
        >
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.section ? (
                                <>
                                    <Box px={2} mt={1}>
                                        <Typography variant="caption" color="text.secondary">
                                            {item.section}
                                        </Typography>
                                    </Box>
                                    {item.items.map((subItem, subIndex) => (
                                        <ListItemButton key={`${index}-${subIndex}`}>
                                            <ListItemIcon>
                                                <subItem.icon />
                                            </ListItemIcon>
                                            <ListItemText primary={subItem.title} />
                                        </ListItemButton>
                                    ))}
                                </>
                            ) : (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <item.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            )}
                        </React.Fragment>
                    ))}
                </List>

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