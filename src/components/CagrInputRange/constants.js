import React from "react";

export const marks = [
    // {
    //     value: 0,
    //     label: <img src="/icons/bear.svg" alt="Bear" style={{ width: '20px', height: '20px' }} />,
    // },

    {
        value: 20,
        label:
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.88721 16.6621C5.88721 16.9717 6.01016 17.2687 6.22903 17.4877C6.4479 17.7067 6.74478 17.8298 7.0544 17.83H7.13622C7.44596 17.83 7.74301 17.7069 7.96203 17.4879C8.18105 17.2689 8.30409 16.9719 8.30409 16.6621V14.4082L5.88721 14.7355V16.6621Z"
                    fill="#F1B314"/>
                <path
                    d="M23.9102 6.38868C23.7377 6.1858 23.4666 6.44751 22.9432 6.29671C22.1006 6.05394 22.1587 5.19443 21.1018 4.50061C20.7424 4.27031 20.3445 4.10653 19.9271 4.0171C19.7897 3.98424 19.6507 3.95874 19.5106 3.94068C19.5035 3.68421 19.3948 3.44106 19.2084 3.26472C19.0221 3.08837 18.7733 2.99328 18.5168 3.00037C18.2604 3.00745 18.0172 3.11613 17.8409 3.30249C17.6645 3.48885 17.5694 3.73763 17.5765 3.99411C17.5765 4.02251 17.5765 4.05091 17.5812 4.07931C16.1118 4.25649 14.5334 3.79123 9.40684 3.76418C5.87686 3.74457 5.07551 3.95556 4.31947 4.31667C3.94145 4.49723 1.908 5.46628 1.3271 7.27388C1.15451 7.84341 1.04764 8.43083 1.00859 9.02467C0.976024 9.67813 1.03613 10.3329 1.18712 10.9695L1.94654 10.7396C2.07097 11.2495 2.32456 11.9683 2.89328 12.6013V16.6621C2.89328 16.9719 3.01632 17.2689 3.23534 17.4879C3.45436 17.707 3.75141 17.83 4.06115 17.83H4.14297C4.45259 17.8298 4.74947 17.7067 4.96834 17.4877C5.18722 17.2687 5.31017 16.9718 5.31017 16.6621V14.319L5.65708 14.2709L8.46077 13.895C9.12417 13.8206 9.77877 13.7158 10.3969 13.617L10.76 13.5589L11.3639 13.4595V16.6621C11.3639 16.9718 11.4868 17.2687 11.7057 17.4877C11.9246 17.7067 12.2214 17.8298 12.5311 17.83H12.6129C12.9226 17.83 13.2197 17.707 13.4387 17.4879C13.6577 17.2689 13.7808 16.9719 13.7808 16.6621V12.9482C13.9737 12.8955 14.1655 12.8387 14.3562 12.7778V16.6621C14.3562 16.9719 14.4793 17.2689 14.6983 17.4879C14.9173 17.707 15.2144 17.83 15.5241 17.83H15.6059C15.9157 17.83 16.2127 17.707 16.4317 17.4879C16.6508 17.2689 16.7738 16.9719 16.7738 16.6621V11.6701C17.0979 11.4608 17.4051 11.2266 17.6928 10.9695C18.3238 10.4042 19.1258 9.4818 20.5432 9.16127C21.4514 8.95839 21.9085 9.16127 22.6192 8.73659C23.6627 8.11918 24.2321 6.7667 23.9102 6.38868Z"
                    fill="#F1B314"/>
            </svg>,
    },
    {
        value: 29,
        label:
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.9981 9.30279C23.9871 9.18309 23.9348 9.07014 23.8493 8.98141C23.7608 8.90397 23.6354 8.86496 23.4958 8.82712C23.434 8.80922 23.3712 8.79445 23.3077 8.78287C22.8774 8.70718 22.0991 7.84609 22.0991 7.84609C21.4567 7.19634 20.4818 6.90873 19.7631 6.9099C19.2098 6.9099 18.8767 7.07932 18.099 7.42981C16.7841 8.02309 15.4556 8.60297 14.0571 9.00761C12.4839 9.46406 10.7375 9.56769 9.1004 9.71266C7.75473 9.82911 5.90866 10.0346 4.57836 9.42156C4.21579 9.25904 3.89454 9.0243 3.63657 8.73338C3.3458 8.40211 3.18904 8.00562 3.09437 7.58817C2.82941 6.41385 2.66405 5.2011 2.6911 4C2.52143 4.27713 -0.0752456 8.63266 2.01119 11.4593C2.20626 11.7243 2.4341 11.9663 2.68987 12.1801C2.77087 12.283 2.81542 12.4075 2.81712 12.5358C2.81479 12.6026 2.80195 12.6688 2.779 12.732C2.72759 12.887 2.64813 13.0324 2.54417 13.1617C1.44585 14.55 0.903618 16.2625 1.01408 17.994C1.01408 18.0074 2.42061 17.994 2.55094 17.994H3.71895C3.88739 17.994 3.91505 17.994 3.90337 17.8252C3.89538 17.6942 3.64764 17.5964 3.54743 17.5341L3.01076 17.1848L4.04046 15.7875L5.85579 17.9999H8.56066C8.7291 17.9999 8.75676 17.9999 8.74508 17.831C8.73586 17.682 8.53054 17.5981 8.39222 17.5306C8.37132 17.5201 8.35165 17.5102 8.33443 17.5003C7.97481 17.2896 7.69879 17.1038 7.51314 16.7493C7.32975 16.3765 7.17864 15.9902 7.0613 15.5942C6.98569 15.3613 6.91561 15.1237 6.8486 14.8874C7.47497 15.0142 8.11379 15.0776 8.7543 15.0766C9.84916 15.0766 10.7356 14.8792 11.8846 14.5276C11.4878 15.649 11.445 16.8558 11.7616 17.9999H14.4665C14.6343 17.9999 14.6626 17.9999 14.6509 17.831C14.6423 17.7 14.3946 17.6022 14.2944 17.5399L13.7577 17.1906C13.8245 16.9368 13.8913 16.6827 13.9581 16.4285L14.9903 17.9882H17.6951C17.8636 17.9882 17.8912 17.9882 17.8795 17.8194C17.8716 17.6884 17.6238 17.5906 17.5236 17.5254L16.9869 17.176C16.8154 16.91 16.5818 16.528 16.3316 16.0553C15.924 15.2856 15.7206 14.9008 15.7046 14.5928C15.6468 13.4557 17.6447 12.53 17.9791 12.3804C19.6721 12.0502 20.1553 12.3128 21.5311 11.6695C23.4042 10.7915 24.0399 9.6067 23.9981 9.30279Z"
                    fill="#F1B314"/>
            </svg>,
    },
    {
        value: 38,
        label:
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.317 6.71674C22.3541 6.7 22.3881 6.67754 22.4176 6.65027C22.5696 6.50803 22.6765 6.3093 22.7917 6.13982C22.8722 6.02084 23.0319 5.87063 22.9944 5.71709C22.9652 5.59879 22.8729 5.49909 22.7994 5.40404L22.4732 4.97733L21.8138 4.12524L20.4951 2.42239L19.7178 1.41743C19.3368 1.22235 18.9193 1.10149 18.4893 1.06184C18.5149 1.04875 18.5413 1.0372 18.5684 1.02728C18.9536 0.894346 19.5845 1.11966 20.2689 1.28051C20.5176 1.34906 20.7738 1.38943 21.0323 1.40081C21.7618 1.40081 22.3156 0.775371 22.6925 0.244975C22.2996 0.480428 21.857 0.629354 21.3967 0.68099C20.8838 0.732833 20.3945 0.574645 19.9461 0.348662C19.3812 0.0608654 18.7163 -0.0833645 18.0916 0.0502315C17.5863 0.158571 17.2525 0.502199 16.9166 0.827881C16.6253 1.11132 16.3795 1.43453 16.1871 1.78698C16.1644 1.81231 16.1398 1.83608 16.1136 1.8581C15.9439 1.98834 15.7327 2.05874 15.5153 2.0575C15.2585 2.06813 15.0989 1.99103 14.7872 1.87605C14.7872 1.87605 14.3972 1.73447 13.8676 1.59888C13.6441 1.54238 13.2756 1.48124 10.5945 2.0123L10.5667 2.01761C10.1197 2.10668 6.11577 2.90759 3.02307 3.82814C2.48518 3.98832 1.95146 4.16911 1.46076 4.4383C1.03878 4.67026 0.624433 4.95141 0.33779 5.33492C0.0296315 5.74567 -0.0140943 6.21559 0.00325702 6.70876C0.0150559 7.05106 0.00672711 7.39535 0.00742116 7.73831C0.00742116 8.46057 0.00742116 9.18306 0.00742116 9.90576V12.1151C0.00742116 12.2198 0.0508556 12.3202 0.128171 12.3942C0.205485 12.4683 0.310348 12.5099 0.419688 12.5099H0.605693C0.715033 12.5099 0.819895 12.4683 0.89721 12.3942C0.974525 12.3202 1.01796 12.2198 1.01796 12.1151V6.48743C1.02381 6.43017 1.05028 6.37664 1.09283 6.33602C1.13537 6.29539 1.19135 6.2702 1.25116 6.26477C1.36707 6.26477 1.49338 6.39172 1.47812 6.55656V15.1572C1.47812 15.3806 1.57074 15.5949 1.73563 15.7529C1.90053 15.9109 2.12419 15.9998 2.35748 16H2.41786C2.53361 16.0003 2.64827 15.9787 2.75528 15.9364C2.8623 15.8942 2.95956 15.8321 3.0415 15.7539C3.12344 15.6756 3.18845 15.5826 3.23281 15.4802C3.27717 15.3778 3.3 15.2681 3.3 15.1572V10.8044C3.50266 10.7824 3.72754 10.7432 3.97253 10.7047C3.95026 10.7802 3.93882 10.8582 3.93853 10.9366V15.1572C3.93853 15.3806 4.03115 15.5949 4.19604 15.7529C4.36094 15.9109 4.5846 15.9998 4.81789 16H4.87758C4.99315 16 5.10759 15.9782 5.21436 15.9358C5.32113 15.8935 5.41815 15.8314 5.49987 15.7531C5.58159 15.6749 5.64642 15.582 5.69064 15.4797C5.73487 15.3775 5.75763 15.2679 5.75763 15.1572V10.9366C5.75742 10.8284 5.73551 10.7212 5.69309 10.6209C6.02031 10.6554 6.34291 10.7222 6.65574 10.8203C7.66627 11.1347 7.49831 11.4265 8.68722 11.9064C9.52553 12.2539 10.4215 12.4565 11.3336 12.5046V15.1559C11.3336 15.3793 11.4263 15.5936 11.5912 15.7516C11.7561 15.9096 11.9797 15.9985 12.213 15.9987H12.2734C12.389 15.9989 12.5036 15.9774 12.6105 15.9352C12.7174 15.8931 12.8146 15.8311 12.8965 15.753C12.9785 15.6749 13.0435 15.582 13.0879 15.4798C13.1324 15.3776 13.1553 15.2679 13.1555 15.1572V12.3391C13.2728 12.3112 13.3908 12.2799 13.5102 12.244C13.6067 12.2148 13.701 12.1829 13.7934 12.1503V15.1572C13.7934 15.3807 13.8861 15.5951 14.0511 15.7531C14.2162 15.9112 14.44 16 14.6734 16H14.7331C14.9665 16 15.1904 15.9112 15.3554 15.7531C15.5204 15.5951 15.6132 15.3807 15.6132 15.1572V11.1121C16.0278 10.7635 16.4147 10.3858 16.7708 9.98219C17.6313 9.03939 18.2815 7.93812 18.6816 6.74598H19.1542C19.1542 6.74266 19.1542 6.74 19.1542 6.73668H21.7972C21.9741 6.73601 22.1615 6.78785 22.317 6.71674Z"
                    fill="#F1B314"/>
            </svg>,
    },

    {
        value: 0,
        label: <span>0</span>,
    },
    {
        value: 10,
        label: <span>10</span>,
    },
    {
        value: 20,
        label: <span>20</span>,
        type: 'default',
    },
    {
        value: 30,
        label: <span>30</span>,
    },
    {
        value: 40,
        label: <span>40</span>,
    },
    {
        value: 50,
        label: <span>50</span>,
    },
    {
        value: 60,
        label: <span>60</span>,
    },
    {
        value: 70,
        label: <span>70</span>,
    },
    {
        value: 80,
        label: <span>80</span>,
    },
    {
        value: 90,
        label: <span>90</span>,
    },
    {
        value: 100,
        label: <span>100</span>,
    },
];