import { GetStaticProps } from "next";
import config from "../config";
import Home from "../components/home";
import Layout from "../components/layout";
import { getHome, HomePageContent } from "../contentful/home";
import { getLayout, LayoutContent } from "../contentful/layout";

type Props = {
  content: {
    home: HomePageContent;
    layout: LayoutContent;
  };
};

const Index = ({ content: { home, layout } }: Props): JSX.Element => (
  <Layout content={layout}>
    <Home content={home} />
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async (context) => ({
  props: {
    content: {
      home: await getHome(context.locale),
      layout: await getLayout(context.locale, config.layout),
    },
  },
});

export default Index;
