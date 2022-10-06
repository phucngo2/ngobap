import React from "react";

const ModalInfo = () => {
    return (
        <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="crypto-modal"
                    >
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                            Connect wallet
                        </h3>
                    </div>

                    <div className="p-6">
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Connect with one of our available wallet providers
                            or create a new one.
                        </p>
                        <ul className="my-4 space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        MetaMask
                                    </span>
                                    <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                                        Popular
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Coinbase Wallet
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Opera Wallet
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        WalletConnect
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Fortmatic
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalInfo;
