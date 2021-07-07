import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Global } from "@emotion/react";
import styles from "../modules/layout/styles";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Global styles={styles.global} />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);
export default appWithTranslation(MyApp);
