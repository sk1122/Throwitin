import Head from "next/head";
import First from "../components/home/first";
import Navbar from "../components/Navbar";
import Second from "../components/home/second";
import Third from '../components/home/third'
import Fourth from '../components/home/fourth'
import Fifth from "../components/home/fifth";
import Cta from "../components/home/cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Cta />
      <Footer />
    </div>
  );
}
