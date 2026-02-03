"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const ACCESS_KEY = "cf7d76d6-7647-4f17-a588-626a167f0343";

export default function SignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formStarted, setFormStarted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    trackEvent({
      name: "form_submit_attempt",
      params: {
        event_category: "forms",
        event_label: "sbos-signup",
        page: window.location.pathname || "sbos",
      },
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      trackEvent({
        name: "form_submit_success",
        params: {
          event_category: "forms",
          event_label: "sbos-signup",
          page: window.location.pathname || "sbos",
        },
      });
      form.reset();
    } catch (error) {
      setStatus("error");
      trackEvent({
        name: "form_submit_error",
        params: {
          event_category: "forms",
          event_label: "sbos-signup",
          page: window.location.pathname || "sbos",
        },
      });
    }
  };

  const onFirstInput = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent({
        name: "form_start",
        params: {
          event_category: "forms",
          event_label: "sbos-signup",
          page: window.location.pathname || "sbos",
        },
      });
    }
  };

  if (status === "success") {
    return (
      <div className="card p-10 text-center bg-bg">
        <h3 className="text-h3 mb-3 text-success">Request Submitted</h3>
        <p className="text-body text-text-muted">
          Thank you for your interest in SBOS. We will reach out within 24 hours to
          discuss your assessment and setup.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onInput={onFirstInput}
      className="card p-8 bg-bg"
    >
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Name
          </label>
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
            placeholder="First Last"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Work Email
          </label>
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Company
          </label>
          <input
            required
            name="company"
            type="text"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Company Size
          </label>
          <select
            required
            name="size"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
          >
            <option value="">Select size...</option>
            <option value="1-10 employees">1-10 employees</option>
            <option value="11-25 employees">11-25 employees</option>
            <option value="26-50 employees">26-50 employees</option>
            <option value="51-100 employees">51-100 employees</option>
            <option value="100+ employees">100+ employees</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Annual Revenue
          </label>
          <select
            required
            name="revenue"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
          >
            <option value="">Select range...</option>
            <option value="Under $1M">Under $1M</option>
            <option value="$1M-$3M">$1M-$3M</option>
            <option value="$3M-$5M">$3M-$5M</option>
            <option value="$5M-$10M">$5M-$10M</option>
            <option value="$10M-$25M">$10M-$25M</option>
            <option value="$25M-$50M">$25M-$50M</option>
            <option value="$50M+">$50M+</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Primary Use Case
          </label>
          <select
            required
            name="usecase"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
          >
            <option value="">Select use case...</option>
            <option value="Business Owner - Install Systems">
              Business Owner - Install Systems
            </option>
            <option value="M&A Due Diligence">M&A Due Diligence</option>
            <option value="Multi-Business Operator/Coach">
              Multi-Business Operator/Coach
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Biggest Challenge
          </label>
          <textarea
            required
            name="challenge"
            rows={4}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
            placeholder="Too much owner dependency, no documented processes, ineffective meetings..."
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="button-primary w-full rounded-full bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-anchor-text"
          data-cta="Request Access"
          data-cta-location="sbos-form"
        >
          {status === "loading" ? "Submitting..." : "Request Access"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-error">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="mt-4 text-xs text-text-muted text-center">
          We will reach out within 24 hours to discuss your assessment and setup.
        </p>
      </div>
    </form>
  );
}
