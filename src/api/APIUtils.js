import axios from "axios";

const getAllPost = async (params = '') => {
    try {
        const response = await axios.get(
            import.meta.env.VITE_REACT_APP_API_ENDPOINT + "/blog-posts" + params
        )
        return response

    } catch (error) {
        console.error(error)
    }
}

const getPostDetail = async (id) => {
    try {
        const response = await axios.get(
            import.meta.env.VITE_REACT_APP_API_ENDPOINT + "/blog-posts/" + id
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

export { getAllPost, getPostDetail };