import ContactContent from "@/components/contact-us/ContactContent";
import ContactHero from "@/components/contact-us/ContactHero";

export default function ContactUsPage() {
  return (
    <main className="flex flex-col gap-0">
      <ContactHero />
      <ContactContent />
    </main>
  );
}
