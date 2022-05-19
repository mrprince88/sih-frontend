import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  IconButton,
  Card,
  CardHeader,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  Button,
} from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { format } from "timeago.js";

export default function DataTable({ postData }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  console.log("postData", postData);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - postData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ paddingRight: "25px", paddingLeft: "25px", height: "100vh" }}>
      <TableContainer component={Card} style={{ marginBottom: "15px", marginTop: "30px" }}>
        <CardHeader title="Records" style={{ textAlign: "center" }} />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ background: "black" }}>
            <TableRow>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                S.no
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                Farmer Name
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                City
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                Phone Number
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                Plant Name
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                Disease
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                Request Time
              </TableCell>
              <TableCell style={{ fontSize: "17px", fontWeight: "800", color: "white" }}>
                Image
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postData &&
              (rowsPerPage > 0
                ? postData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : postData
              ).map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell style={{ fontSize: "17px", width: 40 }}>
                    {page * rowsPerPage + index}
                  </TableCell>
                  <TableCell style={{ fontSize: "17px" }}>{row.farmer.name}</TableCell>
                  <TableCell style={{ fontSize: "17px", width: 220 }}>{row.farmer.city}</TableCell>
                  <TableCell style={{ fontSize: "17px", width: 220 }}>{row.farmer.phone}</TableCell>
                  <TableCell style={{ fontSize: "17px", width: 220 }}>{row.post.title}</TableCell>
                  <TableCell style={{ fontSize: "17px", width: 220 }}>
                    {row.post.description}
                  </TableCell>
                  <TableCell style={{ fontSize: "17px", width: 220 }}>
                    {format(row.post.createdAt)}
                  </TableCell>
                  <TableCell style={{ fontSize: "17px", width: 220 }}>
                    <a
                      href={(new Image().src = row.post.image)}
                      download="postImage"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">Download</Button>
                    </a>
                  </TableCell>
                </TableRow>
              ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 50, { label: "All", value: -1 }]}
                colSpan={8}
                count={postData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
