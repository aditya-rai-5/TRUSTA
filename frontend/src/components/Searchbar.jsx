import { useState } from "react";
import searchIcon from "../assets/search.png"; // 512x512 image

export function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", query);
        setQuery("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md"
        >
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    text-gray-800
                    bg-white
                    border
                    border-gray-300
                    rounded-l-md
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
            />

            {/* Icon Button */}
            <button
                type="submit"
                className="
                    flex
                    items-center
                    justify-center
                    px-3
                    bg-blue-600
                    border
                    border-blue-600
                    rounded-r-md
                    hover:bg-blue-700
                    transition
                "
                aria-label="Search"
            >
                <img
                    src={searchIcon}
                    alt=""
                    className="w-5 h-5"
                />
            </button>
        </form>
    );
}
