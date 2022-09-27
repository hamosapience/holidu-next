import Head from "next/head";
import { CounterButton, NewTabLink } from "ui";

export default function Store() {
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
