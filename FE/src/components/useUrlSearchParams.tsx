
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { IPendingFilter } from './constants/type'; 

const useUrlSearchParams = (fil: IPendingFilter) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const updateUrlSearchParams = () => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(fil).forEach(([param, values]) => {
            if (param === 'page') {
                params.set(param, String(values));
                return;
            }
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    if (!params.getAll(param).includes(String(value))) {
                        params.append(param, String(value));
                    }
                });
                const allValues = params.getAll(param);
                allValues.forEach((value) => {
                    if (!values.map(String).includes(String(value))) {
                        params.delete(param, String(value));
                    }
                });
            }
        });

        router.replace(`${pathName}?${params.toString()}`);
    };

    return updateUrlSearchParams;
};

export default useUrlSearchParams;
