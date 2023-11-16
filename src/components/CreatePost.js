import { useState } from "react";
import {db} from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import {useFormInput} from "../hooks";

function CreatePost() {

  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit (e) {
    e.preventDefault();
    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    // db.collection('posts').add({
    //   title,
    //   content,
    //   subTitle,
    //   createdAt: new Date(),
    // });
    const docRef = await addDoc(collection(db, "posts"), {
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });

  }

    return (
      <div className="create-post">
       <h1>CreatePost</h1> 

      <form onSubmit = {handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title}/>
        </div>

        <div className="form-field">
          <label>Sub title</label>
          <input {...subTitle}/>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}> </textarea>
        </div>

        <button className="create-post-btn">Create Post</button>

      </form>

      </div>
    );
  }

  export default CreatePost;