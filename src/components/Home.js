import {useEffect, useState} from 'react';
import {db} from "../firebase";
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; 
import styled from 'styled-components';

const BlogHeading = styled.h1`
text-align: center;
color: ${(props) => props.primary ? '#2196f3' : 'red'};
margin-bottom: 2px;
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log('posts', posts);
        setPosts(posts);
        // Do something with the 'posts' data, e.g., set it to a state variable
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

    return (
      <div className="home">
        <BlogHeading primary>Aman's Bug</BlogHeading>
        <div id = "blog-by">
          Bugs are the creators of new technologies!
        </div>
        {posts.map ((post, index)=>(
          <div className='post' key={`post-${index}`}>
            <Link to = {`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
          </div>
        ))}
      </div>
    );
  }

  export default Home;