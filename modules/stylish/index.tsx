import styles from "./styles";

const Index = (): JSX.Element => (
  <div css={styles.container}>
    <div css={styles.basic}>Cool Styles</div>
    <div css={styles.combined}>
      With <code>:hover</code>.
    </div>
    <div css={styles.animated(styles.bounce)}>Let&apos;s bounce.</div>
  </div>
);

export default Index;
