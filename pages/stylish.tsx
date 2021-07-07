import { useRouter } from "next/router";

import Stylish from "../modules/stylish";
import Layout from "../modules/layout";

const Page = (): JSX.Element => {
  const { locale } = useRouter();
  return (
    <Layout>
      <h1>{locale}</h1>
      <Stylish />
    </Layout>
  );
};

export default Page;
