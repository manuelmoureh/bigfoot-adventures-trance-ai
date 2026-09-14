"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Field, TextArea, useUtm, trackEvent } from "./ui";

function honeypotField() {
  return (
    <input
      type="text"
      name="company_website"
      tabIndex={-1}
      autoComplete="off"
      className="absolute -left-[9999px] w-px h-px opacity-0"
      aria-hidden="true"
    />
  );
}

const SERVICE_TYPES = ["Airport / City Transfers", "Safari Circuit", "Conference / MICE", "Cruise-Line Handling"];

export function RateRequestForm() {
  const utm = useUtm();
  const [sent, setSent] = useState(false);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("company_website")) return; // honeypot tripped, silently drop

    const services = SERVICE_TYPES.filter((s) => form.get(`service_${s}`));
    const data = {
      form: "request-a-rate",
      agency_name: form.get("agency_name"),
      country: form.get("country"),
      work_email: form.get("work_email"),
      whatsapp_phone: form.get("whatsapp_phone"),
      service_types: services,
      group_size: form.get("group_size"),
      travel_dates: form.get("travel_dates"),
      message: form.get("message"),
      utm,
      submitted_at: new Date().toISOString(),
    };

    // Dry run only — no backend wired up yet (static export, no live deploy/
    // credentials per GOAL_BRIEF.md hard stops). Logged for the Phase 3 QA
    // form dry-run requirement; see README.md for the real Zoho webhook contract.
    console.log("[Bigfoot Adventures] request-a-rate payload (dry run)", data);
    setPayload(data);
    trackEvent("form_submit", { form_name: "request_a_rate", ...utm });
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-lg bg-ink text-paper p-8">
        <h3 className="font-black text-xl mb-2">Received.</h3>
        <p className="text-white/80 text-sm">Our Nairobi desk replies the same business day — usually faster.</p>
        {process.env.NODE_ENV !== "production" && payload && (
          <pre className="mt-4 text-xs bg-black/30 rounded p-3 overflow-auto max-h-48">{JSON.stringify(payload, null, 2)}</pre>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {honeypotField()}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Agency name" name="agency_name" placeholder="Your agency" required />
        <Field label="Country" name="country" placeholder="e.g. Japan" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Work email" name="work_email" type="email" placeholder="you@agency.com" required />
        <Field label="WhatsApp / phone (optional)" name="whatsapp_phone" placeholder="+81 ..." />
      </div>
      <div>
        <div className="text-xs font-bold mb-2">Service type</div>
        <div className="flex flex-wrap gap-2">
          {SERVICE_TYPES.map((s) => (
            <label key={s} className="inline-flex items-center gap-2 border border-line rounded-full px-3.5 py-1.5 text-xs font-semibold cursor-pointer has-[:checked]:bg-red has-[:checked]:text-paper has-[:checked]:border-red transition-colors">
              <input type="checkbox" name={`service_${s}`} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Group size" name="group_size" placeholder="e.g. 12 pax" />
        <Field label="Travel dates / season" name="travel_dates" placeholder="e.g. July-Oct 2027" />
      </div>
      <TextArea label="Anything else?" name="message" placeholder="Itinerary details, existing quote to beat, special requirements" />
      <button className="rounded-full bg-red text-paper font-bold py-3 hover:bg-red-deep transition-colors">Request Rate Sheet</button>
    </form>
  );
}

export function TripPlannerForm() {
  const utm = useUtm();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("company_website")) return;

    const data = {
      form: "plan-a-trip",
      full_name: form.get("full_name"),
      email: form.get("email"),
      travel_dates: form.get("travel_dates"),
      details: form.get("details"),
      utm,
      submitted_at: new Date().toISOString(),
    };
    console.log("[Bigfoot Adventures] plan-a-trip payload (dry run)", data);
    trackEvent("form_submit", { form_name: "plan_a_trip", ...utm });
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-lg bg-ink text-paper p-8">
        <h3 className="font-black text-xl mb-2">Thanks — got it.</h3>
        <p className="text-white/80 text-sm">Someone from our Nairobi desk replies the same business day.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {honeypotField()}
      <Field label="Full name" name="full_name" placeholder="Your name" required />
      <Field label="Email address" name="email" type="email" placeholder="you@email.com" required />
      <Field label="Travel dates" name="travel_dates" placeholder="e.g. 12-18 August" />
      <TextArea label="What are you planning?" name="details" placeholder="Group size, destinations, budget range" required />
      <button className="rounded-full bg-red text-paper font-bold py-3 hover:bg-red-deep transition-colors">Send Enquiry</button>
    </form>
  );
}
