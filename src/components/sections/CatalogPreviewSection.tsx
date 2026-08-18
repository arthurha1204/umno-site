import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AutomationsExplorer } from "./AutomationsExplorer";

export function CatalogPreviewSection() {
  return (
    <section id="catalogo" className="scroll-mt-24 bg-blue-50/60 py-24">
      <Container>
        <SectionHeading
          eyebrow="catálogo de automações"
          title="Automações prontas pra usar"
          description="Busque ou filtre por área e veja exemplos do que já automatizamos por aí."
        />

        <div className="mt-10">
          <AutomationsExplorer limit={9} />
        </div>
      </Container>
    </section>
  );
}
