import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = ({ 
  heading = "Frequently Asked Questions", 
  items = [
    {
      question: "How do I book an event venue?",
      answer: "To book an event venue, enter your event details, select a location, date, and capacity. Browse available venues and complete your booking by providing your details and payment information.",
    },
    {
      question: "Can I modify or cancel my event booking?",
      answer: "Yes, you can modify or cancel your event booking based on the venue's cancellation policy. Visit 'My Bookings' and follow the instructions. Cancellation fees may apply depending on the venue's terms.",
    },
    {
      question: "What types of events can I book?",
      answer: "You can book venues for weddings, corporate meetings, birthday parties, conferences, concerts, and more.",
    },
    {
      question: "Do you offer event planning services?",
      answer: "Yes, we provide event planning services, including decoration, catering, entertainment, and logistics. Contact our support team for customized packages.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, UPI, net banking, and digital wallets. Some venues may also offer pay-on-venue options.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via live chat, email, or phone. Visit our 'Contact Us' page for details.",
    },
  ] 
}) => {
  return (
    <section className="py-16 bg-[#141413] text-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold md:text-5xl">{heading}</h1>

        {/* Accordion Wrapper */}
        <div className="mt-10 max-w-3xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg bg-zinc-800">
                <AccordionTrigger className="p-4 text-lg font-medium text-gray-200 hover:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-400">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
