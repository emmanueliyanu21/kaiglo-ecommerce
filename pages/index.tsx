import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import HomePage from "../screen/home";
import store from "../store/store";

export default function Home() {
  return (
    <>
      <Head>
        <title>Total-store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Buy things at my store" key="sitelinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </main>
    </>
  );
}
