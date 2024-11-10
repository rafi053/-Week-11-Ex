import { FC, useEffect } from "react";
import { fetchPosts } from "../store/features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { error, status, post } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);


    const renderedPosts = post.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p className="postCredit">
            </p>
        </article>

    )
    );
    

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;