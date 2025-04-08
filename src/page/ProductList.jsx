import React from 'react';
import useProducts from '../hooks/useProducts';

const ProductList = () => {
    const { data, isLoading, isError, error } = useProducts();

    if (isLoading) return <p>Đang tải...</p>;
    if (isError) return <p>Lỗi: {error.message}</p>;

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {data.products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
