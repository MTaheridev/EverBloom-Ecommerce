"use client";
import AskQuestionCard from "@/app/landing/Cards/askQuestionCard";
import FAQCard from "@/app/landing/Cards/faqCard";
import React, { useRef, useState, useEffect } from "react";

export const SectionEight: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isMobileCardOpen, setMobileCardOpen] = useState(false);


  const handleCardOpen = () => {
    setMobileCardOpen(!isMobileCardOpen);
  }

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2;

      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      if (newScrollLeft <= 0 || newScrollLeft >= scrollWidth - clientWidth) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="h-[calc(100vh-80px)] w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pl-8 pt-4 lg:mt-8 xl:ml-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">Need Some Help?</h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">
            From plant care to delivery,
          </p>
          <p className="text-xl xl:text-2xl">we've got you covered.</p>
        </div>
      </div>
      <div className="flex flex-row mx-8 xl:mx-20 justify-center overflow-scroll grow">
        <div
          className="grow mt-8 mr-4 overflow-scroll"
        >
          <FAQCard
            faq={{
              question: "How do I care for my plant?",
              answer:
                "We’ve got you! Send a photo within 48 hours, and we’ll replace it free. Our climate-controlled packaging ensures 99% arrive thriving.",
            }}
          />
          <FAQCard
            faq={{
              question: "What is the return policy?",
              answer: "You can return any plant within 30 days of purchase.",
            }}
          />
          <FAQCard
            faq={{
              question: "Do you offer same-day delivery?",
              answer:
                "Yes, we offer same-day delivery for orders placed before noon.",
            }}
          />
          <FAQCard
            faq={{
              question: "Can I customize my order?",
              answer:
                "Absolutely! You can customize your order during the checkout process.",
            }}
          />
          <FAQCard
            faq={{
              question: "How do I care for my plant?",
              answer:
                "We’ve got you! Send a photo within 48 hours, and we’ll replace it free. Our climate-controlled packaging ensures 99% arrive thriving.",
            }}
          />
          <FAQCard
            faq={{
              question: "What is the return policy?",
              answer: "You can return any plant within 30 days of purchase.",
            }}
          />
          <FAQCard
            faq={{
              question: "Do you offer same-day delivery?",
              answer:
                "Yes, we offer same-day delivery for orders placed before noon.",
            }}
          />
          <FAQCard
            faq={{
              question: "Can I customize my order?",
              answer:
                "Absolutely! You can customize your order during the checkout process.",
            }}
          />
        </div>
        <div className="hidden xl:flex w-[30%]">
          <AskQuestionCard xl/>
        </div>
      </div>
      <p className="xl:hidden self-end px-8 py-4 text-accentSecondary" onClick={handleCardOpen}>
        didn’t find your answer here?
      </p>
      {
          isMobileCardOpen &&
          <div className="w-full h-full xl:hidden absolute bg-bgPrimary/90 backdrop-blur-xs flex flex-col justify-center items-center">
            <AskQuestionCard closeModal={handleCardOpen}/>
          </div>
        }
    </div>
  );
};
