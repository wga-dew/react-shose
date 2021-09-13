import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
    <ContentLoader
        speed={2}
        width={210}
        height={260}
        viewBox="0 0 210 260"
        backgroundColor="#e6e6e6"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="30" y="30" rx="10" ry="10" width="150" height="91" />
        <rect x="30" y="136" rx="5" ry="5" width="150" height="15" />
        <rect x="30" y="157" rx="5" ry="5" width="93" height="15" />
        <rect x="30" y="195" rx="5" ry="5" width="80" height="24" />
        <rect x="146" y="191" rx="5" ry="5" width="32" height="32" />
    </ContentLoader>
)

export default CardLoader;