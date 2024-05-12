import { useState, useEffect } from 'react';
import axios from 'axios';
import SortDropdown from './SortDropdown.jsx';
import GenreFilter from './GenreFilter.jsx';

function ImportedMovieList() {
    const [movies, setMovies] = useState([]);
    const [sort, setSort] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState(null);
    useEffect(() => {

        axios.get(`/movies?sort=${sort}&genre=${genre}`)
        .then(response => {
            console.log('API response:', response.data);
            setMovies(response.data.movies);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            setError('Failed to fetch movies. Please try again.');
        });
        
        // Nel componente:
        if (error) {
            return <div>Error: {error}</div>;
        }
    }, [sort, genre]);

    return (
        <div>
            <SortDropdown setSort={setSort} />
            <GenreFilter setGenre={setGenre} />
            <ul>
                {Array.isArray(movies) ? movies.map(movie => (
                    <li key={movie.id}>{movie.title} - {movie.genre} - {movie.releaseDate} - {movie.rating}</li>
                )) : <li>No movies found</li>}
            </ul>
        </div>
    );
}
export default ImportedMovieList;