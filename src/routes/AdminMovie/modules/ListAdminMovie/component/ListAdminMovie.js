import _ from 'lodash'
import React, { useState } from 'react'
import '../assets/listAdmin.scss'
import { useHistory } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings'
import Moment from 'react-moment';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@material-ui/core';

export default function ListAdminMovie({ listTheater, remove, hanldSearch }) {
    const history = useHistory()
    return (
        <div className='create'>
            <div className='item_search'>
                <button className="btn_create" onClick={()=>history.push('/admin/create')}> Thêm phim </button>

                <input onChange={(e) => hanldSearch(e.target.value)} placeholder='Tìm kiếm'></input>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hình ảnh</TableCell>
                            <TableCell>Tên Phim</TableCell>
                            <TableCell>Mã Nhóm</TableCell>
                            <TableCell>Mã phim</TableCell>
                            <TableCell>Ngày khởi chiếu</TableCell>
                            <TableCell>
                                <SettingsIcon />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            _.map(listTheater, (movie, idx) => (
                                <TableRow key={idx} >
                                    <TableCell >
                                        <div className='table_picture'>
                                            <img src={movie.hinhAnh} alt=''></img>
                                        </div>
                                    </TableCell>
                                    <TableCell>{movie.tenPhim}</TableCell>
                                    <TableCell>{movie.maNhom}</TableCell>
                                    <TableCell>{movie.maPhim}</TableCell>
                                    <TableCell>
                                        <Moment format="DD/MM">{movie.ngayKhoiChieu}</Moment>~
                                        <Moment format="hh:mm">{movie.ngayKhoiChieu}</Moment>
                                    </TableCell>
                                    <TableCell>


                                        <button  onClick={() => remove(movie.maPhim)}><DeleteSweepIcon className='icon_delete'/></button>
                                        <button onClick={() => history.push(`/admin/${movie.maPhim}/edit`)}><EditIcon className='icon_edit'/></button>
                                        <button onClick={() => history.push(`/admin/${movie.maPhim}/quanliphim`)}><DateRangeIcon className='icon_date'/></button>

                                    </TableCell>

                                </TableRow>

                            ))
                        }


                    </TableBody>
                </Table>
            </TableContainer>



        </div>

    )
}

// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import TablePagination from '@material-ui/core/TablePagination';
// import SettingsIcon from '@material-ui/icons/Settings'
// import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
// import EditIcon from '@material-ui/icons/Edit';
// import '../assets/listAdmin.scss'
// import { useHistory } from 'react-router';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.action.hover,
//         },
//     },
// }))(TableRow);



// const useStyles = makeStyles({
//     table: {
//         minWidth: 800,
//     },
//     stt: {
//         width: 10,
//     },
//     names: {
//         width: 300
//     }



// });



// export default function ListAdminMovie({ listTheater, remove, hanldSearch }) {
//     console.log(listTheater)
//     const history = useHistory()
//     const classes = useStyles();
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };


//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     return (
//         <div className='form_ListUser'>
//             <button type="button" class="btn_addUser " onClick={() => history.push(`/user/adduser`)} >Thêm người dùng</button>
//             <div className="input-group mb-3">
//                 <div className="input-group-prepend">
//                     <span className="input-group-text" id="basic-addon1">Tìm kiếm</span>
//                 </div>
//                 <input onChange={(e) => hanldSearch(e.target.value)} type="text" className="form-control" placeholder="Họ tên" aria-label="Username" aria-describedby="basic-addon1" />
//             </div>


//             <TableContainer component={Paper}>
//                 <Table className={classes.table} aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell className={classes.stt}>Hình ảnh</StyledTableCell>
//                             <StyledTableCell align="center">Tên phim</StyledTableCell>
//                             <StyledTableCell align="center">Mã phim</StyledTableCell>
//                             <StyledTableCell align="center">Mô tả</StyledTableCell>
//                             <StyledTableCell align="center">Ngày khởi chiếu</StyledTableCell>
//                             <StyledTableCell className={classes.icons} align="center"><SettingsIcon /></StyledTableCell>

//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {listTheater.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((info, idx) => (

//                             <StyledTableRow key={idx}>
//                                 <StyledTableCell component="th" scope="row">
//                                     <div className='table_picture'>
//                                         <img src={info.hinhAnh} alt='' width='100' height='200'></img>
//                                     </div>
//                                 </StyledTableCell>
//                                 <StyledTableCell align="center">{info.tenPhim}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="center">{info.maPhim}</StyledTableCell>
//                                 <StyledTableCell align="center">{info.moTa}</StyledTableCell>
//                                 <StyledTableCell align="center">
//                                     <Moment format="DD/MM">{info.ngayKhoiChieu}</Moment>~
//                                     <Moment format="hh:mm">{info.ngayKhoiChieu}</Moment>
//                                 </StyledTableCell>
//                                 <StyledTableCell align="center">
//                                     <button onClick={() => remove(info.taiKhoan)}><DeleteSweepIcon /></button>
//                                     <button onClick={() => history.push(`/user/${info.taiKhoan}/chinhsuanguoidung`)}><EditIcon /></button>
//                                 </StyledTableCell>

//                             </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <TablePagination
//                 rowsPerPageOptions={[10, 25, 50]}
//                 component="div"
//                 count={listTheater.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//             />
//         </div>

//     );
// }



