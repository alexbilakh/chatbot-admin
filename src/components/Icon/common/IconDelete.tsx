import { FC } from 'react';

interface IconDeleteProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconDelete: FC<IconDeleteProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Delete">
                <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.70612 3.82608L9.5936 4.49607C10.0557 4.48535 10.5179 4.48 10.98 4.48C12.1236 4.48 13.2683 4.49973 14.4128 4.53879L14.293 3.83092C14.2535 3.58853 14.2264 3.43437 14.1885 3.30732C14.1537 3.19114 14.1252 3.1546 14.1172 3.14541C14.1149 3.14249 14.0914 3.11313 13.9914 3.07954C13.8746 3.04035 13.6655 3 13.31 3H10.69C10.33 3 10.1182 3.03879 9.99978 3.07715C9.94364 3.09533 9.9136 3.11177 9.89997 3.12038C9.88742 3.12829 9.88312 3.13307 9.88128 3.13516C9.87778 3.13913 9.85053 3.17061 9.81534 3.28767C9.77665 3.4164 9.74857 3.57404 9.70612 3.82608ZM7.73382 3.49438L7.55179 4.57825C6.68147 4.62814 5.8112 4.69703 4.94099 4.78491L2.90244 4.98477C2.35279 5.03865 1.9509 5.52792 2.00478 6.07757C2.05867 6.62722 2.54793 7.02911 3.09758 6.97522L5.13758 6.77522L5.13758 6.77523L5.14051 6.77493C7.08729 6.57829 9.03374 6.48 10.98 6.48C14.2862 6.48 17.6033 6.64828 20.9014 6.97512C21.451 7.02959 21.9407 6.6282 21.9951 6.07861C22.0496 5.52902 21.6482 5.03933 21.0986 4.98487C19.5547 4.83187 18.0064 4.71292 16.4565 4.62901L16.2665 3.50614L16.2559 3.44045C16.1919 3.03856 16.0836 2.35992 15.6278 1.83459C15.087 1.21137 14.2752 1 13.31 1H10.69C9.7398 1 8.92623 1.19432 8.38123 1.81234C7.92488 2.32983 7.81368 3.00799 7.74676 3.41612L7.73382 3.49438ZM6.14792 9.07559C6.11235 8.52445 5.63672 8.10651 5.08559 8.14208C4.53445 8.17766 4.1165 8.65328 4.15208 9.20442L4.80206 19.2744L4.80423 19.3054C4.83025 19.6771 4.86017 20.1047 4.94093 20.5057C5.02562 20.9262 5.1783 21.388 5.49693 21.8029C6.17016 22.6794 7.29425 23 8.79 23H15.21C16.7058 23 17.8298 22.6794 18.5031 21.8029C18.8217 21.388 18.9744 20.9262 19.0591 20.5057C19.1398 20.1048 19.1697 19.6773 19.1958 19.3057L19.1958 19.3055L19.1958 19.3054L19.1976 19.2799L19.8479 9.20442C19.8835 8.65328 19.4656 8.17766 18.9144 8.14208C18.3633 8.10651 17.8877 8.52445 17.8521 9.07559L17.2024 19.1401L17.2023 19.1427C17.1738 19.5489 17.1507 19.8513 17.0984 20.1109C17.0481 20.3607 16.9833 20.4982 16.9169 20.5846C16.8202 20.7106 16.5042 21 15.21 21H8.79C7.49575 21 7.17983 20.7106 7.08306 20.5846C7.0167 20.4982 6.95188 20.3607 6.90157 20.1109C6.8493 19.8513 6.82621 19.5489 6.79775 19.1428L6.14792 9.07559ZM9.33002 16.5C9.33002 15.9477 9.77773 15.5 10.33 15.5H13.66C14.2123 15.5 14.66 15.9477 14.66 16.5C14.66 17.0523 14.2123 17.5 13.66 17.5H10.33C9.77773 17.5 9.33002 17.0523 9.33002 16.5ZM9.5 11.5C8.94772 11.5 8.5 11.9477 8.5 12.5C8.5 13.0523 8.94772 13.5 9.5 13.5H14.5C15.0523 13.5 15.5 13.0523 15.5 12.5C15.5 11.9477 15.0523 11.5 14.5 11.5H9.5Z"
                    fill="#E7515A"
                />
            </g>
        </svg>
    );
};

export default IconDelete;