import styled from "styled-components"

export const BannerImage = styled.div`
background: var(--primary);
display: flex;
justify-content: center;
margin-bottom: 1em;
width: 100%;
> * {
  width: 50%;
}

picture:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(
    to right,
    var(--primary),
    transparent 40%,
    var(--primary)
  );
}
`