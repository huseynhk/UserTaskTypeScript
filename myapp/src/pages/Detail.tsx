import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetSingleUser } from "../api/getRequest";
import { Spinner } from "react-bootstrap";
import { ROUTER } from "../constant/router";
import { UserDetail } from "../interfaces";
import UserDetailCard from "../components/UserCard";

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  const fetchSingleUser = async () => {
    try {
      const response = await GetSingleUser(Number(id));
      setUserDetail(response);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSingleUser();
    }
  }, [id]);

  if (!userDetail) {
    return <Spinner animation="border" />;
  }

  return (
    <div className="d-flex flex-column align-items-center my-5 text-info">
      <button
        style={{ width: "200px", marginTop: "-20px" }}
        className="btn btn-info mb-3"
        onClick={() => navigate(ROUTER.Home)}
      >
        Go Back
      </button>
      <UserDetailCard userDetail={userDetail} />
    </div>
  );
};

export default UserDetailPage;
