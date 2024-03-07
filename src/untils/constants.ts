export const getStaticURL = () => process.env.NEXT_PUBLIC_STATIC_URL;

export enum THEME {
    LIGHT = "light",
    DARK = "dark",
}

export const HEADER_DATA = [
    {
        label: "TRANG CHỦ",
        link: "/",
    },
    {
        label: "DỊCH VỤ",
        link: "/",
        list: [
          {
            label: "",
            link: "/"
          },
          {
            label: "",
            link: "/"
          }
        ]
    },
    {
        label: "LIÊN HỆ",
        link: "/",
    }
] 

export const FOOTER_DATA = [
    {
      page: "explore",
      title: "Khám phá",
      itemFooter: [
        {
          label: "Về chúng tôi",
          link: "/",
        }
      ],
    },
    {
      page: "help",
      title: "Hỗ trợ",
      itemFooter: [
        {
          label: "FAQ",
          link: "/",
        },
        {
          label: "Dịch vụ",
          link: "/",
        },
        {
            label: "Tư vấn",
            link: "/",
          },
      ],
    },
];

export const CONTACT_DATA = [
    {
        label: "1234567890",
        d: ["M11.9523 0.61084H12.0474C16.2958 0.730626 19.3252 1.33652 21.1359 2.42857C23.0452 3.58403 23.9999 4.76064 23.9999 5.95823C23.7462 7.03618 23.2566 7.57517 22.5309 7.57517C22.4886 7.57518 22.4428 7.57165 22.3935 7.5646L18.0924 6.08507C17.6696 5.95827 17.4583 5.74338 17.4583 5.44042C17.4583 5.30657 17.5005 5.15157 17.5851 4.97542C18.0642 4.47522 18.3037 4.11238 18.3037 3.88691C18.3037 3.72489 18.1839 3.63329 17.9444 3.61215H6.06601C5.82646 3.63329 5.70669 3.72488 5.70671 3.88691C5.7067 4.11238 5.94624 4.4752 6.42532 4.97542C6.50986 5.14452 6.55213 5.29951 6.55214 5.44042C6.55213 5.74338 6.33725 5.95826 5.90748 6.08507L1.60633 7.5646C1.55701 7.57165 1.51122 7.57518 1.46895 7.57517C0.750316 7.57518 0.260666 7.03621 0 5.95823C-1.503e-06 4.76053 0.958166 3.58394 2.8745 2.42857C4.67811 1.35065 7.704 0.744758 11.9523 0.61084ZM14.4991 4.97542V4.18282H16.0209V5.78909C16.0209 6.3175 16.8698 6.78248 18.5677 7.18406C20.1952 7.85337 21.0089 9.19553 21.0089 11.2105V16.3888H2.99088V11.2105C2.99087 9.19553 3.80814 7.85334 5.44258 7.18406C7.13346 6.78248 7.9789 6.31748 7.9789 5.78909V4.18282H9.51122V4.97542H14.4991ZM7.70385 10.7561C7.70385 11.9327 8.11952 12.9331 8.95088 13.7575C9.78223 14.5818 10.7791 14.9939 11.9416 14.9939C13.1252 14.9939 14.1292 14.5818 14.9534 13.7575C15.7777 12.9332 16.1899 11.9327 16.1899 10.7561C16.1899 9.58661 15.7795 8.58624 14.9587 7.75478C14.1379 6.92344 13.1323 6.50776 11.9416 6.50775C10.765 6.50776 9.76464 6.92344 8.94024 7.75478C8.11593 8.58614 7.70385 9.58664 7.70385 10.7561ZM14.3195 10.7456C14.3195 11.4008 14.0887 11.9609 13.6273 12.4259C13.1658 12.8909 12.6039 13.1234 11.9417 13.1234C11.2864 13.1234 10.7281 12.8909 10.2666 12.4259C9.80507 11.9609 9.57435 11.4008 9.57435 10.7456C9.57433 10.0763 9.80507 9.51087 10.2666 9.04942C10.728 8.58795 11.2864 8.35722 11.9417 8.35721C12.6039 8.35722 13.1658 8.58795 13.6273 9.04942C14.0887 9.5109 14.3195 10.0763 14.3195 10.7456Z"],
    },
    {
        label: "Abc đường số 1, Phường 2, Quận 3, Thành phố Hồ Chí Minh",
        d: ["M12 14C12.55 14 13.0208 13.8042 13.4125 13.4125C13.8042 13.0208 14 12.55 14 12C14 11.45 13.8042 10.9792 13.4125 10.5875C13.0208 10.1958 12.55 10 12 10C11.45 10 10.9792 10.1958 10.5875 10.5875C10.1958 10.9792 10 11.45 10 12C10 12.55 10.1958 13.0208 10.5875 13.4125C10.9792 13.8042 11.45 14 12 14ZM12 24C9.31667 21.7167 7.3125 19.5958 5.9875 17.6375C4.6625 15.6792 4 13.8667 4 12.2C4 9.7 4.80417 7.70833 6.4125 6.225C8.02083 4.74167 9.88333 4 12 4C14.1167 4 15.9792 4.74167 17.5875 6.225C19.1958 7.70833 20 9.7 20 12.2C20 13.8667 19.3375 15.6792 18.0125 17.6375C16.6875 19.5958 14.6833 21.7167 12 24Z"],
    },
    {
        label: "email@gmail.com",
        d: ["M4 20.5C3.45 20.5 2.97917 20.3042 2.5875 19.9125C2.19583 19.5208 2 19.05 2 18.5V6.5C2 5.95 2.19583 5.47917 2.5875 5.0875C2.97917 4.69583 3.45 4.5 4 4.5H20C20.55 4.5 21.0208 4.69583 21.4125 5.0875C21.8042 5.47917 22 5.95 22 6.5V18.5C22 19.05 21.8042 19.5208 21.4125 19.9125C21.0208 20.3042 20.55 20.5 20 20.5H4ZM12 13.5L20 8.5V6.5L12 11.5L4 6.5V8.5L12 13.5Z"],
    }
];


