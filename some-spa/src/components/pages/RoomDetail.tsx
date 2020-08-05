import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const RoomDetail: React.FC = function () {
  const { id } = useParams();

  useEffect(() => {
    window.history.replaceState("", "", `/room/${id}`);
  }, [id]);

  return <p>{id}</p>;
};
