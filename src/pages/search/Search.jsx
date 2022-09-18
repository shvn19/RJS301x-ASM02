import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { ResultList } from '../../components/ResultList';
import { SearchForm } from '../../components/SearchForm';
import styles from './search.module.css';

const Search = () => {
	const [moviesList, setMoviesList] = useState([]);
	const handleSearchMovies = (data) => {
		setMoviesList(data);
	}
	return (
		<React.Fragment>
			<div className={styles['search-container']}>
				<NavBar />
				<SearchForm onSearchMovies={handleSearchMovies}/>
				<ResultList moviesList={moviesList}/>
			</div>
		</React.Fragment>
	);
};

export default Search;
