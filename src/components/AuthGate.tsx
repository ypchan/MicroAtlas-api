"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LockKeyhole, LogOut, ShieldCheck, UserPlus } from "lucide-react";
import { IssueWidget } from "@/components/IssueWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

interface RegisteredUser {
  name: string;
  email: string;
  institution: string;
  role: string;
}

const storageKey = "microatlas_registered_user";
const developerAccount: RegisteredUser = {
  name: "MicroAtlas Developer",
  email: "developer@microatlas.local",
  institution: "Shenzhen University Archaeal Biology Center",
  role: "Developer"
};

export function AuthGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<RegisteredUser | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setUser(JSON.parse(stored) as RegisteredUser);
    }
    setLoaded(true);
  }, []);

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextUser = {
      name: String(form.get("name") || "MicroAtlas user"),
      email: String(form.get("email") || ""),
      institution: String(form.get("institution") || ""),
      role: String(form.get("role") || "Researcher")
    };

    window.localStorage.setItem(storageKey, JSON.stringify(nextUser));
    setUser(nextUser);
  }

  function handleSignOut() {
    window.localStorage.removeItem(storageKey);
    setUser(null);
  }

  function handleDeveloperLogin() {
    window.localStorage.setItem(storageKey, JSON.stringify(developerAccount));
    setUser(developerAccount);
  }

  function renderRegisterCard() {
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-primary" />
            Register
          </CardTitle>
          <CardDescription>Prototype-only local registration. No backend account is created yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="name@institution.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input id="institution" name="institution" required placeholder="University or research center" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select id="role" name="role" defaultValue="Researcher">
                <option>Researcher</option>
                <option>Student</option>
                <option>Curator</option>
                <option>Collaborator</option>
              </Select>
            </div>
            <Button className="w-full" type="submit">
              <LockKeyhole className="h-4 w-4" />
              Enter MicroAtlas
            </Button>
            <div className="rounded-md border bg-slate-50 p-3">
              <p className="text-xs font-medium text-slate-950">Developer test account</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                developer@microatlas.local · password: microatlas-dev
              </p>
              <Button className="mt-3 w-full" type="button" variant="secondary" onClick={handleDeveloperLogin}>
                Use developer account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  if (!loaded) {
    return <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6" />;
  }

  if (!user && pathname === "/") {
    return (
      <>
        <div className="border-b bg-amber-50 text-amber-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-6">
            <span>Public preview: the home dashboard is open. Register to use samples, ASVs, taxa, search, downloads, and feedback tools.</span>
            <a className="font-semibold text-primary hover:underline" href="#register">
              Register for full access
            </a>
          </div>
        </div>
        <main>{children}</main>
        <section id="register" className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[1fr_420px] lg:px-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-primary">Full portal access</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Register to unlock MicroAtlas tools.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Registered users can browse sample and ASV tables, run mock sequence searches, open download workflows, and submit data annotations or correction suggestions.
            </p>
          </div>
          {renderRegisterCard()}
        </section>
      </>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1fr_420px] lg:px-6 lg:py-16">
        <section className="portal-grid section-panel rounded-2xl p-8">
          <p className="text-sm font-semibold uppercase text-primary">Registered access prototype</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
            Register to use this MicroAtlas feature.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            The home page is open for public browsing. Samples, ASVs, taxa, sequence search, downloads, documentation,
            and feedback tools require a registered account in this prototype.
          </p>
          <Button className="mt-6" variant="outline" asChild>
            <Link href="/">Return to public home</Link>
          </Button>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Public preview", "Non-registered users can browse the home dashboard."],
              ["Controlled tools", "Full atlas tools are available after local prototype registration."],
              ["Feedback ready", "Registered users can submit data notes and correction requests."]
            ].map(([title, body]) => (
              <div key={title} className="hero-stat rounded-xl p-4">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <p className="mt-3 font-medium text-slate-950">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {renderRegisterCard()}
      </main>
    );
  }

  return (
    <>
      <div className="border-b bg-teal-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <span>
            Signed in as <strong>{user.name}</strong> - {user.institution || user.role}
          </span>
          <Button variant="ghost" size="sm" className="w-fit text-white hover:bg-white/10 hover:text-white" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>
      <main>{children}</main>
      <IssueWidget />
    </>
  );
}
