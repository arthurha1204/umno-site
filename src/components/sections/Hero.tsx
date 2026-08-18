import { Button } from "@/components/ui/Button";
import { Polaroid } from "@/components/scrapbook/Polaroid";
import { PostIt } from "@/components/scrapbook/PostIt";
import { StickerStar } from "@/components/scrapbook/StickerStar";
import { StampBadge } from "@/components/scrapbook/StampBadge";
import { HandDrawnArrow } from "@/components/scrapbook/HandDrawnArrow";
import { KnotIcon } from "@/components/scrapbook/KnotIcon";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper-texture pb-24 pt-16 sm:pt-20">
      <div className="animate-float" style={{ animationDelay: "0.2s" }}>
        <StickerStar color="pink" className="left-[6%] top-24 h-10 w-10 sm:left-[10%]" rotate={-10} />
      </div>
      <div className="animate-float" style={{ animationDelay: "1s" }}>
        <StickerStar color="blue" className="right-[8%] top-16 h-7 w-7 sm:right-[14%]" rotate={16} />
      </div>
      <div className="animate-float hidden sm:block" style={{ animationDelay: "0.6s" }}>
        <StickerStar color="sun" className="right-[4%] top-72 h-9 w-9" rotate={-6} />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <div className="animate-rise-in">
            <StampBadge className="mb-6 bg-paper">Site + IA + Automação</StampBadge>
          </div>

          <h1 className="animate-rise-in font-display text-5xl uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl" style={{ animationDelay: "0.1s" }}>
            Sua empresa
            <span className="block -rotate-2 text-blue-600">amarrada</span>
            numa coisa só.
          </h1>

          <KnotIcon className="-mt-1 ml-1 h-9 w-24 text-blue-600" rotate={-3} />

          <p className="animate-rise-in mt-6 max-w-lg text-lg text-ink/70" style={{ animationDelay: "0.2s" }}>
            Site, atendimento com IA, CRM e automação de processos, tudo
            costurado num pacote só. Sem depender de dez ferramentas soltas
            que não conversam entre si.
          </p>

          <div className="animate-rise-in mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.3s" }}>
            <Button href="/agendar" variant="pink">Agendar uma conversa</Button>
            <Button href="#solucoes" variant="outline">Ver soluções</Button>
          </div>

          <div className="animate-rise-in mt-10 flex items-center gap-3" style={{ animationDelay: "0.4s" }}>
            <PostIt color="sun" rotate={-3} className="text-base">
              feito pra empresa que quer crescer sem virar bagunça ✨
            </PostIt>
          </div>
        </div>

        <div className="animate-rise-in relative mx-auto flex w-fit items-center pt-8" style={{ animationDelay: "0.25s" }}>
          <div
            className="absolute -inset-10 hidden rounded-[60%_40%_35%_65%/60%_35%_65%_40%] bg-blue-100/60 sm:block"
            aria-hidden="true"
          />
          <p
            className="pointer-events-none absolute -top-10 right-0 hidden select-none font-display text-[170px] uppercase leading-none text-blue-600/[0.16] sm:block"
            aria-hidden="true"
          >
            Nó
          </p>

          <div className="relative flex items-end">
            <Polaroid caption="site novo em dias" icon={<Icon name="site" className="h-12 w-12" />} rotate={-8} variant={0} className="relative z-10 translate-y-2" />
            <Polaroid caption="atendimento 24h" icon={<Icon name="chat" className="h-12 w-12" />} rotate={4} variant={1} className="relative z-20 -ml-6 -translate-y-4" />
          </div>
          <HandDrawnArrow className="absolute -bottom-8 left-1/2 z-30 hidden h-16 w-16 -translate-x-1/2 rotate-12 text-blue-600 sm:block" />
        </div>
      </Container>
    </section>
  );
}
