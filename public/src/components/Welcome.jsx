import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robotmy.gif";

const Welcome = ({ currentUser }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userDataString = localStorage.getItem('chat-app-key');
    if (!userDataString) {
      setUserName(""); // or redirect to login
      return;
    }
    const userData = JSON.parse(userDataString);
    setUserName(userData?.username || "");
  }, []);

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName || currentUser?.username || "User"}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
