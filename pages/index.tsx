import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "../modules/home";
import Layout from "../modules/layout";

const Index = (): JSX.Element => (
  <Layout>
    <Home />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!)),
  },
});

export default Index;
