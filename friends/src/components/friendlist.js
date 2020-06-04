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
  const removeFriend = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/friends/${id}`, localStorage.getItem("token"))
      .then(res => setFriends(res.data))
      .catch(err => console.log("Error removing friend:", err));
  };

  return (
    <div>
      <h2>Your Friends</h2>
      <section className="flcontainer">
        {friends ? (
          friends.map(friend => {
            return (
              <section className="friend" key={friend.id}>
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                <button onClick={e => removeFriend(e, friend.id)}>
                  Remove
                </button>
              </section>
            );
          })
        ) : (
          <h2>Finding Friends</h2>
        )}
      </section>
    </div>
  );
}
