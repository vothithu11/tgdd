import BannerSlider from '@/components/BannerSlider';
import ProductButtonFeature from '@/components/layout/products-layout/ProductButtonFeature';
import { images } from '@/components/home-sections/data-mock';
import AllPopover from './AllPopover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSortDown } from '@fortawesome/free-solid-svg-icons';

const ProductsLayout = ({
    filterData,
    children,
    onSelect,
    handleSubmit,
    clearFilters,
    openPopup,
    showPopup,
    tempParams,
}) => {
    const item1 = filterData[0].items;
    return (
        <div className="padding bg-[#F9FAFB] max-width-[1200px]">
            <div className="bg-white p-4 ">
                <section className=" grid grid-cols-6 space-x-2 max-xl:hidden">
                    <div className="col-span-4 ">
                        <BannerSlider images={images} visibleNumber={1} />
                    </div>
                    <div className="col-span-2 space-y-2">
                        <img src={images[0].src} alt="banner" className="rounded-md" />
                        <img src={images[1].src} alt="banner" className="rounded-md" />
                    </div>
                </section>
                <section className="my-4 max-lg:mt-2 rounded-md">
                    <div className="py-2 max-lg:pt-8 relative flex justify-start">
                        <button
                            className="mx-2 px-2 border rounded-md text-md cursor-pointer h-[47px] max-xl:mt-5"
                            onClick={() => showPopup('all')}
                        >
                            <div className="flex items-center space-x-1">
                                <span>LỌC</span>
                                <span>
                                    {Object.entries(tempParams).length === 0 ? (
                                        ''
                                    ) : (
                                        <FontAwesomeIcon icon={faCheck} style={{ color: '#e20808' }} />
                                    )}
                                </span>
                                <FontAwesomeIcon icon={faSortDown} />
                            </div>
                        </button>

                        {openPopup === 'all' && (
                            <div className="my-1">
                                <AllPopover
                                    filterData={filterData}
                                    onSelect={onSelect}
                                    handleSubmit={handleSubmit}
                                    clearFilters={clearFilters}
                                    openPopup={openPopup}
                                    showPopup={showPopup}
                                    tempParams={tempParams}
                                />
                            </div>
                        )}
                        <div className="flex justify-start space-x-2 mb-2.5 max-lg:grid-cols-3 max-xl:hidden max-xl:mb-0">
                            {filterData.map((filter) => (
                                <ProductButtonFeature
                                    key={filter.queryName}
                                    filter={filter}
                                    onSelect={onSelect}
                                    handleSubmit={handleSubmit}
                                    clearFilters={clearFilters}
                                    openPopup={openPopup}
                                    showPopup={showPopup}
                                />
                            ))}
                        </div>

                        {/* <div className="grid grid-cols-8 gap-y-2 max-lg:hidden">
                        {item1.map((filter) => (
                            <ButtonBrandName
                                filter={filter}
                                key={filter.name}
                                onSelect={onSelect}
                                // resetFilters={resetFilters}
                            />
                        ))}
                    </div> */}
                    </div>
                </section>
                <main className="">{children}</main>
            </div>
        </div>
    );
};

export default ProductsLayout;
