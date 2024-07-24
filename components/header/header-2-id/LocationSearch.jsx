
'use client'

import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      name: "Bali",
      address: "Bali, Indonesia",
    },
    {
      id: 2,
      name: "Yogyakarta",
      address: "Yogyakarta, Indonesia",
    },
    {
      id: 3,
      name: "Medan",
      address: "Sumatera Utara, Indonesia",
    },
    {
      id: 4,
      name: "Bogor",
      address: "Jawa Barat, Indonesia",
    },
    {
      id: 5,
      name: "Batu",
      address: "Jawa Timur, Indonesia",
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc js-form-dd js-liverSearch">
        <div
          className="d-flex items-center"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <i className="text-20 icon-search text-white mr-15" />
          <div className="text-15 text-white ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Destinasi"
              className="text-white header-search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item.address}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
