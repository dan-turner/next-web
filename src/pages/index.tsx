import { GetStaticProps } from "next";
import { HomePage, Locale } from "../translations/type";
import Home from "../components/home";
import Layout from "../components/layout";
import i18n from "../translations/home";

type Props = {
  content: HomePage;
};

const Index = ({ content }: Props): JSX.Element => (
  <Layout>
    <Home content={content} />
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

export default Index;
