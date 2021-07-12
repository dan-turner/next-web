import { GetStaticProps } from "next";
import Stylish from "../components/stylish";
import Layout from "../components/layout";
import i18n from "../translations/stylish";
import { Locale, StylishPage } from "../translations/type";

type Props = {
  content: StylishPage;
};

const Page = ({ content }: Props): JSX.Element => (
  <Layout>
    <h1>{content.coolStyles}</h1>
    <Stylish content={content} />
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const locale: Locale = context.locale as Locale;
  return {
    props: {
      content: i18n(locale),
    },
  };
};

export default Page;
