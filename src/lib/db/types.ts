export interface FAQItem {
  question: string;
  answer: string;
  ctaPrimary?: {
    text: string;
    url: string;
  };
  ctaSecondary?: {
    text: string;
    url: string;
  };
}
