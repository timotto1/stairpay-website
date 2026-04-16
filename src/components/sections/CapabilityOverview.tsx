"use client";

import {
  FileSearch,
  RefreshCw,
  ShieldCheck,
  Workflow,
  ClipboardCheck,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TypeWriter } from "@/components/ui/TypeWriter";

const capabilities = [
  { icon: FileSearch,     text: "Clean messy data from historical documents" },
  { icon: RefreshCw,      text: "Automate and sync your data updates" },
  { icon: ShieldCheck,    text: "Proactively act on compliance requirements" },
  { icon: Workflow,       text: "Automate repeated tasks and workflows" },
  { icon: ClipboardCheck, text: "Build a complete audit trail of changes" },
];

export function CapabilityOverview() {
  return (
    <SectionWrapper theme="light">
      <div className="px-8 md:px-16 lg:px-24 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
          <h2 className="text-h2 text-[var(--color-text-dark)] whitespace-nowrap relative">
            <span className="invisible" aria-hidden="true">Cornerstone allows you to:</span>
            <span className="absolute left-0 top-0"><TypeWriter text="Cornerstone allows you to:" speed={12} /></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {capabilities.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col gap-4">
                <Icon size={28} strokeWidth={1.2} className="text-[var(--color-text-dark)]" />
                <p className="text-[15px] font-[400] leading-[1.5] text-[var(--color-text-body)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
