import Head from 'next/head';
import React from 'react';
import DashboardSideBar from '../../components/Dashboard/DashboardSideBar';

const dashboard = () => {

    

    return (
        <div>
            <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
        <div className='flex'>
            <div>
                <DashboardSideBar/>
            </div>
           <div>
               <h1>hello</h1>
           </div>
        </div>
        </div>
    );
};

export default dashboard;