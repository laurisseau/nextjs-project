'use client';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Provider';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const { state } = useContext(Context);
  const { userInfo } = state;

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this prompt?'
    );

    if (hasConfirmed) {
      try {
        const { data } = await axios.delete(`/api/prompt/${post._id}`);

        const filteredPosts = posts.filter((el) => {
          el._id !== data._id;
        });

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userInfo.sub}/posts`);
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (userInfo) {
      fetchPost();
    }
  }, [userInfo]);

  return (
    <Profile
      name={userInfo ? userInfo.preferred_username : ''}
      desc={'Welcome to your personalized profile page.'}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
