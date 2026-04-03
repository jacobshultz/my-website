interface Link {
  url: string;
  label: string;
}

export default function Nav({ links }: { links: Link[] }) {
  return (
    <nav>
      <h3>Links</h3>
      {links.map((link) => (
        <a key={link.url} href={link.url}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}