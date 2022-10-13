import { Link } from './Link';

function Navigation() {
  return (
    <nav className="flex justify-between text-lg font-medium text-black w-96">
      <Link href="/">Home</Link>
      <Link href="/quem-somos">Quem Somos</Link>
      <Link href="/portfolio">Portfólio</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}

export { Navigation };
