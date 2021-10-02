import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import SettingsIcon from '@material-ui/icons/Settings'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';
import '../assets/listuser.scss'
import { useHistory } from 'react-router';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
    stt: {
        width: 10,
    },
    names: {
        width: 300
    }



});



export default function ListUser({ listInfoUser = [], remove, searchUser }) {
    const history = useHistory()
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='form_ListUser'>
            <button type="button" class="btn_addUser "onClick={() => history.push(`/user/adduser`)} >Thêm người dùng</button>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Tìm kiếm</span>
                </div>
                <input onChange={(e) => searchUser(e.target.value)} type="text" className="form-control" placeholder="Họ tên" aria-label="Username" aria-describedby="basic-addon1" />
            </div>


            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={classes.stt}>STT</StyledTableCell>
                            <StyledTableCell className={classes.names} align="center">Tên tài khoản</StyledTableCell>
                            <StyledTableCell align="center">Mật khẩu</StyledTableCell>
                            <StyledTableCell align="center">Họ tên</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Số điện thoại</StyledTableCell>
                            <StyledTableCell className={classes.icons} align="center"><SettingsIcon /></StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listInfoUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((info, idx) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell component="th" scope="row">
                                    {idx + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{info.taiKhoan}</StyledTableCell>
                                <StyledTableCell align="center">{info.matKhau}</StyledTableCell>
                                <StyledTableCell align="center">{info.hoTen}</StyledTableCell>
                                <StyledTableCell align="center">{info.email}</StyledTableCell>
                                <StyledTableCell align="center">{info.soDt}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <button onClick={() => remove(info.taiKhoan)}><DeleteSweepIcon /></button>
                                    <button onClick={() => history.push(`/admin/${info.taiKhoan}/chinhsuanguoidung`)}><EditIcon /></button>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={listInfoUser.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>

    );
}


