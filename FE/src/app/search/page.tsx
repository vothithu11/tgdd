import SearchPage from '@/components/SearchPage';
import { url } from '@/datas/data';

const Search = async (props) => {
    const keyword = props?.searchParams.keyword || '';
    const res = await fetch(`${url}/posts?keyword=${keyword}`, { cache: 'no-store' });
    const data = await res.json();
    const dataSearch = data.docs;
    return <SearchPage data={dataSearch} />;
};

export default Search;
