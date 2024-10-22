import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 max-w-xs">
            <img src={product.image} alt={product.title} className="mb-2 h-32 w-full object-cover" />
            <h3 className="font-semibold">{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-lg font-bold">{`$${product.price}`}</p>
        </div>
    );
};

// ตรวจสอบชนิดข้อมูลของ props ด้วย PropTypes
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
