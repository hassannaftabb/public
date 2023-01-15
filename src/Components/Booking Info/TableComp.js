import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormControl, MenuItem, Select } from "@mui/material";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TableComp = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);

  const handleChange = (event) => {
    setAccount(event.target.value);
  };
  return (
    <div className="w-[90vw] lg:w-[900px] whitespace-nowrap">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#314668" }}>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "700", color: "white" }}
              >
                Bank
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "700", color: "white" }}
                align="center"
              >
                A/C Number
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "700", color: "white" }}
                align="center"
              >
                IFFC Code
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "700", color: "white" }}
                align="center"
              >
                Branch
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "700", color: "white" }}
                align="center"
              >
                Budget Head
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "700", color: "white" }}
                align="center"
              >
                Budget No.
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                component="th"
                scope="row"
              >
                <div>
                  <FormControl
                    sx={{ width: 89, height: 33 }}
                    className="focus:border-none bg-[white] w-[89px] h-[33px]"
                  >
                    <Select
                      value={account}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className="w-[89px] h-[33px]"
                      defaultValue="1"
                    >
                      {options?.map((el) => (
                        <MenuItem value={el}>{el}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                29/12/2011
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                Indian Citizen & Indian Student
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                03
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                +91 98XXXX
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                +91 98XXXX
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                component="th"
                scope="row"
              >
                <div>
                  <FormControl
                    sx={{ width: 89, height: 33 }}
                    className="focus:border-none bg-[white] w-[89px] h-[33px]"
                  >
                    <Select
                      value={account}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className="w-[89px] h-[33px]"
                      defaultValue="1"
                    >
                      {options?.map((el) => (
                        <MenuItem value={el}>{el}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                29/12/2011
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                Indian Citizen & Indian Student
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                03
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                +91 98XXXX
              </TableCell>
              <TableCell
                sx={{ fontSize: "16px", fontWeight: "500", color: "#1E1E1E80" }}
                align="center"
              >
                +91 98XXXX
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
