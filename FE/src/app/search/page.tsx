import SearchPage from '@/components/SearchPage';

const Search = async (props) => {
    const keyword = props?.searchParams.keyword || '';
    const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts?keyword=${keyword}`, { cache: 'no-store' });
    const data = await res.json();
    const dataSearch = data.docs;
    return <SearchPage data={dataSearch} />;
};

export default Search;
