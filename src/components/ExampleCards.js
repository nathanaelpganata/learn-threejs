import Link from "next/link";
import React from "react";

const ExampleCards = ({link, title}) => {
    return (
        <Link
            href={link}
            className="bg-white dark:bg-black px-6 py-4 rounded-xl shadow-sm shadow-white dark:shadow-black hover:brightness-50 transition-all duration-150 ease-in-out text-center"
        >
            {title}
        </Link>
    );
};

export default ExampleCards;
