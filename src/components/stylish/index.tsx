import Link from "next/link";
import { StylishPage } from "../../translations/type";
import styles from "./styles";

type Props = {
  content: StylishPage;
};

const Index = ({ content }: Props): JSX.Element => (
  <div css={styles.container}>
    <div css={styles.basic}>{content.coolStyles}</div>
    <div css={styles.combined}>
      With <code>:hover</code>.
    </div>
    <div css={styles.animated(styles.bounce)}>Let&apos;s bounce.</div>
    <Link href="/" passHref>
      <a>Home</a>
    </Link>
  </div>
);

export default Index;
