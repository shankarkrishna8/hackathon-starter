import Link from "next/link";
import { ArrowRight, LayoutDashboard, ListChecks, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    href: "/templates/dashboard",
    title: "Dashboard",
    description: "Sidebar nav, stat cards, data table. For analytics, admin tools, internal apps.",
    icon: LayoutDashboard,
  },
  {
    href: "/templates/form",
    title: "Form page",
    description: "Centered form with inputs, select, textarea. For auth, onboarding, settings.",
    icon: FileText,
  },
  {
    href: "/templates/list",
    title: "List + detail",
    description: "Two-pane layout with searchable list and detail panel. For inboxes, CRMs, catalogs.",
    icon: ListChecks,
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-primary" />
            <span className="font-semibold tracking-tight">Hackathon Starter</span>
          </div>
          <Badge variant="secondary">v0.1</Badge>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-4">UI Kit · Next.js · shadcn</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Build screens fast. Keep the design coherent.
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Clone a template. Replace the text and data. Ship. Three page patterns cover most
            hackathon apps — pick the one closest to your feature and start there.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/templates/dashboard" className={buttonVariants()}>
              Open dashboard <ArrowRight className="ml-1 size-4" />
            </Link>
            <Link href="#templates" className={buttonVariants({ variant: "outline" })}>
              See all templates
            </Link>
          </div>
        </div>

        <div id="templates" className="mt-20 grid gap-4 md:grid-cols-3">
          {templates.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/40"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <t.icon className="size-5" />
              </div>
              <h3 className="font-medium tracking-tight">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Open template <ArrowRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          Edit <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">app/globals.css</code> to change colors.
          Edit <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">app/templates/*</code> to start a page.
        </div>
      </footer>
    </main>
  );
}
