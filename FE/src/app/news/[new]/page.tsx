import { newsfeed } from '@/components/data.mocks';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const dataHeader = [
    'MỚI NHẤT',
    'SẢN PHẨM MỚI',
    'ĐÁNH GIÁ',
    'MẸO HAY',
    'TƯ VẤN',
    'SỰ KIỆN',
    'STORIES',
    'KHUYẾN MÃI',
    'LAPTOP',
];

function New({ params }: { params: { new: number } }) {
    const dataNewsDetail = newsfeed[0][params.new];
    return (
        <div className="w-[1200px] mx-auto py-5">
            <div className="flex gap-1">
                {dataHeader.map((item, index) => (
                    <span
                        key={index}
                        className={`py-[3px] px-[5px] font-light text-[15px] leading-[18px] rob hover:text-blue-custom ${
                            index === 7 ? 'bg-[#fed701]' : ''
                        }`}
                    >
                        {item}
                    </span>
                ))}
            </div>
            <div className=" w-[800px] mx-auto my-5 flex flex-col gap-5 leading-7">
                <h1 className="font-semibold leading-[53px] text-[45px]">{dataNewsDetail.desc}</h1>
                <div className="text-xs">
                    <span className="font-semibold">Vinh Mai </span> <span className="text-[#999]">14 giờ trước</span>
                </div>
                <Image
                    src={dataNewsDetail.img}
                    alt="banner"
                    width={800}
                    height={450}
                    quality={100}
                    className="mx-auto object-cover"
                />
                <div className="w-[600px] mx-auto flex flex-col gap-5">
                    <p>
                        Đánh dấu lịch ngay vào ngày 09/11/2024 để tham gia sự kiện săn
                        <span className="text-blue-custom cursor-pointer"> {dataNewsDetail.note}</span> miễn phí tại{' '}
                        <span className="text-blue-custom cursor-pointer">Thế Giới Di Động!</span> Chỉ trong 1 ngày duy
                        nhất, ngoài cơ hội trúng<span className="text-blue-custom cursor-pointer"> điện thoại</span>{' '}
                        miễn phí, khách hàng còn có thể mua sạc dự phòng, loa bluetooth với giá chỉ từ vài chục ngàn
                        đồng. Đừng bỏ lỡ cơ hội có 1-0-2 này để vừa rinh về thiết bị hiện đại vừa tận hưởng ưu đãi hấp
                        dẫn nhất trong năm!
                    </p>
                    <h2 className="text-3xl font-bold">Thông tin chi tiết chương trình</h2>
                    <p>
                        <span className="font-bold">Thời gian duy nhất:</span> 17h - 19h, Thứ 7 ngày 09/11/2024.
                    </p>
                    <p>
                        <span className="font-bold">Tên chương trình:</span> Dẫn đầu Sale to giá rẻ.
                    </p>
                    <p>
                        <span className="font-bold">Địa điểm:</span> Tại các cửa hàng Thế Giới Di Động (theo danh sách
                        bên dưới).
                    </p>
                    <p>
                        <span className="font-bold">Chương trình gồm có:</span>
                    </p>
                    <ul>
                        <li className="">Quay số may mắn 1 chiếc điện thoại realme Note 50 miễn phí.</li>
                        <li>5 loa bluetooth giảm chỉ còn 70.000 đồng/chiếc.</li>
                        <li>15 sạc dự phòng AVA+ giá 80.000/chiếc.</li>
                    </ul>
                    <p>
                        Ngoài ra, đến với sự kiện khách hàng có cơ hội mua được những chiếc smartphone, phụ kiện, đồng
                        hồ,... giá cực sốc.
                    </p>
                    <h2 className="text-3xl font-bold">Danh sách siêu thị</h2>
                </div>
                <div>
                    <Image
                        src="https://cdnv2.tgdd.vn/mwg-static/common/News/1571622/imagesscr%202.jpg"
                        alt="banner"
                        width={800}
                        height={464}
                        quality={100}
                        className="mx-auto object-cover"
                    />
                    <Image
                        src="https://cdnv2.tgdd.vn/mwg-static/common/News/1571622/imagesscr%203.jpg"
                        alt="banner"
                        width={800}
                        height={464}
                        quality={100}
                        className="mx-auto object-cover w-[800px]"
                    />
                </div>
                <div className="w-[600px] mx-auto flex flex-col gap-5">
                    <p>Ngoài ra, đừng quên xem ngay những khuyến mãi cực HOT tại nút cam sau bạn nha!</p>
                    <button className="bg-custom-gradient w-max p-2.5 font-bold rounded text-[#ff0] mx-auto leading-5">
                        CHƯƠNG TRÌNH KHUYẾN MÃI <br />
                        THẾ GIỚI DI ĐỘNG
                    </button>
                    <span>Xem thêm:</span>
                    <ul className="list-disc text-blue-custom leading-[25px]">
                        <li>Laptop AI Master Chip: Giảm đến 4 triệu, thu cũ tặng thêm đến 1 triệu</li>
                        <li>Chuột Rapoo giá tốt, mua ngay hôm nay chỉ từ 200K, mẫu mã đa dạng</li>
                    </ul>
                    <span className="leading-[18px] text-[#999]">Biên tập bởi Phan Trung</span>
                    <div className="flex gap-2">
                        <button className="bg-[#1877f2] flex items-center gap-1 py-0.5 px-2 rounded text-white leading-[18px]">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>Like</span>
                            <span>1</span>
                        </button>
                        <button className="bg-[#1877f2] flex items-center gap-1 py-0.5 px-2 rounded text-white leading-[18px]">
                            <span>Share</span>
                        </button>
                        <button className="flex items-center gap-1 py-0.5 px-2 rounded text-blue-custom leading-[18px] border border-[#288AD6]">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <span>Không hài lòng bài viết</span>
                        </button>
                    </div>
                    <Image
                        src="/banner-week.png"
                        alt="banner"
                        width={600}
                        height={160}
                        quality={100}
                        className="object-cover"
                    />
                </div>
                <div className="w-[800px] mx-auto">
                    <h2 className="font-semibold text-lg px-10 uppercase">Bài viết liên quan</h2>
                    <div className=" flex flex-wrap p-5 gap-5">
                        {newsfeed[0].map((news,i) => (
                            <div className="w-[30%]" key={i}>
                                <Link href={`/news/${news.id}`} >
                                    <Image
                                        src={news.img}
                                        alt="banner-news"
                                        width={240}
                                        height={135}
                                        quality={100}
                                        className="rounded-lg object-cover"
                                    />
                                    <p>{news.desc}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;
