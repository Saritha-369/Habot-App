// Footer.jsx
import React from "react";
import habotLogoWhite from "../assets/img/habot-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10" style={{backgroundColor:'rgba(18, 53, 87, 1)'}}>
      <div className="container mx-auto max-w-[1140px] px-4">
      <hr className="border-t border-gray-500 mb-8"/>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img src={habotLogoWhite} alt="Logo" className="w-30 h-auto mb-2" />
            <p className="text-sm">&copy; Saritha</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-8 text-center md:text-left text-sm mb-6 md:mb-0">
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul>
                <li className="py-1">
                  <a href="#about" className="hover:underline footer-lists">
                    About
                  </a>
                </li>
                <li className="py-1">
                  <a href="#faq" className=" hover:underline footer-lists">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Terms</h5>
              <ul>
                <li className="py-1">
                  <a href="#privacy" className="hover:underline footer-lists">
                    Data Privacy
                  </a>
                </li>
                <li className="py-1">
                  <a href="#terms" className="hover:underline footer-lists">
                    Terms
                  </a>
                </li>
                <li className="py-1">
                  <a href="#accessibility" className="hover:underline footer-lists">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Related</h5>
              <ul>
                <li className="py-1">
                  <a href="#first-buyer" className="hover:underline footer-lists">
                    First Buyer
                  </a>
                </li>
                <li className="py-1">
                  <a href="#feedback" className="hover:underline footer-lists">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

       

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#linkedin"
              className="text-white hover:text-gray-400 flex items-center justify-center rounded-full p-2 border border-white"
              aria-label="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.227647 17.4706H4.08494V6.03954H0.227647V17.4706ZM2.18118 0.529419C0.861882 0.529419 0 1.38283 0 2.50412C0 3.60318 0.838588 4.47883 2.13141 4.47883H2.15788C3.50259 4.47883 4.33906 3.60318 4.33906 2.50412C4.31471 1.38177 3.50259 0.529419 2.18118 0.529419ZM18 10.9144V17.4706H14.1406V11.3538C14.1406 9.81848 13.5836 8.77024 12.1849 8.77024C11.1187 8.77024 10.4876 9.47648 10.2049 10.1605C10.1044 10.404 10.0779 10.746 10.0779 11.0859V17.4706H6.22059C6.22059 17.4706 6.27353 7.11318 6.22059 6.03954H10.08V7.65954C10.0726 7.67224 10.0609 7.68389 10.0535 7.69765H10.08V7.65848C10.5935 6.8813 11.5073 5.77165 13.5572 5.77165C16.0941 5.77165 18 7.40436 18 10.9144Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#twitter"
              className="text-white hover:text-gray-400 flex items-center justify-center rounded-full p-2 border border-white"
              aria-label="Twitter"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1674 4.8629C16.1674 4.70004 16.1589 4.54662 16.152 4.38547C16.8771 3.87983 17.5034 3.24565 18 2.51433C17.324 2.80116 16.609 2.98547 15.8786 3.06119C16.6476 2.61943 17.2259 1.90861 17.502 1.06576C16.7751 1.48018 15.9825 1.76663 15.1586 1.91262C14.8134 1.5419 14.397 1.24469 13.9342 1.03878C13.4714 0.832879 12.9719 0.722523 12.4654 0.71433C11.9827 0.705666 11.503 0.793381 11.0546 0.972342C10.6061 1.1513 10.1978 1.41792 9.85367 1.75658C9.5095 2.09524 9.23634 2.49914 9.05017 2.94465C8.86399 3.39017 8.76855 3.86834 8.76943 4.35119C8.76943 4.63833 8.79943 4.91776 8.86629 5.19033C5.79429 5.00176 3.072 3.49576 1.25314 1.22004C0.922684 1.78538 0.749 2.42864 0.75 3.08347C0.75 4.37776 1.404 5.52719 2.39657 6.20004C1.80707 6.17472 1.2322 6.00867 0.72 5.71576V5.76633C0.720024 6.62542 1.01475 7.4585 1.55497 8.12648C2.09519 8.79446 2.8482 9.25691 3.68829 9.43661C3.37122 9.52101 3.04439 9.56309 2.71629 9.56176C2.48182 9.55777 2.24824 9.53194 2.01857 9.48462C2.24985 10.224 2.70704 10.8724 3.32586 11.3386C3.94468 11.8047 4.69403 12.0652 5.46857 12.0835C4.70231 12.6849 3.82467 13.1289 2.88615 13.3899C1.94762 13.6509 0.966758 13.7236 0 13.604C1.68343 14.704 3.65138 15.2884 5.66229 15.2858C12.4509 15.2858 16.1674 9.70233 16.1674 4.8629Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#facebook"
              className="text-white hover:text-gray-400 flex items-center justify-center rounded-full p-2 border border-white"
              aria-label="Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_76)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.60342 18V8.99061H12.6493L13.1338 6.00261H9.6042V4.5047C9.6042 3.72209 9.86559 2.98096 11.0098 2.98096H13.3044V0H10.0511C7.31585 0 6.57081 1.76165 6.57081 4.19478V6.00261H4.69568V8.99061H6.57081V18H9.60342Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_76">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="#instagram"
              className="text-white hover:text-gray-400 flex items-center justify-center rounded-full p-2 border border-white"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.05 13.032C16.05 14.892 14.61 16.4023 12.8409 16.4023H5.15916C3.39002 16.4023 1.95002 14.892 1.95002 13.032V4.96629C1.95002 3.108 3.39002 1.59771 5.15916 1.59771H12.8409C14.61 1.59771 16.05 3.108 16.05 4.96629V13.032ZM12.8409 0H5.15916C2.55002 0 0.428589 2.22771 0.428589 4.96629V13.032C0.428589 15.7723 2.55002 18 5.16002 18H12.84C15.45 18 17.5714 15.7723 17.5714 13.032V4.96629C17.5714 2.22771 15.45 0 12.84 0H12.8409Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.00003 12.798C8.10631 12.7973 7.24937 12.442 6.61733 11.8101C5.98529 11.1783 5.6298 10.3214 5.62889 9.4277C5.62957 8.53367 5.98491 7.67642 6.61692 7.04408C7.24894 6.41175 8.106 6.05598 9.00003 6.05484C9.89414 6.05575 10.7513 6.41145 11.3834 7.04383C12.0155 7.67622 12.3707 8.5336 12.3712 9.4277C12.37 10.3213 12.0145 11.1779 11.3824 11.8096C10.7504 12.4413 9.89361 12.7973 9.00003 12.798ZM9.00003 4.2857C6.16461 4.2857 3.85718 6.59141 3.85718 9.4277C3.85877 10.7913 4.40108 12.0985 5.36519 13.0628C6.32929 14.0271 7.63647 14.5696 9.00003 14.5714C11.8355 14.5714 14.1429 12.2623 14.1429 9.4277C14.1413 8.06429 13.5989 6.7572 12.6348 5.79321C11.6706 4.82921 10.3634 4.28706 9.00003 4.2857ZM12.858 2.57141C12.5203 2.57141 12.1869 2.70684 11.9495 2.94684C11.7112 3.18684 11.5715 3.5177 11.5715 3.85541C11.5715 4.19398 11.7112 4.5257 11.9486 4.7657C12.1869 5.00313 12.5203 5.14284 12.858 5.14284C13.1966 5.14284 13.5275 5.00313 13.7657 4.7657C14.0057 4.5257 14.1429 4.19398 14.1429 3.85627C14.143 3.68751 14.1098 3.52038 14.0453 3.36444C13.9808 3.2085 13.8861 3.06682 13.7668 2.94749C13.6475 2.82815 13.5058 2.73352 13.3499 2.66899C13.1939 2.60446 13.0268 2.5713 12.858 2.57141Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-500 mt-8"/>

      </div>
    </footer>
  );
};

export default Footer;
