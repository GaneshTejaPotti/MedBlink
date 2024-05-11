'use client';
import React from 'react';

const PostDb = () => {
  const saveRetailer = ({ _id, retailerId, password }) => {
    console.log(_id, retailerId, password);
  };

  return { saveRetailer };
};

export default PostDb;
