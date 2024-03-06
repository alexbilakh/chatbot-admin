import { FC } from 'react';

interface IconQuestionProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconQuestion: FC<IconQuestionProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="Question">
                <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.08211 4.51228C3.41989 5.1745 3 6.15742 3 7.43018V13.4302C3 14.703 3.41989 15.6859 4.08211 16.3481C4.74433 17.0104 5.72725 17.4302 7 17.4302C7.55228 17.4302 8 17.878 8 18.4302V20.555L12.4462 17.5976C12.6103 17.4885 12.8029 17.4302 13 17.4302H17C18.2728 17.4302 19.2557 17.0104 19.9179 16.3481C20.5801 15.6859 21 14.703 21 13.4302V7.43018C21 6.15742 20.5801 5.1745 19.9179 4.51228C19.2557 3.85006 18.2728 3.43018 17 3.43018H7C5.72725 3.43018 4.74433 3.85006 4.08211 4.51228ZM2.66789 3.09807C3.75567 2.01029 5.27275 1.43018 7 1.43018H17C18.7272 1.43018 20.2443 2.01029 21.3321 3.09807C22.4199 4.18585 23 5.70293 23 7.43018V13.4302C23 15.1575 22.4199 16.6746 21.3321 17.7623C20.2443 18.8501 18.7272 19.4302 17 19.4302H13.3022L9.10469 22.2222L9.10382 22.2228C7.78379 23.1019 6 22.1639 6 20.5602V19.3625C4.68857 19.1805 3.5402 18.6346 2.66789 17.7623C1.58011 16.6746 1 15.1575 1 13.4302V7.43018C1 5.70293 1.58011 4.18585 2.66789 3.09807ZM9.33984 8.5202C9.33984 7.04797 10.5275 5.86017 11.9998 5.86017C13.4721 5.86017 14.6598 7.04797 14.6598 8.5202C14.6598 9.70386 13.8738 10.3248 13.4061 10.6444C13.217 10.7751 13.1198 10.8618 13.064 10.9367C13.0266 10.9869 12.9998 11.0397 12.9998 11.1502V11.3602C12.9998 11.9125 12.5521 12.3602 11.9998 12.3602C11.4475 12.3602 10.9998 11.9125 10.9998 11.3602V11.1502C10.9998 9.94105 11.8047 9.31971 12.2717 8.99729L12.2759 8.99438L12.2759 8.99439C12.4544 8.87244 12.5477 8.78813 12.6001 8.71738C12.6356 8.6694 12.6598 8.62051 12.6598 8.5202C12.6598 8.15244 12.3675 7.86017 11.9998 7.86017C11.6321 7.86017 11.3398 8.15244 11.3398 8.5202C11.3398 9.07249 10.8921 9.5202 10.3398 9.5202C9.78756 9.5202 9.33984 9.07249 9.33984 8.5202ZM11.9956 12.7502C11.4433 12.7502 10.9956 13.1979 10.9956 13.7502C10.9956 14.3025 11.4433 14.7502 11.9956 14.7502H12.0046C12.5569 14.7502 13.0046 14.3025 13.0046 13.7502C13.0046 13.1979 12.5569 12.7502 12.0046 12.7502H11.9956Z"
                    fill="white"
                />
            </g>
        </svg>
    );
};

export default IconQuestion;
