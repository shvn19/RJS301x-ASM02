import styles from './movielist.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import { imageBasePath, API_KEY } from '../../constants/index';
import YouTube from 'react-youtube';

export const MovieList = ({ listName, apiURL}) => {
    const [movies,setMovies] = useState([]);
    const [showMovieDetail,setShowMovieDetail] = useState(false);
    const [shownMovie, setShownMovie] = useState();
    const [dataMovie, setDataMovie] = useState();
    const [media, setMedia] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const d = await fetch(apiURL);
            const res = await d.json();
            console.log(res);
            setMovies(res.results);
        }
        fetchData();
    },[apiURL]);

    const handleOnClick = useCallback(async (event) => {
        const id = event.target.getAttribute('data-id');
        const index = event.target.getAttribute('data-m');
        const datax = movies[index];

        const trailerYoutube = (data) => {
            const results = data.results;
            console.log('results: ', results);
            let f;
            for (let i=0; i<results.length -1; i++ ){
                if(results[i].site === "YouTube") {
                    if (results[i].type==="Trailer"){
                        f = {
                            type:"video",
                            key: results[i].key,
                        }
                        break;
                    } else if (results[i].type==="Teaser") {
                        if (!f) {
                            f = {
                                type: "video",
                                key: results[i].key,
                            };
                        }
                    }
                }
            }

            if(!f) {
                f={
                    type: "bg",
                    key: imageBasePath+datax.backdrop_path,
                }
            }

            return f;
        }

        console.log('datax: ', datax);

        if (id===shownMovie?.id) {
            setShowMovieDetail(false);
            setShownMovie(null);
        } else {
            setShowMovieDetail(true);
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
            const data = await res.json();
            const f = await trailerYoutube(data);
            setShownMovie(data);
            setDataMovie(datax);
            setMedia(f);
        }
    },[shownMovie,movies]);

    return (
        <div className={styles['list-container']}>
            <h4 className={styles['list-name']}>{listName}</h4>
            {console.log('movies: ', movies)}
            <div className={styles['movies-container']}>
                {movies&&movies.map((movie,index) => (
                    <img key={index} src={imageBasePath+movie.poster_path} alt={movie.title} 
                    className={styles['list-image']} data-id={movie.id} data-m ={index} onClick={handleOnClick}/>
                )
                )}
            </div>
            {console.log(showMovieDetail)}
            {console.log(shownMovie)}
            {showMovieDetail&&dataMovie&&
                <div className={styles['movie-detail-container']}>
                    <div className={styles['movie-info']}>
                        <h3 className={styles['movie-info-title']}>{dataMovie.title}</h3>
                        <hr/>
                        <h5 className={styles['movie-info-release-date']}>Release Date: {dataMovie.release_date}</h5>
                        <h5 className={styles['movie-info-vote']}>Vote: {dataMovie.vote_average}</h5>
                        <p className={styles['movie-info-overview']}>{dataMovie.overview}</p>
                    </div>
                    <div className={styles['movie-video']}>
                        {media&&(
                            media.type==="video"?(
                                <YouTube 
                                    videoId={media.key}
                                    opts={{
                                        height: 'auto',
                                        width: '100%',
                                        playerVars: {
                                            autoplay: 0,
                                        }
                                    }}
                                />
                            ) : (
                                <div>
                                     <img src={media.key} alt="background" className={styles['movie-video-bg']}/>
                                </div>
                            )
                        )}
                    </div>
                </div>
            }
        </div>
    );
}