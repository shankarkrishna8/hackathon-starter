"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FormTemplate() {
  return (
    <div className="flex flex-1 items-center justify-center bg-muted/40 px-4 py-12">
      <div className="w-full max-w-lg">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back home
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create your project</CardTitle>
            <CardDescription>
              Tell us a bit about what you're building. You can change everything later.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Project created", {
                  description: "Replace this handler with your API call.",
                });
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Project name</Label>
                <Input id="name" name="name" placeholder="e.g. Mercury" required />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Owner email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@team.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Project type</Label>
                  <Select name="type" defaultValue="web">
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web app</SelectItem>
                      <SelectItem value="mobile">Mobile app</SelectItem>
                      <SelectItem value="api">API service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="What does this project do?"
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border bg-muted/30 p-3">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                  Send me weekly progress updates and tips for shipping faster.
                </Label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Link href="/" className={buttonVariants({ variant: "outline" })}>
                  Cancel
                </Link>
                <Button type="submit">Create project</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
