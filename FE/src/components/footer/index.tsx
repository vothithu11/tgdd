import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { brands } from '../constants/data.mocks';

function Footer() {
    return (
        <footer className="border-[#e9e8e8] border-t pt-[15px]">
            <div className="bg-white mb-3 max-lg:mx-2.5">
                <div className="max-w-[1200px] mx-auto flex max-md:flex-col max-lg:gap-2">
                    <div className="w-[71%] flex justify-start gap-12 max-md:w-full">
                        <div className="flex flex-col gap-[10px] items-start justify-start">
                            <b>Tổng đài hỗ trợ</b>
                            <span>
                                Gọi mua: <span className="text-[#2f80ed] font-bold">1900 232 460</span> (8:00 - 21:30)
                            </span>
                            <span>
                                Khiếu nại: <span className="text-[#2f80ed] font-bold">1800.1062 </span>(8:00 - 21:30)
                            </span>
                            <span>
                                Bảo hành: <span className="text-[#2f80ed] font-bold">1900 232 464</span> (8:00 - 21:00)
                            </span>
                        </div>
                        <div className="flex flex-col gap-[10px] items-start justify-start max-md:hidden">
                            <b>Về công ty</b>
                            <span>Giới thiệu công ty (MWG.vn)</span>
                            <span>Tuyển dụng</span>
                            <span>Gửi góp ý, khiếu nại</span>
                            <span>Tìm siêu thị (2.966 shop)</span>
                        </div>
                        <div className="flex flex-col gap-[10px] items-start justify-start max-md:hidden">
                            <b>Thông tin khác</b>
                            <span>Tích điểm Quà tặng VIP</span>
                            <span>Lịch sử mua hàng</span>
                            <span>DV vệ sinh máy lạnh</span>
                            <span>Tìm hiểu về mua trả góp</span>
                            <span>Chính sách bảo hành</span>
                            <span>
                                Xem thêm <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] w-[29%] items-start justify-start max-md:w-full">
                        <p>Website cùng tập đoàn</p>
                        <div className="flex gap-2 flex-wrap justify-start ">
                            {brands.map((img, i) => (
                                <div className="w-20 h-[24px] relative" key={i}>
                                    <Image
                                        src={img}
                                        alt="sub-brand"
                                        fill
                                        quality={100}
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between w-full mt-[11px] max-lg:justify-start max-lg:gap-2">
                            <span className="flex gap-[5px] items-center">
                                <Image
                                    src="/facebook.png"
                                    alt="sub-brand"
                                    width={18}
                                    height={18}
                                    className="object-cover"
                                />
                                3886.8k Fan
                            </span>
                            <span className="flex gap-[5px] items-center">
                                <Image
                                    src="/youtube.png"
                                    alt="sub-brand"
                                    width={18}
                                    height={18}
                                    className="object-cover"
                                />
                                869k Đăng ký
                            </span>
                            <span className="flex gap-[5px] items-center">
                                <Image
                                    src="/zalo.png"
                                    alt="sub-brand"
                                    width={18}
                                    height={18}
                                    className="object-cover"
                                />
                                Zalo TGDĐ
                            </span>
                        </div>
                        <div className='flex gap-[9px] justify-start flex-wrap'>
                            <Image src='/bct.png' alt='image' width={79} height={24} className='object-contain'/>
                            <Image src='/law.png' alt='image' width={25} height={25} className='object-contain'/>
                            <Image src='/dmca.png' alt='image' width={122} height={24} className='object-contain'/>
                            <Image src='/network.png' alt='image' width={85} height={35} className='object-contain mt-2'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f1f1f1]">
                <div className="max-w-[1200px] mx-auto text-xs leading-[18px] text-[#666] py-[15px] max-lg:mx-2.5">
                    &copy; 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày
                    02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                    <br /> Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng
                    từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960.
                    Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email:
                    hotrotmdt@thegioididong.com. <span className="text-[#288ad6]">Xem chính sách sử dụng</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
