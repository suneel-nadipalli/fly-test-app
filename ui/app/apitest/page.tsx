"use server";

import React from 'react'

const APITestPage = async () => {

  // const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const apiURL = "https://test-api-small.fly.dev";

  const res = await fetch(`${apiURL}/ping`);

  const data = await res.json();

  console.log(data);

  return (
    <>
      <div>Welcome to the API Test Page</div>
      <div>Message From API: {data.status}</div>
    </>
  )
}

export default APITestPage