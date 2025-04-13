import {
    Box,
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    IconButton,
    InputAdornment,
    MenuItem,
    Select,
    Pagination,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const mockData = [
    { id: 91, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
    { id: 90, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
    { id: 89, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
    { id: 88, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
    { id: 87, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
    { id: 86, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
    { id: 85, date: '18/08/2023', valid: true, records: 35, result: 'Đang Xử Lý', price: '10.500 ₫' },
];

function CleanHistoryTable() {
    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
                Lịch sử làm sạch dữ liệu
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, maxWidth: 300 }}>
                <TextField
                    placeholder="Tìm kiếm"
                    size="small"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Ngày tải lên</TableCell>
                        <TableCell>Trạng thái kiểm tra</TableCell>
                        <TableCell>Số bản ghi</TableCell>
                        <TableCell>Ngày hoàn thành</TableCell>
                        <TableCell>Trạng thái kết quả</TableCell>
                        <TableCell>Tải xuống file làm sạch</TableCell>
                        <TableCell>Tổng tiền tạm tính</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>#{row.id}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        px: 1.5,
                                        py: 0.5,
                                        fontSize: 12,
                                        borderRadius: 2,
                                        backgroundColor: '#e0f9cf',
                                        color: '#61d400',
                                        fontWeight: 500,
                                    }}
                                >
                                    Hợp Lệ
                                </Box>
                            </TableCell>
                            <TableCell>{row.records}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        px: 1.5,
                                        py: 0.5,
                                        fontSize: 12,
                                        borderRadius: 2,
                                        backgroundColor: '#fff7e0',
                                        color: '#f5a623',
                                        fontWeight: 500,
                                    }}
                                >
                                    {row.result}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <IconButton disabled>
                                    <FileDownloadOutlinedIcon sx={{ opacity: 0.3 }} />
                                </IconButton>
                            </TableCell>
                            <TableCell>{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    mt: 2,
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography fontSize={14}>Số hàng mỗi trang:</Typography>
                    <Select size="small" value={10} displayEmpty>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                </Box>
                <Typography fontSize={14}>1–7 trong 7</Typography>
                <Pagination count={1} page={1} />
            </Box>

        </Paper>
    );
}

export default CleanHistoryTable;
