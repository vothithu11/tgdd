import ButtonBrandName from '../button/ButtonBrandName';
import ProductButtonFeature from '../button/ProductButtonFeature';

const CategoriesLayout = ({ filterData, onSelect, handleSubmit, resetFilters, clearFilters, openPopup, showPopup }) => {
    const item1 = filterData[0].items;

    return (
        <div className="bg-[#f3efef] padding-y space-y-8 max-lg:space-y-2">
            <div className="flex justify-start space-x-2 mb-2.5 max-lg:grid-cols-3">
                {filterData.map((filter) => (
                    <ProductButtonFeature
                        key={filter.queryName}
                        filter={filter}
                        onSelect={onSelect}
                        handleSubmit={handleSubmit}
                        resetFilters={resetFilters}
                        clearFilters={clearFilters}
                        openPopup={openPopup}
                        showPopup={showPopup}
                    />
                ))}
            </div>
            <div className="grid grid-cols-8 gap-y-2 max-lg:hidden">
                {item1.map((filter) => (
                    <ButtonBrandName
                        filter={filter}
                        key={filter.name}
                        onSelect={onSelect}
                        // resetFilters={resetFilters}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesLayout;
