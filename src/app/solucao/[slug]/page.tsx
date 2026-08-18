import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { StampBadge } from "@/components/scrapbook/StampBadge";
import { WashiTape } from "@/components/scrapbook/WashiTape";
import { SolutionAddButton } from "@/components/sections/SolutionAddButton";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.name} — Um Nó`,
    description: solution.description,
  };
}

export default async function SolucaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const related = solutions.filter((s) => solution.worksWith.includes(s.id));

  return (
    <>
      <section className="relative overflow-hidden bg-paper-texture py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <StampBadge className="mb-6 bg-paper">Módulo da plataforma</StampBadge>
            <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
              {solution.name}
            </h1>
            <p className="mt-4 font-hand text-2xl text-pink-600">{solution.tagline}</p>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{solution.longDescription}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <SolutionAddButton solution={solution} />
              <Button href="/agendar" variant="outline">Falar com a gente</Button>
            </div>
          </div>

          <div className="relative mx-auto flex h-56 w-56 -rotate-3 items-center justify-center bg-gradient-to-br from-blue-500 to-pink-500 text-white shadow-scrap sm:h-64 sm:w-64">
            <WashiTape color="sun" rotate={8} className="-top-3 left-8" />
            <Icon name={solution.icon} className="h-24 w-24" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl uppercase text-ink">Por que isso ajuda</h2>
            <ul className="mt-5 space-y-3">
              {solution.benefits.map((b) => (
                <li key={b} className="flex gap-3 border-b border-dashed border-ink/15 pb-3 text-ink/75">
                  <span className="text-pink-500">★</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase text-ink">O que está incluso</h2>
            <ul className="mt-5 space-y-3">
              {solution.features.map((f) => (
                <li key={f} className="flex gap-3 border-b border-dashed border-ink/15 pb-3 text-ink/75">
                  <span className="text-blue-600">＋</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-blue-50/60 py-20">
          <Container>
            <h2 className="font-display text-2xl uppercase text-ink">Combina bem com</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/solucao/${r.slug}`}
                  className="block bg-white p-6 shadow-scrap transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-display text-base uppercase text-ink">{r.name}</h3>
                  <p className="mt-1 text-sm text-ink/65">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
