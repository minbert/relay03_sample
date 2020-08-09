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
import { Link } from 'react-router-dom';

const columns = [
  { id: "post_id", label: "No.", minWidth: 10 },
  { id: "title", label: "Title", minWidth: 200 },
  {
    id: "author",
    label: "Author",
    minWidth: 20,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const response = {
  data:{
    "board_id":1, // 게시판 id(tab 번호)
    "post":[{
      "post_id": 3,
      "title": "Boostcamp에 오신 것을 환영합니다",
      "author": "김계란",
      "date": "2020-08-10 15:32:10" 
    },{
      "post_id": 2,
      "title": "BBQ 앱이용하면 치킨 11000원이랍니다!!!",
      "author": "BBQ",
      "date": "2020-08-09 15:32:10" 
    },{
      "post_id": 1,
      "title": "오늘의 미션은 무엇일까요?",
      "author": "김미션",
      "date": "2020-08-08 15:32:10" 
    }]
  } 
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function StickyHeadTable() {
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
            {response["data"]["post"].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.id === 'title' ? <Link to={`/board/${row.post_id}`}>{value}</Link> : value}
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
        count={response["data"]["post"].length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}