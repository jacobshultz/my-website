interface Link {
  url: string;
  newTab: boolean;
  label: string;
}

export default function Nav({ links }: { links: Link[] }) {
  return (
    <nav>
      <h3>Links</h3>
      {links.map((link) => (
        <a key={link.url} className="bigger" href={link.url} target={link.newTab ? "_blank" : "_self"}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}