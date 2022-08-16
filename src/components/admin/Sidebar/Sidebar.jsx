import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import {
  HomeIcon,
  CategoryIcon,
  PhotoIcon,
  PromoIcon,
  BrandIcon,
  ProductIcon,
  OrderIcon,
  InventoryIcon,
  SalesIcon,
  AccountsIcon,
  ArrIcon,
  AdminIcon,
  UserIcon,
} from "./SidebarComponents";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const useDropdown = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div className="w-64 inset-0 order-1 p-1">
      <div className="py-6 px-3 h-[99vh] rounded-md border border-black">
        <ul className="space-y-6 py-16">
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <HomeIcon />
            <span className="text-lg">HOME</span>
          </li>

          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <CategoryIcon />
            <span className="text-lg">CATEGORY</span>
          </li>

          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <PhotoIcon />
            <span className="text-lg">PHOTO</span>
          </li>
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <PromoIcon />
            <span className="text-lg">PROMO</span>
          </li>
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <BrandIcon />
            <span className="text-lg">BRAND</span>
          </li>
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <ProductIcon />
            <span className="text-lg">PRODUCT</span>
          </li>
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <OrderIcon />
            <span className="text-lg">ORDER</span>
          </li>
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <InventoryIcon />
            <span className="text-lg">INVENTORY</span>
          </li>
          <li className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
            <SalesIcon />
            <span className="text-lg">SALES</span>
          </li>
          <li
            className="flex items-center px-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2 relative"
            onClick={() => setOpen(!isOpen)}
            type="button"
          >
            <AccountsIcon />
            <span className="text-lg flex items-center">
              <p>ACCOUNT</p>
              <span
                className={`absolute right-2 ${
                  isOpen ? "origin-center rotate-180 " : ""
                }`}
              >
                <ArrIcon />
              </span>
            </span>
          </li>

          {isOpen && (
            <>
              <li className="flex items-center px-10 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
                <AdminIcon />
                <span className="text-lg">Admin</span>
              </li>
              <li className="flex items-center px-10 gap-4 cursor-pointer hover:bg-gray-200 rounded-lg p-2">
                <AdminIcon />
                <span className="text-lg">User</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
