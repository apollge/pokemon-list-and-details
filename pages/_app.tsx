import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../theme/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Luxor Frontend</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
