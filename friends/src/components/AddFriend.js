import React, { useState } from "react";

import { axiosWithAuth } from "../util/axiosWithAuth";

export function AddFriend(props) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  const addNewFriend = e => {
    e.preventDefault();
    console.log(newFriend);
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log("new friend res:", res);
        props.history.push("/friendslist");
      })
      .catch(err => {
        console.log("Err is: ", err);
      });
  };

  return (
    <section className="newFriendForm">
      <form onSubmit={addNewFriend}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <br />
        <label> Age: </label>
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <br />
        <button>Add New Friend</button>
      </form>
    </section>
  );
}
