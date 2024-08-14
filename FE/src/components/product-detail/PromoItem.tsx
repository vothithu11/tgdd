import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PromoItem = ({ title, subtitle, icon, style, customColor }) => {
    return (
        <p className="flex justify-between">
            <span className={`rounded-full w-6 h-6 m-2 p-2 flex items-center ${customColor}`}>
                <FontAwesomeIcon icon={icon} style={style} />
            </span>
            <span className="">
                {title}
                <span className="text-blue-custom"> {subtitle}</span>{' '}
            </span>
        </p>
    );
};

export default PromoItem;
