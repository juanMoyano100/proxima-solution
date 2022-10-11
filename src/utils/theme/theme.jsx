import "./styles.css";

import React from "react";

const Theme = ({ children }) => {
    return (
        <div className="app">
            {children}
        </div>
    );
}

export default Theme;

