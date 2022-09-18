import React from 'react';
import { Banner } from '../../components/Banner';
import { MovieList } from '../../components/MovieList';
import { NavBar } from '../../components/NavBar';
import styles from "./browse.module.css";
import { requests } from '../../constants/index';

function Browse() {
	return (
		<div className={styles['app']}>
			<NavBar/>
			<Banner/>
			<MovieList listName={'Xu hướng'} apiURL={requests.fetchTrending} />
			<MovieList listName={'Xếp hạng cao'} apiURL={requests.fetchTopRated} />
			<MovieList listName={'Hành động'} apiURL={requests.fetchActionMovies} />
			<MovieList listName={'Hài'} apiURL={requests.fetchComedyMovies} />
			<MovieList listName={'Kinh dị'} apiURL={requests.fetchHorrorMovies} />
			<MovieList listName={'Lãng mạn'} apiURL={requests.fetchRomanceMovies} />
			<MovieList listName={'Tài liệu'} apiURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default Browse;

