import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Layout = ({ children, title }) => {
    return (
        <div className={`${styles.scene}`}>
            <title>{title}</title>
            <Link
                href="/"
                className="absolute text-white font-semibold"
                style={{
                    zIndex: 99999,
                    top: "1.5rem",
                    left: "2rem",
                }}
            >
                Back
            </Link>
            {children}
        </div>
    );
};

export default Layout;
