"use client";

import {
  FilePen,
  ChartBar,
  Flame,
  PoundSterling,
  FileWarning,
  House,
  Wrench,
  ClipboardList,
  Users,
  MessageCircleWarning,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TravellerConfig {
  icon: LucideIcon;
  animation: string;
  delay: number;
}

const travellers: TravellerConfig[] = [
  { icon: FilePen,               animation: "grid-travel-1",  delay: 0 },
  { icon: ChartBar,              animation: "grid-travel-2",  delay: 1.5 },
  { icon: Flame,                 animation: "grid-travel-3",  delay: 3 },
  { icon: PoundSterling,         animation: "grid-travel-4",  delay: 4.5 },
  { icon: FileWarning,           animation: "grid-travel-5",  delay: 6 },
  { icon: House,                 animation: "grid-travel-6",  delay: 7.5 },
  { icon: Wrench,                animation: "grid-travel-7",  delay: 9 },
  { icon: ClipboardList,         animation: "grid-travel-8",  delay: 10.5 },
  { icon: Users,                 animation: "grid-travel-9",  delay: 12 },
  { icon: MessageCircleWarning,  animation: "grid-travel-10", delay: 13.5 },
];

export function GridTravellers() {
  return (
    <>
      {travellers.map(({ icon: Icon, animation, delay }, i) => (
        <div
          key={i}
          className="absolute w-[38px] h-[38px] rounded-[8px] border border-white/[0.15] bg-white/[0.04] backdrop-blur-sm z-0 flex items-center justify-center"
          style={{
            animation: `${animation} 15s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s infinite`,
            opacity: 0,
          }}
        >
          <Icon size={18} strokeWidth={1.5} className="text-white/40" />
        </div>
      ))}
    </>
  );
}
