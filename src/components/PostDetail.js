import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postCollection = collection(db, 'posts');
        const postSnapshot = await getDocs(postCollection);
        postSnapshot.forEach((doc) => {
          if (doc.id === postId) {
            console.log('snapshot', doc.data());
            setPost(doc.data());
          }
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
