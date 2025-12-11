import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addAnimation } from "../utils/moviesSlice";
import { useEffect } from "react";


const useAnimation = () => {
    const dispatch = useDispatch();
    const getAnimation = async () => {
        const data = await fetch(" https://api.themoviedb.org/3/discover/movie?with_genres=16", API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addAnimation(jsonData.results));
    }

    useEffect(() => {
        getAnimation();
    }, [])
}

export default useAnimation;