import type {NextPage} from "next";
import Head from "next/head";
import {RandomFox} from "../components/RandomFox";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Platzi</title>
        <meta name='description' content='Generated by Platzi' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello, Platzi</h1>
        <RandomFox />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
