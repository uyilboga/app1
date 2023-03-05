import Link from 'next/link';

function FooterMenu({ title, menu, type }) {
  return (
    <div className="footer-menu">
      <h3>{title}</h3>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{type === 'anchor' ? <a href={item.url}>{item.name}</a> : <Link href={item.url}>{item.name}</Link>}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterMenu;
