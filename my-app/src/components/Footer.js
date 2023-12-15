const React = require("react");

var currentYear = new Date().getFullYear();

export function Footer() {
    return <footer><p>@{currentYear}</p></footer>;
}

export default Footer;