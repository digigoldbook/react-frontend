import React from "react";
import Layout from "../../Dashboard/include/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Sample user data
const users = [
  { id: 1, fullName: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, fullName: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, fullName: "Alice Johnson", email: "alice@example.com", role: "Viewer" },
  { id: 4, fullName: "Bob Brown", email: "bob@example.com", role: "Admin" },
  { id: 5, fullName: "Charlie Davis", email: "charlie@example.com", role: "Editor" },
  { id: 6, fullName: "Emily Clark", email: "emily@example.com", role: "Viewer" },
  { id: 7, fullName: "David Wilson", email: "david@example.com", role: "Admin" },
  { id: 8, fullName: "Sophia Lee", email: "sophia@example.com", role: "Editor" },
  { id: 9, fullName: "Michael Harris", email: "michael@example.com", role: "Viewer" },
  { id: 10, fullName: "Olivia Young", email: "olivia@example.com", role: "Admin" },
];

const UserPage = () => {
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default UserPage;
