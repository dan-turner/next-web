import { GetStaticProps } from "next";
import { HomePage, LayoutContent, Locale } from "../translations/type";
import Home from "../components/home";
import Layout from "../components/layout";
import i18nHome from "../translations/home";
import i18nLayout from "../translations/layout";

type Props = {
  content: {
    home: HomePage;
    layout: LayoutContent;
  };
};

const Index = ({ content: { home, layout } }: Props): JSX.Element => (
  <Layout content={layout}>
    <Home content={home} />
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const locale: Locale = context.locale as Locale;
  return {
    props: {
      content: {
        home: i18nHome(locale),
        layout: i18nLayout(locale),
      },
    },
  };
};

export default Index;
