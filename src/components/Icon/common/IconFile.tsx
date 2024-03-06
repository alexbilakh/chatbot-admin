import { FC } from 'react';

interface IconFileProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconFile: FC<IconFileProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="File">
                <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.33337 9C3.33337 6.59863 3.81977 5.17782 4.66548 4.33211C5.51119 3.4864 6.932 3 9.33337 3H13.3334V6.00003C13.3334 7.55543 13.5797 8.91058 14.5013 9.83214C15.4228 10.7537 16.778 11 18.3334 11H21.3334V15C21.3334 17.4014 20.847 18.8222 20.0013 19.6679C19.1556 20.5136 17.7347 21 15.3334 21H9.33337C6.932 21 5.51119 20.5136 4.66548 19.6679C3.81977 18.8222 3.33337 17.4014 3.33337 15V9ZM23.3324 9.95656C23.3213 9.69543 23.21 9.46023 23.036 9.28839L15.0451 1.2975C14.8637 1.11383 14.6119 1 14.3334 1H14.3332H9.33337C6.73474 1 4.65556 1.5136 3.25127 2.91789C1.84698 4.32218 1.33337 6.40137 1.33337 9V15C1.33337 17.5986 1.84698 19.6778 3.25127 21.0821C4.65556 22.4864 6.73474 23 9.33337 23H15.3334C17.932 23 20.0112 22.4864 21.4155 21.0821C22.8198 19.6778 23.3334 17.5986 23.3334 15V10.0079V10C23.3334 9.98545 23.3331 9.97096 23.3324 9.95656ZM15.3334 6.00003V4.41424L19.9192 9.00003H18.3334C16.8888 9.00003 16.2439 8.74636 15.9155 8.41792C15.587 8.08948 15.3334 7.44463 15.3334 6.00003ZM6.33337 13C6.33337 12.4477 6.78109 12 7.33337 12H13.3334C13.8857 12 14.3334 12.4477 14.3334 13C14.3334 13.5523 13.8857 14 13.3334 14H7.33337C6.78109 14 6.33337 13.5523 6.33337 13ZM7.33337 16C6.78109 16 6.33337 16.4477 6.33337 17C6.33337 17.5523 6.78109 18 7.33337 18H11.3334C11.8857 18 12.3334 17.5523 12.3334 17C12.3334 16.4477 11.8857 16 11.3334 16H7.33337Z"
                    fill="white"
                />
            </g>
        </svg>
    );
};

export default IconFile;
