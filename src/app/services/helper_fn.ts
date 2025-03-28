import { FaqData, FAQItem } from "../types";

export const transformFaqData = (data: FaqData): FAQItem[] => {
    return Object.entries(data.content.faq).map(([question, answer]) => ({
      question,
      answer,
    }));
  };
  