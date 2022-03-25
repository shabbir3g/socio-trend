import React from 'react';
import Navigation from '../components/Share/Navigation';
import AllFriends from '../components/FriendsCom/AllFriends';
import Head from 'next/head';

const friends = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navigation />
      <div className="pt-2 w-full ">
        <div className="max-w-5xl w-full mx-auto">
          <AllFriends />
        </div>
      </div>
    </>
  );
};

export default friends;
