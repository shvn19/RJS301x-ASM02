import React from 'react';
import { imageBasePath, requests } from '../../constants';
import styles from './resultlist.module.css';

export const ResultList = ({ moviesList }) => {
    return (
        <React.Fragment>
            <div className={styles['result-list-container']}>
                <h4>Search Result</h4>
                <div className={styles['list-container']}>
                    {moviesList&&
                        moviesList.map((movie,index)=>(
                            <img key={index} src={`${imageBasePath}${movie.poster_path}`} alt={movie.title} className={styles['movie-image']}/>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>

    )
}