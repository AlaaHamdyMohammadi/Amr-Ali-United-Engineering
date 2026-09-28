import TermsContent from "@/components/terms-and-conditions/TermsContent";
import TermsHero from "@/components/terms-and-conditions/TermsHero";


export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col gap-0">
      <TermsHero />
      <TermsContent />
    </main>
  );
}
