// import { useState, ChangeEvent } from "react";
// import { postAdded } from "../store/features/posts/postsSlice";
// import { selectAllUsers } from "../store/features/users/usersSlice";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { set } from "date-fns";
// import { useSelector } from "react-redux";

// const AddPostForm: React.FC = () => {
//     const dispatch = useAppDispatch(); // שימוש בהוק המותאם

//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [userId, setUserId] = useState('');

//     const users =useAppSelector(selectAllUsers);

//     // הוספת טיפוסים לאירועי שינוי
//     const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
//     const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);
//     const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

//     const onSavePostClicked = () => {
//         if (title && body) {
//             dispatch(postAdded({title, body, userId}));
//             setTitle('');
//             setBody('');
//         }
//     };

//     const canSave = Boolean(title) && Boolean(body) && Boolean(userId);

//     const usersOptions = users.map(user => (
//         <option key={user.id} value={user.id}>
//             {user.name}
//         </option>
//     ));

//     return (
//         <section>
//             <h2>Add a New Post</h2>
//             <form>
//                 <label htmlFor="postTitle">Post Title:</label>
//                 <input
//                     type="text"
//                     id="postTitle"
//                     name="postTitle"
//                     value={title}
//                     onChange={onTitleChanged}
//                 />
//                 <label htmlFor="postAuthor">Author:</label>
//                 <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
//                     <option value=""></option>
//                     {usersOptions}
//                 </select>
//                 <label htmlFor="postContent">Content:</label>
//                 <textarea
//                     id="postContent"
//                     name="postContent"
//                     value={body}
//                     onChange={onContentChanged}
//                 />
//                 <button
//                     type="button"
//                     onClick={onSavePostClicked}
//                     disabled={!canSave}
//                 >
//                     Save Post
//                 </button>
//             </form>
//         </section>
//     );
// };

// export default AddPostForm;