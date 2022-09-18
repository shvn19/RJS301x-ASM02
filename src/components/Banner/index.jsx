import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { imageBasePath, requests } from '../../constants/index';

export const Banner = () => {
    const [film, setFilm] = useState();
    useEffect(() => {
        async function fetchData() {
            const url = `${requests.fetchNetflixOriginals}`;
            // console.log('url: ', url);
            const dat =  await fetch(url);
            // console.log('dat: ', dat);
            const res = await dat.json();
            // console.log('res: ', res);
            const f = res.results[Math.floor(Math.random() * res.results.length - 1)];
            // console.log('film: ', f);
            setFilm(f);
        }
        fetchData();
    },[]);
    const bgurl = film?(imageBasePath + film.backdrop_path):'';
    // console.log('bg: ', bgurl);
    return (
        <React.Fragment>
            <div className={styles['banner-container']} style={{
                backgroundImage: `url(${bgurl})`
            }}>
                <h2 className={styles['film-title']}>{film&&film.original_name}</h2>
                <div className={styles['button-group-banner']}>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                {film&&<p className={styles['film-overview']}>{film.overview}</p>}
            </div>
        </React.Fragment>
    )
}