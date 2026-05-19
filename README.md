# Hackathon Starter Test

A Next.js + shadcn UI kit pre-themed and ready to ship. Three page templates cover the most common patterns. Clone one, rename it, replace the data — done.

## Run it

```bash
npm run dev
```

Open http://localhost:3000.

## The 30-second tour

```
app/
  page.tsx                    ← home / landing
  layout.tsx                  ← root layout, fonts, providers
  globals.css                 ← ALL design tokens live here
  templates/
    dashboard/page.tsx        ← sidebar + stats + table
    form/page.tsx             ← centered form with inputs
    list/page.tsx             ← list + detail two-pane

components/ui/                ← shadcn primitives (do not edit)
lib/utils.ts                  ← cn() helper for merging classNames
```

## How to add a new page

**Copy a template.** Don't start from scratch.

```bash
cp -r app/templates/dashboard app/your-feature
```

Then edit `app/your-feature/page.tsx`. The route becomes `/your-feature`.

## How to change colors

Every color is a CSS variable in `app/globals.css`. To rebrand the whole app, edit `:root { ... }` (and `.dark { ... }` for dark mode).

The variables you care about most:

| Variable | Used by |
|---|---|
| `--primary` | Primary buttons, links, focus rings |
| `--background` / `--foreground` | Page bg / main text |
| `--muted` / `--muted-foreground` | Secondary surfaces / dimmed text |
| `--card` / `--card-foreground` | Card backgrounds |
| `--border` | Every border |
| `--accent` | Hover states, badges |
| `--destructive` | Errors, delete buttons |

Values are in **OKLCH** (`oklch(lightness chroma hue)`). To shift the brand color: change the hue (third number) — try 145 for green, 250 for blue, 30 for orange, 290 for purple.

## How to use a component

Every UI component is already installed in `components/ui/`. Import by name:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

<Button>Click me</Button>
<Button variant="outline" size="sm">Cancel</Button>
```

Look at any template file to see how components compose. Copy-paste is encouraged.

## Available components

`Button`, `Card`, `Input`, `Label`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Badge`, `Avatar`, `Separator`, `Tabs`, `Table`, `Dialog`, `Sheet`, `Popover`, `Tooltip`, `Alert`, `Progress`, `Skeleton`, `DropdownMenu`, `Sonner` (toasts).

Need more? `npx shadcn@latest add <component-name>` — see https://ui.shadcn.com/docs/components for the full list.

## Showing a toast

```tsx
import { toast } from "sonner";

toast.success("Saved", { description: "Your changes are live." });
toast.error("Something broke");
```

The `<Toaster />` is already mounted in `layout.tsx`.

## Gotcha: linking with button styles

This shadcn preset uses `base-ui` (not Radix), so **`<Button asChild>` does not work**. To make a `<Link>` look like a button, use `buttonVariants()` directly:

```tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

<Link href="/somewhere" className={buttonVariants({ variant: "outline" })}>
  Go there
</Link>
```

## Conditional class names

Use the `cn()` helper from `@/lib/utils`:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("rounded-md p-4", isActive && "bg-accent")} />
```

## Common Tailwind utilities you'll reach for

| Want | Class |
|---|---|
| Spacing (padding/margin) | `p-4`, `px-6`, `mt-2`, `gap-3` |
| Flex layout | `flex`, `flex-col`, `items-center`, `justify-between` |
| Grid | `grid`, `grid-cols-3`, `gap-4`, `md:grid-cols-2` |
| Width / height | `w-full`, `max-w-2xl`, `h-14`, `size-8` (= w-8 h-8) |
| Text | `text-sm`, `text-2xl`, `font-medium`, `font-semibold`, `tracking-tight` |
| Colors (use tokens, not raw colors) | `bg-primary`, `text-muted-foreground`, `border-border` |
| Responsive | prefix with `md:` (≥768px) or `lg:` (≥1024px) |

**Rule of thumb:** if you're typing `bg-blue-500`, stop. Use `bg-primary` instead so the whole app re-skins when colors change.

## Icons

`lucide-react` is installed. Import any icon by name:

```tsx
import { Search, ArrowRight, Trash2 } from "lucide-react";

<Search className="size-4" />
```

Browse icons at https://lucide.dev.

## Dark mode

Add `class="dark"` to `<html>` (or toggle it via JS). All tokens have dark-mode values already.

## When in doubt

1. Look at the closest template (`app/templates/*`) for the pattern.
2. Look at the component file in `components/ui/` to see its props.
3. Search https://ui.shadcn.com/docs for usage examples.
