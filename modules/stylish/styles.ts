import { css, keyframes } from "@emotion/react";
import { Keyframes, SerializedStyles } from "@emotion/serialize";

const container = css`
  padding: 3rem 2rem;
  margin: 0;
  background: papayawhip;
  min-height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
`;

const basic = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

const hover = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;

const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

const combined = css`
  ${basic};
  ${hover};
  & code {
    background-color: linen;
  }
`;

const animated = (animation: Keyframes): SerializedStyles => css`
  ${basic};
  ${hover};
  & code {
    background-color: linen;
  }
  animation: ${animation} 0.2s infinite ease-in-out alternate;
`;

const styles = {
  animated,
  basic,
  bounce,
  combined,
  container,
  hover,
};

export default styles;
