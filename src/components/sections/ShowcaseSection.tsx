import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WashiTape } from "@/components/scrapbook/WashiTape";
import { StickerStar } from "@/components/scrapbook/StickerStar";

const bars = [40, 65, 30, 80, 55, 95, 70];

export function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <StickerStar color="blue" className="left-[5%] top-10 hidden h-8 w-8 sm:block" rotate={-12} />
      <StickerStar color="pink" className="right-[6%] bottom-16 hidden h-7 w-7 sm:block" rotate={14} />

      <Container>
        <SectionHeading
          align="center"
          eyebrow="na prática"
          title="Isso é o que você recebe de verdade"
          description="Nada de maquete bonita só na proposta — é assim que fica rodando no seu dia a dia."
        />

        <div className="mt-14 grid gap-14 sm:grid-cols-3 sm:gap-6">
          {/* WhatsApp / chatbot mockup */}
          <div className="relative mx-auto w-full max-w-[280px] -rotate-2 bg-white p-3 pb-6 shadow-scrap">
            <WashiTape color="pink" rotate={6} className="-top-3 left-1/2 -translate-x-1/2" />
            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <div className="flex items-center gap-2 bg-blue-600 px-3 py-2.5 text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
                  🤖
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">Atendimento Um Nó</p>
                  <p className="mt-1 text-[11px] text-white/70">online agora</p>
                </div>
              </div>
              <div className="space-y-2 bg-[#e9e3d6] p-3">
                <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-xs text-ink shadow-sm">
                  Oi! Vocês atendem sábado? 🙂
                </div>
                <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-blue-100 px-3 py-2 text-xs text-ink shadow-sm">
                  Atendemos sim, das 9h às 13h! Quer deixar um horário reservado?
                </div>
                <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-xs text-ink shadow-sm">
                  Quero sim!
                </div>
                <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-blue-100 px-3 py-2 text-xs text-ink shadow-sm">
                  Show, já te mandei o link de agendamento ✅
                </div>
              </div>
            </div>
            <p className="mt-4 text-center font-hand text-lg text-ink">
              chatbot que atende e agenda sozinho
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="relative mx-auto w-full max-w-[280px] rotate-2 bg-white p-4 pb-6 shadow-scrap">
            <WashiTape color="sun" rotate={-5} className="-top-3 left-1/2 -translate-x-1/2" />
            <p className="font-display text-xs uppercase tracking-wide text-ink/45">
              Painel — esta semana
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-blue-50 p-2.5">
                <p className="font-display text-xl text-blue-700">128</p>
                <p className="text-[11px] text-ink/60">novos leads</p>
              </div>
              <div className="rounded-lg bg-pink-50 p-2.5">
                <p className="font-display text-xl text-pink-600">34%</p>
                <p className="text-[11px] text-ink/60">conversão</p>
              </div>
            </div>
            <div className="mt-4 flex h-20 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-blue-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-4 text-center font-hand text-lg text-ink">
              tudo num painel só, sem planilha
            </p>
          </div>

          {/* Website mockup */}
          <div className="relative mx-auto w-full max-w-[280px] -rotate-1 bg-white p-2 pb-6 shadow-scrap">
            <WashiTape color="blue" rotate={4} className="-top-3 left-1/2 -translate-x-1/2" />
            <div className="overflow-hidden rounded-lg border border-ink/10">
              <div className="flex items-center gap-1.5 bg-ink/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-pink-400" />
                <span className="h-2 w-2 rounded-full bg-sun" />
                <span className="h-2 w-2 rounded-full bg-mint" />
                <span className="ml-2 flex-1 truncate rounded bg-white px-2 py-0.5 text-[10px] text-ink/40">
                  seusite.com.br
                </span>
              </div>
              <div className="space-y-2 bg-gradient-to-br from-blue-500 to-blue-700 p-4">
                <div className="h-2 w-14 rounded-full bg-white/40" />
                <div className="h-3 w-32 rounded-full bg-white" />
                <div className="h-2 w-24 rounded-full bg-white/60" />
                <div className="mt-2 h-6 w-20 rounded-full bg-sun" />
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-3">
                <div className="h-10 rounded bg-blue-50" />
                <div className="h-10 rounded bg-pink-50" />
                <div className="h-10 rounded bg-blue-50" />
              </div>
            </div>
            <p className="mt-4 text-center font-hand text-lg text-ink">
              seu site, do seu jeito
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
