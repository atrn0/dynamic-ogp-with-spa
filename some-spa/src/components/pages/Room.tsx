import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Room() {
  const [roomId, setRoomId] = useState("");

  return (
    <div>
      <h2>roomIdを入力</h2>
      <input
        type={"text"}
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <Link to={`/room/${roomId}`}>グループページへ</Link>
    </div>
  );
}
