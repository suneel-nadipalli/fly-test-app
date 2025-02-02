"use server";

import React from 'react'

const APITestPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ping`);

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