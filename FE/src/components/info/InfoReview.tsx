import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import { IProduct } from '../type';

function InfoReview({product}:{product:IProduct}) {
    const [showMore,setShowMore]= useState(false);
    return (
        <div className="flex flex-col gap-4 text-justify text-base">
            <p className="font-bold text-xl">
                Trong những tháng cuối năm 2020, <span className='text-blue-custom font-normal capitalize'>{product.brand}</span> đã chính thức giới thiệu đến người dùng cũng như Fan thế hệ
                <span className='text-blue-custom font-normal capitalize'> {product.title}</span> mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy
                mạnh mẽ và một trong số đó chính là <span className='text-blue-custom font-normal capitalize'>{product.title}</span>
            </p>
            <h1 className="font-bold text-xl">Hiệu năng vượt xa mọi giới hạn</h1>
            <p className='relative capitalize'>
                {product.brand} đã trang bị con chip mới nhất của hãng (tính đến 11/2020) cho {product.title} đó là A14 Bionic, được sản
                xuất trên tiến trình 5nm với hiệu suất ổn định hơn so với chip A13 được trang bị trên phiên bản tiền
                nhiệm {product.title}.{!showMore && <span className='text-blue-custom flex gap-1 w-full justify-center items-center mx-auto bg-custom-gradient-btn absolute -bottom-2 h-20 pt-16 cursor-pointer' onClick={()=>setShowMore(true)}><span>Xem thêm</span>  <FontAwesomeIcon icon={faAngleDown} /></span>}
            </p>
            {showMore && <>
                <div className='relative w-[720px] h-[405px]'>
            <Image
                alt="image"
                src={product.main_image}
                fill
                quality={100}
                className="object-contain"
            />
            </div>
            <p>Xem thêm: Tìm hiểu về chip {product.brand} A14 Bionic trên {product.title} và các dòng khác</p>
            <p>
                Với CPU {product.brand} A14 Bionic, bạn có thể dễ dàng trải nghiệm mọi tựa game với những pha chuyển cảnh mượt mà
                hay hàng loạt hiệu ứng đồ họa tuyệt đẹp ở mức đồ họa cao mà không lo tình trạng giật lag.
            </p>
            <Image
                src="https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-300923-115610.jpg"
                alt="image"
                width={720}
                height={405}
                quality={100}
                className="object-cover"
            />
            <p>
                Chưa hết, {product.brand} còn gây bất ngờ đến người dùng với hệ thống 5G lần đầu tiên được trang bị, cho tốc độ truyền tải dữ liệu nhanh hơn, ổn định hơn.
            </p>
            <p>
                Tiếp nối bước ngoặt của {product.title} với chip A14 Bionic và kết nối 5G, {product.brand} không ngừng đổi mới và đã
                giới thiệu dòng mới, mang lại những cải tiến đáng kể trong hiệu suất xử lý cũng như tính năng. Sản phẩm tiếp tục phát triển với công nghệ chip mới nhất và các tính năng camera tiên tiến, giúp tăng cường
                trải nghiệm người dùng.
            </p>
            <Image
                src="https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-300923-115613.jpg"
                alt="image"
                width={720}
                height={405}
                quality={100}
                className="object-cover"
            />

            <h1 className="font-bold text-xl">Cụm camera không ngừng cải tiến</h1>
            <p >
                {product.title} được trang bị hệ thống camera kép bao gồm camera góc rộng và camera siêu rộng có cùng độ phân
                giải là 12 MP, chế độ ban đêm (Night Mode) trên bộ đôi camera này cũng đã được nâng cấp về phần cứng lẫn
                thuật toán xử lý, khi chụp những bức ảnh thiếu sáng bạn sẽ nhận được kết quả ấn tượng với màu sắc, độ
                chi tiết rõ nét đáng kinh ngạc.
            </p>
            <Image
                src="https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-14.jpg"
                alt="image"
                width={720}
                height={405}
                quality={100}
                className="object-cover"
            />
            <p>
                Bạn có thể khám phá thêm những tính năng của camera trên {product.title} như chế độ smart HDR 3 giúp cân bằng
                yếu tố ánh sáng trong ảnh, làm nổi bật chi tiết đối tượng và cây cối trong khi vẫn giữ được màu sắc
                phong phú của bầu trời ngay cả vào buổi trưa nắng gắt.
            </p>
            <Image
                src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-9.jpg"
                alt="image"
                width={720}
                height={405}
                quality={100}
                className="object-cover"
            />
            <p>
                Sự kết hợp của 2 cảm biến chất lượng này đã tạo nên một hệ thống camera chuyên nghiệp không khác gì
                những chiếc máy ảnh thực thụ, dễ dàng đem lại những bức hình sắc nét tuyệt đối, độ chi tiết cao và đa
                dạng chế độ chụp cho người dùng linh hoạt sử dụng.
            </p>
            <h1 className="font-bold text-xl">Ghi dấu ấn về mặt thiết kế</h1>
            <p>
                Về ngoại hình {product.title} có thiết kế hoài niệm với phần cạnh được làm vuông vức tương tự trên mẫu 
                thay vì bo cong như {product.title}.
            </p>
            <Image
                src="https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-256gb-19.jpg"
                alt="image"
                width={720}
                height={405}
                quality={100}
                className="object-cover"
            />
            <p className='capitalize'>
                {product.brand} còn mang đến cho người dùng một loạt gam màu cá tính, độc đáo của mình để
                người dùng có sự lựa chọn phù hợp với những phong cách khác nhau.
            </p>
            <Image
                src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-18.jpg"
                alt="image"
                width={720}
                height={405}
                quality={100}
                className="object-cover"
            />
            <p>
                Máy được chế tác có độ hoàn thiện cực cao với thiết kế nguyên khối, khung nhôm và mặt sau là kính cường
                lực cao cấp toát lên vẻ ngoài sang chảnh cũng như mang lại độ hiệu quả an toàn cao mỗi khi sử dụng.
            </p>
            </>}
            
        </div>
    );
}

export default InfoReview;
