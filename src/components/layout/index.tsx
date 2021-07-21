/* eslint-disable @next/next/no-img-element */
import { Heart } from "@emotion-icons/fa-solid/Heart";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { LayoutContent } from "../../contentful/layout";
import Markdown from "../common/markdown";
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

const Layout = ({ children, content }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <div css={container}>
      <header>
        <Image
          src={content.logo.url}
          width={150}
          height={(content.logo.height / content.logo.width) * 150}
          alt={content.brand}
        />
      </header>
      <div css={body}>{children}</div>
      <footer css={styles.footer}>
        <Markdown>{content.footer}</Markdown> <Heart css={icon} />
        <ul>
          <li>
            {/* eslint-disable i18next/no-literal-string */}
            <Link href={router.route} locale="en-AU">
              <a>English</a>
            </Link>
          </li>
          <li>
            <Link href={router.route} locale="es-MX">
              <a>Spanish</a>
            </Link>
            {/* eslint-enable i18next/no-literal-string */}
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
/* eslint-enable @next/next/no-img-element */
