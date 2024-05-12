
import PropTypes from 'prop-types';


function GenreFilter({ setGenre }) {
  
    return (
        <select onChange={(e) => setGenre(e.target.value)}>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
     Aggiungi altre opzioni di genere come necessario
        </select>
    );
    
}
GenreFilter.propTypes = {
    setGenre: PropTypes.func.isRequired // Indica che setSort è una funzione e è obbligatoria
  };
export default GenreFilter;