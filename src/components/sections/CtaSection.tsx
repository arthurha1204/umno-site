import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickerStar } from "@/components/scrapbook/StickerStar";
import { KnotIcon } from "@/components/scrapbook/KnotIcon";

export function CtaSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden bg-blue-600 px-8 py-16 text-center text-white sm:px-16">
          <StickerStar color="sun" className="left-8 top-8 h-9 w-9" rotate={-10} />
          <StickerStar color="pink" className="right-10 bottom-10 h-8 w-8 hidden sm:block" rotate={14} />

          <KnotIcon className="mx-auto h-10 w-28 text-sun" rotate={-2} />

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl uppercase leading-[1.05] sm:text-5xl">
            Bora amarrar sua operação de vez?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85">
            Marque uma conversa sem compromisso e a gente monta a combinação
            certa de produtos e módulos pra você.
          </p>
          <div className="mt-8">
            <Button href="/agendar" variant="outline" className="!border-white !bg-white !text-blue-700 hover:!bg-blue-50">
              Agendar minha conversa
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
