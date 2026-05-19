import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  Home,
  LayoutDashboard,
  Search,
  Settings,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { label: "Total revenue", value: "$48,250", delta: "+12.4%", icon: Wallet },
  { label: "Active users", value: "1,284", delta: "+8.2%", icon: Users },
  { label: "Conversion rate", value: "3.6%", delta: "+0.4%", icon: TrendingUp },
];

const orders = [
  { id: "#3421", customer: "Maya Patel", amount: "$340.00", status: "Paid" },
  { id: "#3420", customer: "Jonas Bauer", amount: "$129.50", status: "Pending" },
  { id: "#3419", customer: "Aiko Tanaka", amount: "$890.00", status: "Paid" },
  { id: "#3418", customer: "Sam Reilly", amount: "$48.00", status: "Refunded" },
  { id: "#3417", customer: "Lena Hassan", amount: "$215.75", status: "Paid" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Paid: "default",
  Pending: "secondary",
  Refunded: "outline",
};

export default function DashboardTemplate() {
  return (
    <div className="flex flex-1">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex">
        <div className="flex h-14 items-center gap-2 px-5">
          <div className="size-6 rounded-md bg-sidebar-primary" />
          <span className="font-semibold tracking-tight">Acme Inc.</span>
        </div>
        <Separator />
        <nav className="flex flex-1 flex-col gap-1 p-3 text-sm">
          <NavItem href="/templates/dashboard" icon={Home} active>Overview</NavItem>
          <NavItem href="#" icon={LayoutDashboard}>Reports</NavItem>
          <NavItem href="#" icon={Users}>Customers</NavItem>
          <NavItem href="#" icon={Settings}>Settings</NavItem>
        </nav>
        <div className="p-3">
          <div className="rounded-md bg-sidebar-accent p-3 text-sm">
            <p className="font-medium text-sidebar-accent-foreground">Upgrade to Pro</p>
            <p className="mt-1 text-xs text-muted-foreground">Unlock advanced reports.</p>
            <Button size="sm" className="mt-3 w-full">Upgrade</Button>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border px-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search orders, customers…" className="pl-9" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="size-4" />
            </Button>
            <Avatar className="size-8">
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
              <p className="text-sm text-muted-foreground">Welcome back. Here's what's happening today.</p>
            </div>
            <Button>
              New report <ArrowUpRight className="ml-1 size-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((s) => (
              <Card key={s.label}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {s.label}
                  </CardTitle>
                  <s.icon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                  <p className="mt-1 text-xs text-primary">{s.delta} vs last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent orders</CardTitle>
                <p className="text-sm text-muted-foreground">Last 5 transactions.</p>
              </div>
              <Link href="#" className={buttonVariants({ variant: "outline", size: "sm" })}>
                View all
              </Link>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-mono text-sm">{o.id}</TableCell>
                      <TableCell>{o.customer}</TableCell>
                      <TableCell>{o.amount}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={statusVariant[o.status]}>{o.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  active,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
      ].join(" ")}
    >
      <Icon className="size-4" />
      {children}
    </Link>
  );
}
