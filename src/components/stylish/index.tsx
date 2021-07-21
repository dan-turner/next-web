import { StylishPageContent } from "../../contentful/stylish";
import styles from "./styles";

type Props = {
  content: StylishPageContent;
};

const Index = ({ content }: Props): JSX.Element => (
  <div css={styles.container}>
    <div css={styles.basic}>{content.coolStyles}</div>
    <div css={styles.combined}>{content.hover}</div>
    <div css={styles.animated(styles.bounce)}>{content.animated}</div>
  </div>
);

export default Index;
