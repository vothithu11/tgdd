import React from 'react';

interface IImageHightLightsLayoutProps {
    children: React.ReactNode;
    title: string;
    extraClassChildren: string;
    extraClassContainer?: string;
}

const ImageHighLightsLayout: React.FC<IImageHightLightsLayoutProps> = (props) => {
    const { extraClassContainer, extraClassChildren, title, children } = props;
    return (
        <div className={`${extraClassContainer} last:py-[30px]`}>
            <h2 className="text-2xl uppercase font-semibold pb-[30px]">{title}</h2>
            <div className={`grid ${extraClassChildren} gap-1`}>{children}</div>
        </div>
    );
};

export default ImageHighLightsLayout;   
