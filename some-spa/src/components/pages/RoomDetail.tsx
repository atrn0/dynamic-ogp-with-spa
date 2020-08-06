import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const RoomDetail: React.FC = function () {
  const { id } = useParams();

  useEffect(() => {
    window.history.replaceState("", "", `/room/${id}`);
  }, [id]);

  return (
    <>
      <p>{id}</p> <Link to="/room">戻る</Link>
    </>
  );
};
