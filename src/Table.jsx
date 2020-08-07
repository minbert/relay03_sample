import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';

const columns = [
  { id: 'number', label: 'No.', minWidth: 10 },
  { id: 'title', label: 'Title', minWidth: 200 },
  {
    id: 'author',
    label: 'Author',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 30,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(number, title, author, date) {
  return { number, title, author, date };
}

const rows = [
  createData(1 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(2 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(3 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(4 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(5 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(6 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(7 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(8 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(9 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(10 , '부스트캠프 스타트', '관리자', '20-08-07'),
  createData(11 , '부스트캠프 스타트', '관리자', '20-08-07'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const preventDefault = (event) => event.preventDefault();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                            <TableCell key={column.id} align={column.align}>
                                {column.id === 'title' ? <Link href="#" onClick={preventDefault}>{value}</Link> : value}
                            </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}