import { Heart } from "@emotion-icons/fa-solid/Heart";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import styles from "./styles";

type Props = {
  children: ReactNode;
};

const container = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const content = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const icon = css`
  color: Red;
  width: 14pt;
  margin: 0 0.5rem;
`;

const Layout = ({ children }: Props): JSX.Element => (
  <div css={container}>
    <div css={content}>{children}</div>
    <footer css={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with <Heart css={icon} /> by New Markets
      </a>
    </footer>
  </div>
);

export default Layout;
