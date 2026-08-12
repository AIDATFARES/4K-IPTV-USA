"use client";

import { motion } from "framer-motion";
import { Tv, Smartphone, Laptop, MonitorPlay, Tablet, Radio } from "lucide-react";

export default function DeviceSupport() {
  const devices = [
    { name: "Amazon Firestick / Fire TV", icon: Tv },
    { name: "Smart TV (Samsung & LG)", icon: MonitorPlay },
    { name: "Android TV & Box", icon: Tv },
    { name: "Apple TV (tvOS)", icon: MonitorPlay },
    { name: "iPhone & iPad (iOS)", icon: Smartphone },
    { name: "Android Phones & Tablets", icon: Tablet },
    { name: "MAG Box & Formuler", icon: Radio },
    { name: "Windows PC & Mac", icon: Laptop },
  ];

  return (
    <section className="py-lg bg-surface-container-lowest border-y border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-md text-center">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          Stream Everywhere — 100% Compatible with All Devices & Apps
        </span>
      </div>

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-md items-center whitespace-nowrap min-w-full"
        >
          {[...devices, ...devices].map((device, index) => {
            const Icon = device.icon;
            return (
              <div
                key={index}
                className="glass-panel px-lg py-md rounded-xl border border-white/5 flex items-center gap-md text-on-surface hover:text-white hover:border-primary/40 transition-all shrink-0"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-title-md text-sm font-medium">{device.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
