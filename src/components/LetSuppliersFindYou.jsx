import React from 'react';

const LetSuppliersFindYou = () => {
  return (
    <div className="suppliersbanner">
    <div className="container mx-auto flex flex-col text-center md:flex-row items-center justify-between 
                    px-4 sm:px-6 md:px-12 lg:px-20 xl:px-36 2xl:px-[157px]">
      <h2 className="supplier-banner__heading text-4xl font-semibold text-gray-800">
        Let Suppliers <span className="border-b-4 border-orange-500">Find You</span>
      </h2>
      <button className="supplier-banner__button mt-4 md:mt-0 px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
        Get Verified
      </button>
    </div>
  </div>
  );
};

export default LetSuppliersFindYou;
