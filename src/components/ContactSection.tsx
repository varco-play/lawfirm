"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { practiceAreaOptions } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  practiceArea: z.string().min(1, "Select a practice area."),
  description: z
    .string()
    .min(20, "Please share at least 20 characters so we can understand the matter."),
  preferredContact: z.enum(["Phone", "Email", "Text"], {
    error: "Choose a preferred contact method.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: "Phone",
      practiceArea: "",
    },
  });

  const preferredContact = useWatch({
    control,
    name: "preferredContact",
  });

  const onSubmit = async () => {
    setSubmitted(false);
    await new Promise((resolve) => window.setTimeout(resolve, 850));
    setSubmitted(true);
    reset({ preferredContact: "Phone", practiceArea: "" });
  };

  return (
    <section className="content-section section-shell contact-section" id="contact">
      <Reveal className="section-heading centered wide">
        <p className="eyebrow">Contact / Consultation</p>
        <h2>
          Tell us what happened. We will help you understand the{" "}
          <span>next move.</span>
        </h2>
        <p>
          Reaching out is a powerful first step. We will listen carefully,
          answer your questions, and help you move forward with clarity.
        </p>
      </Reveal>

      <div className="contact-layout">
        <Reveal className="office-card" delay={0.06}>
          <div className="office-group">
            <p className="eyebrow">Philadelphia Office</p>
            <div className="office-line">
              <MapPin aria-hidden="true" size={22} />
              <address>
                One Liberty Place
                <br />
                1650 Market Street, Suite 3600
                <br />
                Philadelphia, PA 19103
              </address>
            </div>
          </div>
          <div className="office-group">
            <a className="office-line" href="tel:+12155550198">
              <Phone aria-hidden="true" size={21} />
              <span>(215) 555-0198</span>
            </a>
            <a className="office-line" href="mailto:info@ashfordvale.com">
              <Mail aria-hidden="true" size={21} />
              <span>info@ashfordvale.com</span>
            </a>
          </div>
          <div className="office-group">
            <p className="eyebrow">Office Hours</p>
            <div className="office-line">
              <Clock aria-hidden="true" size={21} />
              <p>
                Monday - Friday
                <br />
                8:30 AM - 5:30 PM
                <br />
                <span>Evening appointments available upon request.</span>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact-form-shell glass-panel" delay={0.12}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="field-grid">
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  {...register("fullName")}
                  aria-invalid={Boolean(errors.fullName)}
                />
                {errors.fullName ? <em>{errors.fullName.message}</em> : null}
              </label>

              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <em>{errors.email.message}</em> : null}
              </label>
            </div>

            <div className="field-grid">
              <label>
                <span>Phone Number</span>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="(215) 555-0198"
                  {...register("phone")}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone ? <em>{errors.phone.message}</em> : null}
              </label>

              <label>
                <span>Practice Area</span>
                <select {...register("practiceArea")} aria-invalid={Boolean(errors.practiceArea)}>
                  <option value="">Select a practice area</option>
                  {practiceAreaOptions.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                {errors.practiceArea ? <em>{errors.practiceArea.message}</em> : null}
              </label>
            </div>

            <label>
              <span>Brief Description</span>
              <textarea
                rows={5}
                placeholder="Tell us what happened and how we can help..."
                {...register("description")}
                aria-invalid={Boolean(errors.description)}
              />
              {errors.description ? <em>{errors.description.message}</em> : null}
            </label>

            <fieldset>
              <legend>Preferred Contact Method</legend>
              <div className="radio-grid">
                {(["Phone", "Email", "Text"] as const).map((method) => (
                  <label
                    key={method}
                    className={cn(
                      "radio-card",
                      preferredContact === method && "selected",
                    )}
                  >
                    <input
                      type="radio"
                      value={method}
                      {...register("preferredContact")}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
              {errors.preferredContact ? (
                <em>{errors.preferredContact.message}</em>
              ) : null}
            </fieldset>

            <p className="privacy-note">
              <Shield aria-hidden="true" size={22} />
              Your information is confidential. Submitting this form does not
              create an attorney-client relationship.
            </p>

            <MagneticButton className="form-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request Private Consultation"}
            </MagneticButton>

            {submitted ? (
              <div className="success-message" role="status">
                <CheckCircle aria-hidden="true" size={20} />
                Thank you. Your consultation request has been received. Our team
                will contact you shortly.
              </div>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
