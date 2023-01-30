import { useLoaderData } from "react-router-dom"; 

const Post = () => {

    const {post} = useLoaderData()

    return (
        <>
        <h1>{post.id} - {post.nombre}</h1>
        <p>{post.descripcion}</p>
        </>
    );
};

export default Post;

export const loaderPost = async ({params}) => {
    const res = await fetch(`https://mposiul.github.io/code_reto_four/api_expresso/data.json/${params.id}`);
    const post = await res.json();
    return {post};
};