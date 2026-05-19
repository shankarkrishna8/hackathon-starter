"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail, Phone, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type Item = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: "Active" | "Invited" | "Inactive";
  notes: string;
};

const items: Item[] = [
  { id: "1", name: "Maya Patel", role: "Designer", email: "maya@acme.co", phone: "+1 555 0142", status: "Active", notes: "Leading the new onboarding redesign. Prefers async feedback." },
  { id: "2", name: "Jonas Bauer", role: "Engineer", email: "jonas@acme.co", phone: "+49 30 555 0199", status: "Active", notes: "Owns the data pipeline. On vacation next week." },
  { id: "3", name: "Aiko Tanaka", role: "PM", email: "aiko@acme.co", phone: "+81 3 5555 0123", status: "Invited", notes: "Joining from Sony. First day next Monday." },
  { id: "4", name: "Sam Reilly", role: "Engineer", email: "sam@acme.co", phone: "+1 555 0188", status: "Inactive", notes: "Off-boarding in progress. Returning hardware Friday." },
  { id: "5", name: "Lena Hassan", role: "Marketing", email: "lena@acme.co", phone: "+44 20 7946 0123", status: "Active", notes: "Coordinating the launch campaign with PR agency." },
];

const statusVariant: Record<Item["status"], "default" | "secondary" | "outline"> = {
  Active: "default",
  Invited: "secondary",
  Inactive: "outline",
};

export default function ListTemplate() {
  const [selectedId, setSelectedId] = useState<string>(items[0].id);
  const [query, setQuery] = useState("");

  const filtered = items.filter(
    (i) =>
      i.name.toLowerCase().includes(query.toLowerCase()) ||
      i.role.toLowerCase().includes(query.toLowerCase()),
  );
  const selected = items.find((i) => i.id === selectedId) ?? items[0];

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-14 items-center gap-4 border-b border-border px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back home
        </Link>
        <Separator orientation="vertical" className="h-5" />
        <h1 className="font-semibold tracking-tight">Team directory</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="flex w-80 shrink-0 flex-col border-r border-border">
          <div className="border-b border-border p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search teammates…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {filtered.map((item) => {
              const active = item.id === selectedId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={[
                      "flex w-full items-center gap-3 border-b border-border px-4 py-3 text-left transition-colors",
                      active ? "bg-accent" : "hover:bg-accent/50",
                    ].join(" ")}
                  >
                    <Avatar className="size-9">
                      <AvatarFallback>
                        {item.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate font-medium">{item.name}</span>
                        <Badge variant={statusVariant[item.status]} className="shrink-0">
                          {item.status}
                        </Badge>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="p-6 text-center text-sm text-muted-foreground">No results.</li>
            )}
          </ul>
        </aside>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-16">
                <AvatarFallback className="text-lg">
                  {selected.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{selected.name}</h2>
                <p className="text-muted-foreground">{selected.role}</p>
              </div>
              <Badge variant={statusVariant[selected.status]} className="ml-auto">
                {selected.status}
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                  <Mail className="size-4 text-muted-foreground" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm">{selected.email}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                  <Phone className="size-4 text-muted-foreground" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm">{selected.phone}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{selected.notes}</p>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Message</Button>
              <Button>Edit profile</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
