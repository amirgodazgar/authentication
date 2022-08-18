import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  padding: 2rem;
  border-radius: 68% 32% 55% 45% / 43% 31% 69% 57%;
  background-color: #e5f4fa;

  .profile-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 100%;
  }

  .avatar,
  .btn {
    margin-bottom: 1rem;
  }

  .title-box {
    margin-bottom: 2rem;
  }

  .subtitle {
    margin-right: 0.7rem;
  }
`;
