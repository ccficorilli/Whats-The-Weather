import SearchComponent from './SearchComponent';
import { connect } from 'react-redux';

function mapStoreToProps(store){
    return {
        searchedFor: store.search.searchedFor,
        color: store.search.color
    };
}
export default connect(mapStoreToProps)(SearchComponent);