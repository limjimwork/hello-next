import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/quotes">
      <a style={linkStyle}>Quotes</a>
    </Link>
    <Link href="/batman">
      <a style={linkStyle}>Batman</a>
    </Link>
  </div>
);

export default Header;
