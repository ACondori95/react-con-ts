import {LazyImage} from "@/components/RandomFox";
import {NextPage} from "next";
import Head from "next/head";
import {useState} from "react";
import type {MouseEventHandler} from "react";
import {random} from "lodash";

// generate simple unique id
const generateId = () => random(1, 123);

// random number from 1 to 122
const myRandom = () => Math.floor(Math.random() * 122) + 1;

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomFox.ca/images/${myRandom()}.jpg`,
    };

    setImages([...images, newImageItem]);
    window.plausible("Signup");
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <script
          defer
          data-domain='domain1.com,domain2.com,domain3.com'
          src='https://plausible.io/js/script.js'></script>
      </Head>

      <main>
        <div className='m-4'>
          <button
            onClick={addNewFox}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            Add new fox
          </button>
        </div>
        {images.map(({id, url}) => (
          <div className='p-4' key={id}>
            <LazyImage
              src={url}
              width={320}
              height='auto'
              className='mx-auto rounded-md bg-gray-300'
              onClick={() => {
                console.log("holi!");
              }}
            />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
