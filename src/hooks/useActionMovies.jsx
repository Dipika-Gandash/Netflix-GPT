import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addActionMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useActionMovies = () => {
    const dispatch = useDispatch();
    const getActionMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_genres=28", API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addActionMovies(jsonData.results));
    
    };

    useEffect(() => {
        getActionMovies();
    }, [])
};

export default useActionMovies;