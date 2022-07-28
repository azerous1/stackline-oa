
import React from "react";

const PUBLIC_URL = process.env.PUBLIC_URL;

function Header() {
    return (
        <header>
            <img alt='stackline-logo' src={PUBLIC_URL + '/assets/stackline_logo.svg'} />
        </header>
    );
}

export default Header;