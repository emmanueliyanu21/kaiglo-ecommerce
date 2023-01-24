import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import HomePage from "../screen/home";
import store from "../store/store";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaiglo Ecommerce</title>
        <meta name="description" content="Buy things at my store" key="sitelinks" />
        <meta name="google" content="My clothing store" key="notranslate" />
        <link
          rel="canonical"
          href="https://cozy-puppy-0f6c3e.netlify.app/"
          key="canonical"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
