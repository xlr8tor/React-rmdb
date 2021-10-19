import { useState, useEffect} from "react";

//API
import API from '../API';

export const useMovieFetch = movieID => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieID);
                const credits = await API.fetchCredits(movieID);

                //Get Directors
                const directors = credits.crew.filter(member => member.job === 'Director');

                setState({
                    ...movie,
                    directors,
                    actors: credits.cast
                })

                setLoading(false)
            }
            catch (error){
                setError(true);
            }
        }
        fetchMovie();
    }, [movieID])

    return { state, loading, error}
}