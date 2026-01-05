import { useState } from 'react';
import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <main>
        <Outlet />
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
