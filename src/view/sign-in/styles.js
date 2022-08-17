import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: #dddd; */
  width: 70%;
  height: 40%;
  padding: 2rem;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
  }

  .forgot-password-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .subtitle {
    margin-right: 0.7rem;
  }
  .link {
    cursor: pointer;
  }
`;
