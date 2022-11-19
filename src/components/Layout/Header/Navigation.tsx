import { Link } from 'components';

export default function Navigation() {
  return (
    <nav className="flex justify-between gap-4 text-lg font-medium text-black">
      <Link href="/">Home</Link>
      <Link href="/quem-somos">Quem Somos</Link>
      <Link href="/portfolio">Portfólio</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}
