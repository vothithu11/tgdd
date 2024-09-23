export const dynamic = 'force-dynamic';
import SearchPage from '@/components/SearchPage';
import { fetchProducts } from '@/api';

const Search = async ({searchParams}) => {
   
    const dataSearch = await fetchProducts({searchParams})
    return <SearchPage data={dataSearch} />;
};

export default Search;
