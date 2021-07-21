import { GetStaticProps } from "next";
import Stylish from "../components/stylish";
import Layout from "../components/layout";
import { getLayout, LayoutContent } from "../contentful/layout";
import { getStylish, StylishPageContent } from "../contentful/stylish";
import config from "../config";

type Props = {
  content: {
    stylish: StylishPageContent;
    layout: LayoutContent;
  };
};

const Page = ({ content: { stylish, layout } }: Props): JSX.Element => (
  <Layout content={layout}>
    <h1>{stylish.coolStyles}</h1>
    <Stylish content={stylish} />
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async (context) => ({
  props: {
    content: {
      stylish: await getStylish(context.locale),
      layout: await getLayout(context.locale, config.layout),
    },
  },
});

export default Page;
