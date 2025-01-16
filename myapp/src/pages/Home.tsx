import React, { useState, useEffect } from "react";
import { GetDatas } from "../api/getRequest";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import UserTable from "../components/UserTable";
import { User } from "../interfaces";

const Manager: React.FC = () => {
  const [datas, setDatas] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleData = async () => {
    setLoading(true);
    try {
      const response = await GetDatas();
      setDatas(response.users);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load users!", {
        autoClose: 1500,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const getRoleStyle = (
    role: "admin" | "moderator" | "user"
  ): React.CSSProperties => {
    switch (role) {
      case "admin":
        return { color: "blue" };
      case "moderator":
        return { color: "red" };
      case "user":
        return { color: "green" };
      default:
        return {};
    }
  };

  return (
    <div className="text-center px-5 py-3">
      <h2 className="mb-3" style={{ color: "#8ff3fe" }}>
        Users Table
      </h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <UserTable datas={datas} getRoleStyle={getRoleStyle} />
      )}
    </div>
  );
};

export default Manager;
