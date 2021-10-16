import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  color: #ffffff;
  width: 100%;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  img {
    width: 600px;
    height: 90vh;
    object-fit: cover;
  }
  flex: 1;
  overflow: hidden;
  z-index: 2;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
