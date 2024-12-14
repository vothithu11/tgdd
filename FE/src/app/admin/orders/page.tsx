'use client';
import { fetchProductDetailClient } from '@/api';
import { formatSalePrice } from '@/components/constants/formatSalePrice';
import { IOrderFull} from '@/components/constants/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Page() {
    const [orders, setOrders] = useState<IOrderFull[]>([]);

    useEffect(() => {
        const getOrder = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/orders`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok) {
                    console.log('Fetched orders successfully');
                }

                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error('Invalid response format');
                }

                const updatedOrders = await Promise.all(
                    data.map(async (order: IOrderFull) => {
                        const updatedProducts = await Promise.all(
                            order.products.map(async (product) => {
                                const productDetails = await fetchProductDetailClient(product.id);
                                return {
                                    ...product,
                                    image: productDetails.main_image,
                                    title: productDetails.title,
                                    salePrice: productDetails.salePrice,
                                };
                            })
                        );
                        return { ...order, products: updatedProducts };
                    })
                );
                setOrders(updatedOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        getOrder();
    }, []);
    if (!orders.length) {
        return  <div className="spinner"></div>;
    }
    return (
        <div className="w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
            <th className="border border-gray-300 px-4 py-2">Information Shipping</th>
            <th className="border border-gray-300 px-4 py-2">Order Date</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {orders.map((order, orderIndex) => {
            const productCount = order.products.length;
            const totalPrice = order.products.reduce(
              (acc, cur) => acc + cur.quantity * cur.salePrice,
              0
            );

            return order.products.map((product, productIndex) => (
              <tr key={`${order._id}-${productIndex}`} className="even:bg-gray-50">
                {/* STT */}
                {productIndex === 0 && <td className="border border-gray-300 px-4 py-2" rowSpan={productCount}>
                  {orderIndex+1}
                </td>}
                {/* Name */}
                {productIndex === 0 && (
                  <td
                    className="border border-gray-300 px-4 py-2"
                    rowSpan={productCount}
                  >
                    {order.name}
                  </td>
                )}
                {/* Product Image */}
                <td className="border border-gray-300 px-4 py-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    quality={100}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                {/* Product Title */}
                <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                {/* Product Price */}
                <td className="border border-gray-300 px-4 py-2">
                  {formatSalePrice(product.salePrice)}
                </td>
                {/* Product Quantity */}
                <td className="border border-gray-300 px-4 py-2">x{product.quantity}</td>
                {/* Total Price */}
                {productIndex === 0 && (
                  <td
                    className="border border-gray-300 px-4 py-2"
                    rowSpan={productCount}
                  >
                    {formatSalePrice(totalPrice)}
                  </td>
                )}
                {/* Shipping Information */}
                {productIndex === 0 && (
                  <td
                    className="border border-gray-300 px-4 py-2"
                    rowSpan={productCount}
                  >
                    {order.phoneNumber} - {order.address}
                  </td>
                )}
                {/* Order Date */}
                {productIndex === 0 && (
                  <td
                    className="border border-gray-300 px-4 py-2"
                    rowSpan={productCount}
                  >
                    {order.date}
                  </td>
                )}
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Page;
