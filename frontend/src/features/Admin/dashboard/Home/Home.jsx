// import React from 'react'
// import "./Home.css"
// import { useGetSalonQuery } from './homeApiSlice'

// const Home = () => {

//   const {
//     data: salon,
//     isLoading,
//     isSuccess,
//     isError,
//     error
//   } = useGetSalonQuery(undefined)

//   let content

//   if (isLoading) {
//     content = <h1>Loader</h1>
//   }

//   if (isError) {
//     content = (<><h1 style={{color:"crimson"}}>{error?.data?.message}</h1><button onClick={fetchSalon}>fetch</button></>)
//   }

//   if (isSuccess) {
//     content = (
//       <main className='admin__dashboard__home__main'>
//         <h1 style={{color:"green"}}>Welcome To my Admin Dashboard Home Page</h1>
//       </main>
//     )
//   }

//   return content;
// }

// export default Home


import React from 'react';
import "./Home.css";
import { useGetSalonQuery } from './homeApiSlice';

const Home = () => {
  const { data: salon, isLoading, isError, error, refetch } = useGetSalonQuery();

  const fetchSalon = async() => {
    // Call the refetch function to manually trigger the data fetching
    const hello = await refetch();
    console.log("Hello ",hello)
  };

  let content;

  if (isLoading) {
    content = <h1>Loader</h1>;
  }

  if (isError) {
    content = (
      <>
        <h1 style={{ color: "crimson" }}>{error?.data?.message}</h1>
        <button onClick={fetchSalon}>Retry</button>
      </>
    );
  }

  if (salon) {
    // Display your salon data here
    content = (
      <main className='admin__dashboard__home__main'>
        <h1 style={{ color: "green" }}>Welcome To my Admin Dashboard Home Page</h1>
        <button onClick={fetchSalon}>Fetch</button>
        {/* Render your salon data as needed */}
        <div>{/* Render your salon data here */}</div>
      </main>
    );
  }

  return content;
};

export default Home;


