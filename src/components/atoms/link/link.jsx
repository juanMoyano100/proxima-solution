///link component 

import React from "react";
import "./link.styles.css";
import classnames from "classnames"

const Link = ({ href, children, variant }) => {
    const linkClasses = classnames('link', {
        [variant]: variant,
      })
    return (
        <a href={href} className={linkClasses}>{children}</a>
    )
}

export default Link;
