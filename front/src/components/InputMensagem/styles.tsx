import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  padding: 1rem;
    width: 100%;
  }
  .padding{
    width: 100%;
    display: flex;
    height: 100%;
    border: 1px solid #c9c9c9;
    padding-right: 0.5rem;
    border-radius: 10px;
    textarea {
        border: none;
    width: 100%;
    height: 95%;
    max-height: 70px;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    resize: none;
    overflow-y: auto;
    :target {
      scroll-margin-top: 0.8em;
    }
    ::-webkit-scrollbar {
      width: 4px; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #ffffff; /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c5c7c7; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */ /* creates padding around scroll thumb */
    }
    :focus {
      outline: none;
    }
  }
`;

export const AreaButtonSend = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
`;
