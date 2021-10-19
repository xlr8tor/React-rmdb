import React from "react";
import { useParams } from "react-router";

//Config
import {POSTER_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

//Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

//No Image
import NoImage from '../images/no_image.jpg';
const Movie = () => {
    const {movieID} = useParams();
    console.log(movieID)
    const { state: movie, loading, error} = useMovieFetch(movieID);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageURL={
                            actor.profile_path?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                        />
                ))}
            </Grid>
            
        </>
    )
}

export default Movie;