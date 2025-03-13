"use server";

import React from 'react'

const APITestPage = async () => {

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiURL}/ping`);

  const data = await res.json();

  return (
    <>
      <div>Welcome to the API Test Page - API Fix Pt 2!</div>
      <div>Message From API: {data.status}</div>
    </>
  );
};

export default APITestPage;

