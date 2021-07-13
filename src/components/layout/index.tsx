import { Heart } from "@emotion-icons/fa-solid/Heart";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { LayoutContent } from "translations/type";
import styles from "./styles";

type Props = {
  children: ReactNode;
  content: LayoutContent;
};

const container = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const body = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const icon = css`
  color: Red;
  width: 14pt;
  margin: 0 0.5rem;
`;

const Layout = ({ children, content }: Props): JSX.Element => (
  <div css={container}>
    <div css={body}>{children}</div>
    <footer css={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.footer} <Heart css={icon} />
      </a>
    </footer>
  </div>
);

export default Layout;
