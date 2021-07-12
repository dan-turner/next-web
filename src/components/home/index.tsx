import Head from "next/head";
import Link from "next/link";
import styles from "./styles";
import { HomePage } from "../../translations/type";

type Props = {
  content: HomePage;
};

const Index = ({ content }: Props): JSX.Element => (
  <div css={styles.container}>
    <Head>
      <title>{content.head.title}</title>
      <meta name="description" content={content.head.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main css={styles.main}>
      <h1 css={styles.title}>{content.heading}</h1>

      <p css={styles.description}>{content.description}</p>

      <div css={styles.grid}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Link href="/stylish" passHref>
          <a css={styles.card}>
            <h2>{content.cards.styling.name}</h2>
            <p>{content.cards.styling.description}</p>
          </a>
        </Link>

        <a href="https://nextjs.org/docs" css={styles.card}>
          <h2>{content.cards.documentation.name}</h2>
          <p>{content.cards.documentation.description}</p>
        </a>

        <a href="https://nextjs.org/learn" css={styles.card}>
          <h2>{content.cards.learn.name}</h2>
          <p>{content.cards.learn.description}</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          css={styles.card}
        >
          <h2>{content.cards.examples.name}</h2>
          <p>{content.cards.examples.description}</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          css={styles.card}
        >
          <h2>{content.cards.deploy.name}</h2>
          <p>{content.cards.deploy.description}</p>
        </a>
      </div>
    </main>
  </div>
);

export default Index;
