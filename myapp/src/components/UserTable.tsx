import React from "react";
import { Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/router";
import { UserTableProps } from "../interfaces";


const UserTable: React.FC<UserTableProps> = ({ datas, getRoleStyle }) => {
  const navigate = useNavigate();

  return (
    <Table
      striped
      bordered
      hover
      style={{ borderRadius: "8px", overflow: "hidden" }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Role</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.age}</td>
            <td className="fw-bold" style={getRoleStyle(user.role)}>
              {user.role}
            </td>

            <td>
              <FaEye
                size={30}
                color="blue"
                className="eye-icon"
                onClick={() => navigate(`${ROUTER.Detail}/${user.id}`)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
