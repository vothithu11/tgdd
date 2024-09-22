import ButtonCustom from '../button/ButtonCustom';
import ProductThumb from './ProductThumb';

const BoxLeft = ({ detailData, bigLapImg, setBigLap }) => {
    return (
        <div className="col-span-3 space-y-4 max-lg:col-span-5">
            <img src={bigLapImg} className="h-[50vh] center-x mx-auto max-xl:h-[20vh] " />
            <p className="text-center text-blue-custom ">Xem tất cả các điểm nổi bật</p>
            <div className="flex justify-center space-x-2">
                {detailData.image.map((item) => (
                    <ProductThumb
                        key={item._id}
                        imgURL={item}
                        changeBigLap={(lap) => setBigLap(lap)}
                        bigLapImg={bigLapImg}
                    />
                ))}
            </div>
            <div className="border-2 border-gray-custom rounded-md grid grid-cols-2 p-4 gap-4 max-lg:text-xs">
                <p className="border-b-2 border-gray-custom ">
                    Hư gì đổi nấy <strong>12 tháng</strong> tại 2983 siêu thị toàn quốc{' '}
                    <span className="text-blue-custom">(miễn phí tháng đầu) </span>
                </p>
                <p className="border-b-2 border-gray-custom">
                    Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng{' '}
                    <span className="text-blue-custom">Xem địa chỉ bảo hành </span>
                </p>
                <p className="">Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</p>
            </div>
            <div className="space-y-8 text-xl">
                <h3 className="font-semibold">Thông tin sản phẩm</h3>
                <p className="justify-between text-lg text-justify max-lg:text-base">{detailData.desc}</p>
                <div>
                    <img src={detailData.main_image} className="h-[50vh] center-x mx-auto max-xl:h-[30vh] max-md:h-[20vh]" />
                    {/* <div className="opacity-50">
                        < ButtonCustom title='XEM THÊM' color='bg-gradient-to-t from-[#FB6E2E] to-[#FF5126] text-black w-[70%] mx-20 my-10'/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BoxLeft;
