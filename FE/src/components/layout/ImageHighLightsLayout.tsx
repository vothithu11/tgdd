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
        <div className={`my-8 ${extraClassContainer}`}>
            <h2 className="text-2xl uppercase font-semibold">{title}</h2>
            <div className={`grid ${extraClassChildren} gap-1`}>{children}</div>
        </div>
    );
};

export default ImageHighLightsLayout;
