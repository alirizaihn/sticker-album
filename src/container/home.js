import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(null);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const teamsFromLocal = JSON.parse(localStorage.getItem("teams"));
    setTeams(teamsFromLocal);
  }, []);

  useEffect(() => {
    if (currentPage >= 0 && currentPage !== null) {
      navigate(`${teams[currentPage].id}/${teams[currentPage].slug_name}`);
    } else if (currentPage < 0) {
      navigate("/");
    }
  }, [currentPage]);
  return (
    <>
      <div className="justify-content-center p-5">
        <Outlet />
        <div className="leftButton">
          <button
            type="button"
            className="btn btn-lg"
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <FaArrowLeft />
          </button>
        </div>
        {currentPage !== teams.length - 1 && (
          <div className="rightButton">
            <button
              type="button"
              className="btn btn-lg"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
