import { Cta } from "@/components/pricing/Cta";
import { Faq } from "@/components/pricing/Faq";
import { Heading } from "@/components/pricing/Heading";
import { PricingTable } from "@/components/pricing/PricingTable";

export default function Pricing() {
  return (
    <>
      <Heading />
      <PricingTable />
      <Faq />
      <Cta />
    </>
  );
}
