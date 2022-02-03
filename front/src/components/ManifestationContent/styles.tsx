import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #dddddd;
  border-radius: 5px;
  border-right: 1px solid white;
  cursor: pointer;
  color: black;
  font-size: 20px;
  margin-right: 5px;
  transition: 0.5s all ease;
  padding: 10px;
  position: relative;
  display: flex;
  min-height: 75px;
  .icon {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  :hover {
    padding-left: 1rem;
    background-color: #ffffff;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
    color: #454545;
    background-color: transparent;
    border-radius: 5px;
  }
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin-right: 10px;
    font-size: 16px;
    color: black;
    margin-left: -10px;
    border-radius: 0px;
  }
  .dados {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .box1 {
    width: 50%;
  }
  .box2 {
    width: 92%;
    span {
      width: 500px;
      display: flex;
      justify-content: flex-start;
      margin: 0;
      font-size: 19px;
    }
  }
  .box3 {
    position: absolute;
    right: 0;
    width: 130px;
    span {
      width: 100%;
      font-size: 18px;
    }
  }
`;
