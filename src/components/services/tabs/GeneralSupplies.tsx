"use client";

// TODO: replace these three with the supplies photos when you have them
// (e.g. "@/assets/suppliesImg.png"). They reuse the contracting images for now.
import generalImg from "@/assets/generalImg.png";
import systemsImg from "@/assets/systemsImg.png";
import typesImg from "@/assets/typesImg.png";
import { Package, ShieldCheck, SlidersHorizontal, Truck } from "lucide-react";
import ServiceTabTemplate from "./ServicetabTemplate";

// Order matches the 4 advantages: diversity, specifications match,
// organized supply, flexibility
const advantageIcons = [Package, ShieldCheck, Truck, SlidersHorizontal];

export default function GeneralSupplies() {
  return (
    <ServiceTabTemplate
      namespace="services.generalSuppliesTab"
      images={{ hero: generalImg, types: typesImg, materials: systemsImg }}
      advantageIcons={advantageIcons}
    />
  );
}
