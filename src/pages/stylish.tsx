import { GetStaticProps } from "next";
import Stylish from "../components/stylish";
import Layout from "../components/layout";
import i18nStylish from "../translations/stylish";
import { LayoutContent, Locale, StylishPage } from "../translations/type";
import i18nLayout from "../translations/layout";

type Props = {
  content: {
    stylish: StylishPage;
    layout: LayoutContent;
  };
};

const Page = ({ content: { stylish, layout } }: Props): JSX.Element => (
  <Layout content={layout}>
    <h1>{stylish.coolStyles}</h1>
    <Stylish content={stylish} />
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const locale: Locale = context.locale as Locale;
  return {
    props: {
      content: {
        stylish: i18nStylish(locale),
        layout: i18nLayout(locale),
      },
    },
  };
};

export default Page;
