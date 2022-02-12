import Head from "next/head";
import LeftSideBar from "../components/Home/LeftSideBar";
import MiddleLeftBar from "../components/Home/MiddleLeftBar";
import MiddleRightBar from "../components/Home/MiddleRightBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {/* <div className="w-28"> */}
        <Navigation />
      {/* </div> */}
      <div className="p-4">
        <div className="grid grid-cols-12">
          <div className="col-span-2 hidden lg:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default ">
            <LeftSideBar />
          </div>
          <div className="col-span-12 lg:col-span-10 2xl:col-span-8 w-full md:w-3/4 mx-auto h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default scroll-ml-5">
            <div className="grid gap-5 grid-cols-12">
              <div className="col-span-12 xl:col-span-8 ">
                <MiddleLeftBar />
              </div>
              <div className="col-span-4 hidden xl:block">
                <MiddleRightBar />
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden 2xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default ">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
