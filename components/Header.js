import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const menus = [
  { url: "/", name: "Home" },
  { url: "/quotes", name: "Quotes" },
  { url: "/batman", name: "Batman" }
];

const Header = () => (
  <header>
    {menus.map((menu, idx) => (
      <Link href={menu.url} key={idx}>
        <a style={linkStyle}>{menu.name}</a>
      </Link>
    ))}
  </header>
);

export default Header;
