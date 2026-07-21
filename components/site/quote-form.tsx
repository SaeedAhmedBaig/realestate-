"use client";

import * as React from "react";
import { ChevronDown, Loader2, CheckCircle2, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUOTE_PROJECT_TYPES, QUOTE_BUDGETS } from "@/lib/data";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  city: string;
  budget: string;
  details: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  city: "",
  budget: "",
  details: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [values, setValues] = React.useState<Fields>(EMPTY);
  const [errors, setErrors] = React.useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = React.useState<Status>("idle");

  const set = (k: keyof Fields) => (v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Enter a valid email address";
    if (values.phone.replace(/\D/g, "").length < 7)
      e.phone = "Enter a valid phone number";
    if (!values.projectType) e.projectType = "Select a project type";
    if (!values.city.trim()) e.city = "Where is the project located?";
    if (values.details.trim().length < 10)
      e.details = "Tell us a little more (min. 10 characters)";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      // focus the first invalid field
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="size-9" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Thank you, {values.name.split(" ")[0] || "there"}!
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          Your request has been received. Our team will review the details and get back
          to you within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setValues(EMPTY);
            setStatus("idle");
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <TextInput
            value={values.name}
            onChange={set("name")}
            placeholder="e.g. Ahmed Khan"
            invalid={!!errors.name}
            autoComplete="name"
          />
        </Field>

        <Field label="Email" required error={errors.email}>
          <TextInput
            type="email"
            value={values.email}
            onChange={set("email")}
            placeholder="you@email.com"
            invalid={!!errors.email}
            autoComplete="email"
          />
        </Field>

        <Field label="Phone" required error={errors.phone}>
          <TextInput
            type="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="+92 3XX XXXXXXX"
            invalid={!!errors.phone}
            autoComplete="tel"
          />
        </Field>

        <Field label="Company (optional)">
          <TextInput
            value={values.company}
            onChange={set("company")}
            placeholder="Company or developer"
            autoComplete="organization"
          />
        </Field>

        <Field label="Project type" required error={errors.projectType}>
          <SelectInput
            value={values.projectType}
            onChange={set("projectType")}
            placeholder="Select a type"
            options={QUOTE_PROJECT_TYPES}
            invalid={!!errors.projectType}
          />
        </Field>

        <Field label="City / location" required error={errors.city}>
          <TextInput
            value={values.city}
            onChange={set("city")}
            placeholder="e.g. Lahore"
            invalid={!!errors.city}
          />
        </Field>

        <Field label="Estimated budget" className="sm:col-span-2">
          <SelectInput
            value={values.budget}
            onChange={set("budget")}
            placeholder="Select a range"
            options={QUOTE_BUDGETS}
          />
        </Field>

        <Field label="Project details" required error={errors.details} className="sm:col-span-2">
          <textarea
            value={values.details}
            onChange={(e) => set("details")(e.target.value)}
            rows={5}
            aria-invalid={!!errors.details}
            placeholder="Tell us about the scope, size, timeline and anything else that helps us prepare an accurate estimate."
            className={cn(
              "w-full resize-y rounded-2xl border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none",
              errors.details ? "border-destructive" : "border-input focus-visible:border-ring"
            )}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          Something went wrong sending your request. Please try again, or email us
          directly.
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We&apos;ll only use your details to respond to this enquiry.
        </p>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="size-4" /> Request quote
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

/* ---- field primitives ------------------------------------------------ */

function Field({
  label,
  required,
  error,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  invalid,
  ...props
}: {
  value: string;
  onChange: (v: string) => void;
  invalid?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">) {
  return (
    <input
      {...props}
      value={value}
      aria-invalid={invalid}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "h-12 w-full rounded-full border bg-background px-5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none",
        invalid ? "border-destructive" : "border-input focus-visible:border-ring"
      )}
    />
  );
}

function SelectInput({
  value,
  onChange,
  options,
  placeholder,
  invalid,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  invalid?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        aria-invalid={invalid}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-12 w-full appearance-none rounded-full border bg-background px-5 pr-11 text-sm shadow-sm transition-colors focus-visible:outline-none",
          invalid ? "border-destructive" : "border-input focus-visible:border-ring",
          value ? "text-foreground" : "text-muted-foreground"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-foreground">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
    </div>
  );
}
