import Link from "next/link";
import Image from "next/image";
import { StickerStar } from "@/components/scrapbook/StickerStar";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t-2 border-ink/10 bg-blue-950 text-white">
      <StickerStar color="sun" className="left-8 top-8 h-8 w-8" rotate={12} />
      <StickerStar color="pink" className="right-10 top-16 h-6 w-6" rotate={-15} />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-1">
            <Image src="/logo-um-no-white.png" alt="Um" width={44} height={31} className="h-9 w-auto" />
            <p className="font-sans text-3xl font-extrabold uppercase leading-none text-pink-400">Nó</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Amarramos site, atendimento, automação e design em um pacote só,
            para sua empresa vender mais sem virar refém de dez ferramentas
            soltas.
          </p>
        </div>

        <div>
          <p className="font-hand text-xl text-sun">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/#solucoes" className="link-underline">Soluções</Link></li>
            <li><Link href="/#planos" className="link-underline">Planos</Link></li>
            <li><Link href="/#catalogo" className="link-underline">Catálogo de automações</Link></li>
            <li><Link href="/#faq" className="link-underline">Perguntas frequentes</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-hand text-xl text-sun">Fale com a gente</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/agendar" className="link-underline">Agendar conversa</Link></li>
            <li>
              <a href="mailto:arthurlimatech@gmail.com" className="link-underline">
                arthurlimatech@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5581993165396"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                (81) 99316-5396
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Um Nó. Todos os direitos reservados.
      </div>
    </footer>
  );
}
