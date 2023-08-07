import React from "react";
// import styled from "styled-components";
import Robot from "../assets/robot.gif";
// import "../components/Contacts.css";
export default function Welcome({ currentUser }) {
  //   const [userName, setUserName] = useState("");
  //   useEffect(() => {
  //     const a = async () => {
  //       setUserName(
  //         await JSON.parse(
  //           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //         ).username
  //       );
  //     };
  //     a();
  //   }, []);

  return (
    <div id="container2">
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </div>
  );
}

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   flex-direction: column;
//   img {
//     height: 20rem;
//   }
//   span {
//     color: #4e0eff;
//     // width: 60%;
//   }
//   h1,
//   h3 {
//     text-align: center;
//     // font-size: 100%;
//   }
// `;
