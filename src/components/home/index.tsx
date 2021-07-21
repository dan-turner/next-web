import Head from "next/head";
import styles from "./styles";
import { HomePageContent } from "../../contentful/home";
import RichText from "../common/rich-text";
import { NextAnchor } from "../common/next-anchor";

type Props = {
  content: HomePageContent;
};

const Index = ({ content }: Props): JSX.Element => (
  <div css={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main css={styles.main}>
      <h1 css={styles.title}>{content.heading}</h1>

      <p css={styles.description}>{content.description}</p>

      <div css={styles.grid}>
        {content.cards.map((c) => (
          <NextAnchor key={c.link} href={c.link}>
            <RichText document={c.content} />
          </NextAnchor>
        ))}
      </div>
    </main>
  </div>
);

export default Index;
