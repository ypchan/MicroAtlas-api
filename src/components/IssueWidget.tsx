"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageSquarePlus, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface IssueRecord {
  id: string;
  type: string;
  target: string;
  message: string;
  correction: string;
  createdAt: string;
}

const storageKey = "microatlas_issue_notes";

export function IssueWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recentIssues, setRecentIssues] = useState<IssueRecord[]>([]);

  function loadRecentIssues() {
    const stored = window.localStorage.getItem(storageKey);
    setRecentIssues(stored ? (JSON.parse(stored) as IssueRecord[]).slice(0, 3) : []);
  }

  useEffect(() => {
    if (open) {
      loadRecentIssues();
    }
  }, [open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const stored = window.localStorage.getItem(storageKey);
    const existing = stored ? (JSON.parse(stored) as IssueRecord[]) : [];
    const nextIssue: IssueRecord = {
      id: `ISSUE-${Date.now()}`,
      type: String(form.get("type")),
      target: String(form.get("target") || "General portal feedback"),
      message: String(form.get("message") || ""),
      correction: String(form.get("correction") || ""),
      createdAt: new Date().toISOString()
    };

    window.localStorage.setItem(storageKey, JSON.stringify([nextIssue, ...existing]));
    event.currentTarget.reset();
    setSubmitted(true);
    loadRecentIssues();
  }

  return (
    <>
      <Button className="fixed bottom-5 right-5 z-40 shadow-[0_16px_30px_rgba(13,110,123,0.22)]" onClick={() => setOpen(true)}>
        <MessageSquarePlus className="h-4 w-4" />
        Issue
      </Button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/35 p-4 backdrop-blur-sm sm:items-center">
          <section className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.18)]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-5">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Data issue and annotation window</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Use this prototype window to annotate records, suggest corrections, or send feedback to future data curators.
                </p>
              </div>
              <Button aria-label="Close issue window" size="icon" variant="ghost" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <form className="space-y-4 p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="issue-type">Issue type</Label>
                  <Select id="issue-type" name="type" defaultValue="Data annotation">
                    <option>Data annotation</option>
                    <option>Metadata correction</option>
                    <option>Taxonomy suggestion</option>
                    <option>Interface feedback</option>
                    <option>Other</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue-target">Record or page</Label>
                  <Input id="issue-target" name="target" placeholder="Sample ID, ASV ID, taxon, page name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="issue-message">Annotation, comment, or problem</Label>
                <Textarea id="issue-message" name="message" required placeholder="Describe the data note or issue." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="issue-correction">Suggested correction</Label>
                <Textarea id="issue-correction" name="correction" placeholder="Provide corrected metadata, taxonomy, citation, or explanation." />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  Prototype submissions are saved locally in this browser. Backend issue tracking will be connected later.
                </p>
                <Button type="submit">
                  <Send className="h-4 w-4" />
                  Submit issue
                </Button>
              </div>
              {submitted ? (
                <p className="rounded-md border border-teal-200 bg-teal-50 px-3 py-2 text-sm text-teal-950">
                  Feedback saved locally. Thank you for helping improve MicroAtlas.
                </p>
              ) : null}
            </form>

            {recentIssues.length ? (
              <div className="border-t border-slate-100 bg-slate-50/70 p-5">
                <p className="text-sm font-medium text-slate-950">Recent local submissions</p>
                <div className="mt-3 space-y-2">
                  {recentIssues.map((issue) => (
                    <div key={issue.id} className="rounded-xl border border-slate-200/80 bg-white p-3 text-sm shadow-sm">
                      <p className="font-medium">{issue.type}: {issue.target}</p>
                      <p className="mt-1 line-clamp-2 text-muted-foreground">{issue.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </div>
      ) : null}
    </>
  );
}
