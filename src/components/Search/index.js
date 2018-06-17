import SearchComponent from './SearchComponent';
import { connect } from 'react-redux';

function mapStoreToProps(store){
    console.log(store);
    return {
        searchedFor: store.search.searchedFor,
        color: store.search.color
    };
}
export default connect(mapStoreToProps)(SearchComponent);