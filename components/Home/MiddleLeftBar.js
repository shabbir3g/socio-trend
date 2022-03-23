import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostSkeleton from '../Loaders/PostSkeleton';
import CreatePost from './CreatePost';
import SinglePost from './SinglePost';

const MiddleLeftBar = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const user = useSelector((state) => state.states.user);

  useEffect(() => {
    axios.get(`/api/user?email=${user?.email}`).then((data) => {
      setUserData(data?.data);
    });
  }, [user?.email]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/post`).then((data) => {
      setPosts(data?.data);
      setDeletePost(false);
      setNewPost(false);
      setLoading(false);
    });
  }, [user?.email, isLike, deletePost, newPost]);

  const shuffle = (array) => {
    return array.sort(() => 0.5 - Math.random());
  };

  const postShuffle = (array, first) => {
    if (first) {
      const newArray = shuffle(array).filter((element) => element !== first);
      return [first, ...newArray];
    }
    return shuffle(array);
  };

  return (
    <div>
      <CreatePost user={userData} setNewPost={setNewPost} />
      {loading && [...Array(3).keys()].map((_, i) => <PostSkeleton key={i} />)}
      {posts
        .map((post) => (
          <SinglePost
            loading={loading}
            key={post._id}
            post={post}
            isLike={isLike}
            setIsLike={setIsLike}
            deletePost={deletePost}
            setDeletePost={setDeletePost}
            userData={userData}
          />
        ))
        .reverse()}
    </div>
  );
};

export default MiddleLeftBar;
