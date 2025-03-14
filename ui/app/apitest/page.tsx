"use server";

import React from 'react'

const APITestPage = async () => {

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  // const res = await fetch(`${apiURL}/ping`);

  const res = await fetch(`${apiURL}/ping`, {
    headers: {
      "Cache-Control": "no-store", // Prevents caching
    },
  });

  const data = await res.json();

  return (
    <>
      <div>Message From API: {data.status}</div>
    </>
  );
};

export default APITestPage;

