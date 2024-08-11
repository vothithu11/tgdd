import { useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCounter = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="items-center space-x-1 my-4 p-2">
                <span className="border-[1px] p-2 border-[#395484]">
                    <FontAwesomeIcon
                        icon={faMinus}
                        style={{ color: '#395484' }}
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement(product))}
                    />
                </span>
                <span className="border-[1px] p-2 border-[#395484]">{product.quantity}</span>
                <span className="border-[1px] p-2 border-[#395484]">
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ color: '#395484' }}
                        aria-label="Increment value"
                        onClick={() => dispatch(increment(product))}
                    />
                </span>
            </div>
        </div>
    );
};

export default ProductCounter;
