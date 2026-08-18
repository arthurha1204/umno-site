import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgendarForm } from "@/components/sections/AgendarForm";

export const metadata: Metadata = {
  title: "Agendar conversa — Um Nó",
  description: "Conte pra gente o que sua empresa precisa e agende uma conversa sem compromisso.",
};

export default function AgendarPage() {
  return (
    <section className="bg-paper-texture py-20">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="vamos conversar"
          title="Conta pra gente o que você precisa"
          description="Preencha os dados abaixo. Se você já selecionou produtos ou soluções pelo site, eles aparecem pré-marcados aqui."
        />

        <div className="mt-12">
          <AgendarForm />
        </div>
      </Container>
    </section>
  );
}
