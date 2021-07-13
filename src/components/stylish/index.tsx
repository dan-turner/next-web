import Link from "next/link";
import { StylishPage } from "../../translations/type";
import styles from "./styles";

type Props = {
  content: StylishPage;
};

const Index = ({ content }: Props): JSX.Element => (
  <div css={styles.container}>
    <div css={styles.basic}>{content.coolStyles}</div>
    <div css={styles.combined}>{content.withHover}</div>
    <div css={styles.animated(styles.bounce)}>{content.letsBounce}</div>
    <Link href="/" passHref>
      <a>{content.home}</a>
    </Link>
  </div>
);

export default Index;
