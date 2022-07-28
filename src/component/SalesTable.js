import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function SalesTable(props) {
    const salesData = props.data[0].data[0].sales

    return (
        <div className='table-container'>
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Week Ending</TableCell>
                        <TableCell align="right">Retail Sales</TableCell>
                        <TableCell align="right">Wholesale Sales</TableCell>
                        <TableCell align="right">Units Sold</TableCell>
                        <TableCell align="right">Retailer Margin</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {salesData.map((row, idx) => (
                        <TableRow
                            key={row.weekEnding + idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.weekEnding}
                            </TableCell>
                            <TableCell align="right">{row.retailSales}</TableCell>
                            <TableCell align="right">{row.wholesaleSales}</TableCell>
                            <TableCell align="right">{row.unitsSold}</TableCell>
                            <TableCell align="right">{row.retailerMargin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
