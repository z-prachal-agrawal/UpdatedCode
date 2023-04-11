import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css"

function createData(date, name, ship, payment, saleAmt) {
  return { date, name, ship, payment, saleAmt };
}

const rows = [
  createData(
    "16 March,2019",
    "Elvis Presley",
    "Tupelo MS",
    "VISA ⠀•••• 3719",
    "$312.44"
  ),
  createData("16 March,2019", "Paul McCartney" , "London UK",  "VISA ⠀•••• 2574", "$866.44"),
  createData("16 March,2019", "Tom Scholz", "Long Branch UK",
  "VISA ⠀•••• 3719",
  "$312.44"),
  createData("16 March,2019", "Michael Jackson", "Boston MA",
  "VISA ⠀•••• 3219",
  "$222.44"),
  createData("15 March,2019", "Bruce Springsteen", "Gary IN",
  "VISA ⠀•••• 3519",
  "$302.44"),
];

export default function DummyTable() {
  return (
    <TableContainer component={Paper}>
      <Table className="table" size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell className="heading">Date</TableCell>
            <TableCell align="right" className="heading">Name</TableCell>
            <TableCell align="right" className="heading">Ship To</TableCell>
            <TableCell align="right" className="heading">Payment Method</TableCell>
            <TableCell align="right" className="heading">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="pdng" component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell className="pdng" align="right">{row.name}</TableCell>
              <TableCell className="pdng" align="right">{row.ship}</TableCell>
              <TableCell className="pdng" align="right">{row.payment}</TableCell>
              <TableCell className="pdng" align="right">{row.saleAmt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
