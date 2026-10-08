import { PageContainer } from "@/components/layout/PageContainer";

export default function Home() {
  return (
    <main className="flex flex-1 items-center py-24">
      <PageContainer>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Lucas Hansson
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Frontendutvecklare med fullstackkompetens.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Här samlar jag mina projekt och erfarenheter inom webbutveckling.
        </p>
      </PageContainer>
    </main>
  );
}
