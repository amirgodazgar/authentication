import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  padding: 2rem;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
    width: 100%;
  }

  .agreement-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .agreement-text-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
  }

  .title-box {
    margin-bottom: 2rem;
  }

  .subtitle {
    margin-right: 0.7rem;
  }

  .link {
    cursor: pointer;
  }
`;
