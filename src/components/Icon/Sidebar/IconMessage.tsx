import { FC } from 'react';

interface IconMessageProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconMessage: FC<IconMessageProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="vuesax/linear/message-text">
                <g id="message-text">
                    <path
                        id="Vector"
                        d="M7.5 18H7C3 18 1 17 1 12V7C1 3 3 1 7 1H15C19 1 21 3 21 7V12C21 16 19 18 15 18H14.5C14.19 18 13.89 18.15 13.7 18.4L12.2 20.4C11.54 21.28 10.46 21.28 9.8 20.4L8.3 18.4C8.14 18.18 7.77 18 7.5 18Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path id="Vector_2" d="M6 7H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Vector_3" d="M6 12H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
        </svg>
    );
};

export default IconMessage;
