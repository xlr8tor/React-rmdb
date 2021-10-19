import React from "react";
import { Link } from "react-router-dom";
//Styles
import {Image} from '../Thumb/Thumb.styles'


const Thumb = ({image,movieID, clickabale}) => (
    <div>
        {clickabale?
            <Link to={`/${movieID}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
            : <Image src={image} alt='movie-thumb'/>
        }
    </div>
)
  
export default Thumb;