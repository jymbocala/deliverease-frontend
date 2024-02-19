import React from 'react';
import Logo from "../assets/images/deliverease-logo.png";

const Footer = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between"> 
            <div className="flex-grow">  
            </div>
            <footer className="bg-base-100 text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img 
                            src={Logo} 
                            alt="DeliverEase Logo" 
                            className="w-24 h-24 text-white p-2 object-cover transform scale-150 mt-1" 
                        /> 
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 DeliverEase —
                        <a href="#" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                            @JymBocala & @SamGifford
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 .297a12 12 0 00-3.84 23.373c.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.47 11.47 0 016 .017c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.604-.015 2.904-.015 3.3 0 .315.21.69.825.57A12.01 12.01 0 0012 .297"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.079 20.561H3.559V9h3.52v11.561zm-1.767-13.02a2.029 2.029 0 01-2.031-2.021 2.03 2.03 0 012.031-2.021c1.12 0 2.03.909 2.03 2.021a2.029 2.029 0 01-2.03 2.021zm16.261 13.02h-3.514v-5.569c0-1.328-.026-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.076V9h3.386v1.578h.048c.472-.894 1.624-1.837 3.343-1.837 3.573 0 4.226 2.353 4.226 5.42v6.4h-.001z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;