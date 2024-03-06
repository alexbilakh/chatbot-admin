import { FC } from 'react';

interface IconKayaProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconKaya: FC<IconKayaProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="67" height="22" viewBox="0 0 67 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="KAIA">
                <path
                    id="Vector"
                    d="M49.2057 21.4328L56.0317 0.567177H59.4299L66.2559 21.4328H64.2588L62.4703 15.8885H52.9913L51.2028 21.4328H49.2057ZM53.5279 14.1597H61.9337L57.9097 1.69988H57.5519L53.5279 14.1597Z"
                    fill="#C87CFF"
                />
                <path id="Vector_2" d="M41.5054 21.4328V0.567177H43.4131V21.4328H41.5054Z" fill="#C87CFF" />
                <path
                    id="Vector_3"
                    d="M18.6746 21.4328L25.5006 0.567177H28.8987L35.7248 21.4328H33.7276L31.9392 15.8885H22.4602L20.6717 21.4328H18.6746ZM22.9967 14.1597H31.4026L27.3785 1.69988H27.0208L22.9967 14.1597Z"
                    fill="#C87CFF"
                />
                <path id="Vector_4" d="M0 21.4328V0.567169H1.90772V9.98652H2.26541L11.9232 0.567169H14.606L3.81543 10.8808L14.9637 21.4328H12.2511L2.26541 11.8346H1.90772V21.4328H0Z" fill="#C87CFF" />
            </g>
        </svg>
    );
};

export default IconKaya;
