import React, { useState } from 'react';
import informations from '../../../utils/informations.json';

interface SpanProps {
    span: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const SpanText: React.FC<SpanProps> = ({ span, icon, onClick }) => {
    const textColor = informations.span.color;
    const svgColor = informations.span.svgColor;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <span
            style={{
                color: isHovered ? informations.span.hoverColor : textColor,
                display: "flex",
                cursor: "pointer",
                transition: "color 0.3s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <span
                style={{
                    color: isHovered ? informations.span.hoverColor : svgColor,
                    transition: "color 0.3s ease",
                }}
            >
                {icon}
            </span>
            {span}
        </span>
    );
};

export default SpanText;
