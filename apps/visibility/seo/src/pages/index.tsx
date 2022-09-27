import { log } from "logger";
import Head from "next/head";
import { CounterButton, NewTabLink } from "ui";

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div className="container">
      <Head>
        <title>Store | Kitchen Sink</title>
      </Head>
      <h1 className="title">
        SEO PAGE
      </h1>
      <CounterButton />
    </div>
  );
}
