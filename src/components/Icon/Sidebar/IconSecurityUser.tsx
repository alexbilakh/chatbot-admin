import { FC } from 'react';

interface IconSecurityUserProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconSecurityUser: FC<IconSecurityUserProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className={className}>
            <g id="vuesax/linear/security-user">
                <g id="security-user">
                    <g id="Group">
                        <path
                            id="Vector"
                            d="M10.49 2.23L5.50003 4.09999C4.35003 4.52999 3.41003 5.88998 3.41003 7.11998V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.11998C20.61 5.88998 19.67 4.52999 18.52 4.09999L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <g id="Group_2">
                        <path
                            id="Vector_2"
                            d="M12.0001 10.92C11.9601 10.92 11.9101 10.92 11.8701 10.92C10.9301 10.89 10.1801 10.11 10.1801 9.16C10.1801 8.19 10.9701 7.39999 11.9401 7.39999C12.9101 7.39999 13.7001 8.19 13.7001 9.16C13.6901 10.12 12.9401 10.89 12.0001 10.92Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            id="Vector_3"
                            d="M10.01 13.72C9.05004 14.36 9.05004 15.41 10.01 16.05C11.1 16.78 12.89 16.78 13.98 16.05C14.94 15.41 14.94 14.36 13.98 13.72C12.9 12.99 11.11 12.99 10.01 13.72Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default IconSecurityUser;
