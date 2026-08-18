import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickerStar } from "@/components/scrapbook/StickerStar";
import { PostIt } from "@/components/scrapbook/PostIt";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper-texture py-28 text-center">
      <StickerStar color="pink" className="left-[12%] top-16 h-9 w-9" rotate={-12} />
      <StickerStar color="blue" className="right-[14%] top-24 h-7 w-7" rotate={18} />

      <Container>
        <p className="font-display text-8xl uppercase text-blue-600 sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl uppercase text-ink sm:text-4xl">
          Essa página se perdeu no caminho
        </h1>
        <div className="mt-6 flex justify-center">
          <PostIt color="sun" rotate={-3}>
            volta pra home, deve ter sido a fita adesiva que soltou 🩹
          </PostIt>
        </div>
        <div className="mt-10">
          <Button href="/" variant="pink">Voltar para a home</Button>
        </div>
      </Container>
    </section>
  );
}
