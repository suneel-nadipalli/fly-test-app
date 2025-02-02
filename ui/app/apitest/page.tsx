"use server";

import React from 'react'

const APITestPage = async () => {

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <div>Welcome to the API Test Page</div>
      <div>Message From API: {apiURL}</div>
    </>
  );
};

export default APITestPage;

