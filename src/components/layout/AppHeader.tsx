import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";

export function AppHeader() {
  return (
    <header className="shrink-0 border-b border-border/50">
      <PageContainer>
        <div className="flex min-h-20 items-center gap-12 py-4 sm:min-h-24">
          <Link
            href="/"
            aria-label="Lucas Hansson – startsida"
            className="inline-flex min-h-11 items-center text-2xl font-semibold tracking-tight text-accent"
          >
            L/H.
          </Link>

          <nav aria-label="Huvudnavigation">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center text-sm text-foreground underline decoration-accent underline-offset-8 transition-colors hover:text-accent"
                >
                  Hem
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
}
