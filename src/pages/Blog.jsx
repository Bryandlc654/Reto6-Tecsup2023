import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const { posts } = useLoaderData();

    console.log(posts);


    return (
        <>
        <body className="bg-dark text-light">
            <section className="py-5">
                <div className="container d-flex flex-column gap-4">
                    <h2 className="text-center">Coffee Break's</h2>

                    <div className="row d-flex justify-content-center g-4">
                    {posts.length > 0 ? (
                        posts.map.data((blog) => (
                                <div className="col-md-3">
                                    <div className="card bg-dark bg-secondary border border-2 border-light border-opacity-50 mx-auto h-100 key-${id}">
                                        <img src={blog.url_image} className="card-img-top" alt="pensando" width="256" height="144" />
                                        <div className="card-body">
                                            <h5 className="card-title text-light">{blog.name}</h5>
                                            <p className="card-text text-light">{blog.description}</p>
                                        </div>
                                        <div class="card-footer">
                                            <h6 class="text-end">Precio: {blog.attributes.price}</h6>
                                            <a href="#" class="btn btn-primary">add to Menú</a>
                                        </div>
                                    </div>
                                </div>
                        ))
                    ) : (
                        <li>No blogs found</li>
                    )}
                    </div>

                </div>
            </section>
        </body>
        </>
    );
};

export default Blog;

export const loaderBlog = async () => {
    //const res = await fetch('https://mposiul.github.io/code_reto_four/api_expresso/data.json')
    //const res = await fetch('https://epescoran.github.io/reto_json_productos/Lista_Productos.json')
    const res = await fetch('http://localhost:1337/api/products/')
    console.log(res);
    
    const posts = await res.json()

    return { posts };
};