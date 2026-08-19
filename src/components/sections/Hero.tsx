import { StickerStar } from "@/components/scrapbook/StickerStar";
import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

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
      <div className="animate-float hidden lg:block" style={{ animationDelay: "1.6s" }}>
        <StickerStar color="blue" className="left-[3%] top-[70%] h-6 w-6" rotate={-18} />
      </div>
      <div
        className="pointer-events-none absolute -left-16 top-1/3 hidden h-56 w-56 rounded-[60%_40%_35%_65%/60%_35%_65%_40%] bg-pink-100/50 sm:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 hidden h-72 w-72 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-blue-100/50 sm:block"
        aria-hidden="true"
      />

      <Container className="relative">
        <HeroCarousel />
      </Container>
    </section>
  );
}
