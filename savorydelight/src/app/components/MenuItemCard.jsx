import React from "react";

const MenuItemCard = ({ image, name, price, description, onAdd }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-3 w-full max-w-[220px]">
      <img
        src={image}
        alt={name}
        className="w-full h-36 object-cover rounded-md"
      />

      <div className="mt-3">
        <h3 className="text-black font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">{description}</p>
        <p className="text-gray-900 mb-2">Rs. {price}.00</p>

        <button
          onClick={onAdd}
          className="bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-600 transition"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
