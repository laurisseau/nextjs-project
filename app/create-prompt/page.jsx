'use client';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Form from '@components/Form';
import { Context } from '../Provider';

const CreatePrompt = () => {
  const { state } = useContext(Context);
  const { userInfo } = state;
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const CreatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post('/api/prompt/new', {
        prompt: post.prompt,
        userId: userInfo.sub,
        tag: post.tag,
      });

      if (response) {
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={CreatePrompt}
      />
    </div>
  );
};

export default CreatePrompt;
