import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto auto; */
  width: 60%;
  height: 40rem;
  /* border: 1px solid; */

  .paper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .field {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 50%;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  .image {
    height: 100%;
    width: 100%;
  }
  .img {
    height: 100%;
    width: 100%;
    background-origin: border-box;
    background-repeat: no-repeat;
  }
  .cover {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
  }
`;