export const SERVICE_DATA = [
  {
    imageUrl: "treatment-of-melasma.svg",
    name: "Điều trị nám da",
    content: "Mang  lại vẽ đẹp tự nhiên mà không lo sợ nám quay lại",
  },
  {
    imageUrl: "acne-treatment.svg",
    name: "Điều trị mụn",
    content: "Đánh bay mụn trên mặt giúp bạn tự tin hơn",
  },
  {
    imageUrl: "skin-rejuvenation.svg",
    name: "Trẻ hoá làn da",
    content: "Dịch vụ trẻ hoá da, giúp bạn sở hữu làn da trẻ hơn 10 tuổi",
  },
  {
    imageUrl: "hair-removal-service.svg",
    name: "Dịch vụ triệt lông",
    content: "Dịch vụ triệt lông vĩnh viên mang lại cho bạn làn da sáng hơn",
  }
];

export const CORES_VALUE_DATA = [
  {
    name: "Chuyên nghiệp",
    content: "Lorem ipsum dolor sit amet consectetur. Mauris cursus urna elementum nunc. Donec cras quis faucibus elementum ac sollicitudin." 
  },
  {
    name: "Kinh nghiệm",
    content: "Lorem ipsum dolor sit amet consectetur. Mauris cursus urna elementum nunc. Donec cras quis faucibus elementum ac sollicitudin." 
  },
  {
    name: "Uy tín",
    content: "Lorem ipsum dolor sit amet consectetur. Mauris cursus urna elementum nunc. Donec cras quis faucibus elementum ac sollicitudin." 
  }
];

export const IMAGES_LADI = ["landing-page-2", "landing-page-3", "landing-page-4", "landing-page-5", "landing-page-6", "landing-page-7", "landing-page-8", "landing-page-9"];