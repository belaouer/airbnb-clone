import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

import { useState } from "react";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };
  const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div
        onClick={() => router.push("/")}
        className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          objectFit='contain'
          layout='fill'
          objectPosition='left'
          alt='image'
        />
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer md:mr-2 ' />
      </div>
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 rounded-full border-2 shadow-sm p-2'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-400'
              value={numberOfGuests}
              min={1}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button onClick={handleSearch} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
