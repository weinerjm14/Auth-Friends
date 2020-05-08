import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

export function FriendList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/friends", localStorage.getItem("token"))
      .then(res => setFriends(res.data))
      .catch(err => console.log("error getting data:", err));
  }, []);
  return (
    <section className="flcontainer">
      <h2>Your Friends</h2>
      {friends ? (
        friends.map(friend => {
          return (
            <section className="friend" key={friend.id}>
              <h3>{friend.name}</h3>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </section>
          );
        })
      ) : (
        <h2>Finding Friends</h2>
      )}
    </section>
  );
}
