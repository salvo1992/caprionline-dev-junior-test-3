
import PropTypes from 'prop-types';

function SortDropdown({ setSort }) {
    return (
        <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Select Sorting</option>
            <option value="most_recent">Most Recent</option>
            <option value="rating">Highest Rating</option>
        </select>
    );
}
SortDropdown.propTypes = {
    setSort: PropTypes.func.isRequired // Indica che setSort è una funzione e è obbligatoria
  };
export default SortDropdown;