import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CustomModal from "../components/customModal";
import SetCard from "../components/setCard";
import UserCard from "../components/userCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [stickerSet, setStickerSet] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedSet, setSelectedSet] = useState({ items: [], index: null });
  const photosData = JSON.parse(localStorage.getItem("photos"));

  useEffect(() => {
    getDataFromLocal();
  }, []);

  useEffect(() => {
    if (stickerSet?.length < 1) setModalShow(false);
  }, [stickerSet?.length]);

  const getDataFromLocal = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const stickerSets = JSON.parse(localStorage.getItem("stickerSets"));
    setStickerSet(stickerSets);
    setUsers(users);
  };

  const pasteSticker = () => {
    setSelectedSet({ items: [], index: null });
    const tempUsers = users.map((user) => ({
      ...user,
      photoId:
        user.photoId > 0
          ? user.photoId
          : selectedSet?.items.find((photo) => photo.user_id === user.id)?.id ||
            null,
    }));
    setUsers(tempUsers);
    localStorage.setItem("users", JSON.stringify(tempUsers));
    const diffPhotos = photosData.filter(
      (o1) => selectedSet?.items.filter((o2) => o2.id === o1.id).length === 0
    );
    localStorage.setItem("photos", JSON.stringify(diffPhotos));
    stickerSet.splice(selectedSet.index, 1);
    localStorage.setItem("stickerSets", JSON.stringify(stickerSet));
  };

  return (
    <div className="d-flex">
      <CustomModal
        show={modalShow}
        title={
          selectedSet?.items.length === 0
            ? "DAILY STICKER SETS"
            : "STICKER SET HAS OPENED YOU HAVE  6 NEW STICKERS"
        }
        title2={
          selectedSet?.items.length === 0
            ? "YOU HAVE 3 STICKER SETS ON OPEN"
            : " "
        }
        onHide={() => {
          setModalShow(false);
          setSelectedSet({ items: [], index: null });
        }}
      >
        <div className="justify-content-evenly row">
          {selectedSet?.items.length === 0 ? (
            stickerSet?.map((item, key) => {
              return (
                <div
                  key={key}
                  className="col-md-3 col-sm-6"
                  onClick={() => setSelectedSet({ items: item, index: key })}
                >
                  <SetCard></SetCard>
                </div>
              );
            })
          ) : (
            <>
              {selectedSet?.items.map((item, key) => {
                const user = users?.find((user) => user.id === item.user_id);
                return (
                  <div key={key} className="col-lg-2 col-md-3 col-sm-6">
                    <UserCard
                      userName={`${user?.first_name} ${user?.last_name}`}
                      month={user?.month}
                      id={user?.id}
                      photoId={item.id}
                      position={user?.position}
                    />
                  </div>
                );
              })}
              <div className="d-flex justify-content-center">
                <Button onClick={() => pasteSticker()}>
                  Paste to Your Album
                </Button>
              </div>
            </>
          )}
        </div>
      </CustomModal>
      <div className="card m-auto min-vh-100 w-50">
        <div className="d-flex justify-content-center">
          <img src="/facebook.jpg" className="w-75" />
        </div>
        <div className="align-self-md-end row">
          <h1>Sticker Album</h1>
        </div>
      </div>
      <div className="rightButton">
        <button
          type="button"
          className="btn btn-lg"
          onClick={() => navigate("album/1/Web")}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
      {stickerSet?.length > 0 && (
        <div className="getStickerButton">
          <Button
            variant="primary"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Get Daily Sticker Set
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
