import SearchPage from '@/components/SearchPage';
import { fetchProducts } from '@/api';

const Search = async ({searchParams}) => {
   
    const dataSearch = await fetchProducts({searchParams})
    console.log('url search', dataSearch)
    return <SearchPage data={dataSearch} />;
};

export default Search;
