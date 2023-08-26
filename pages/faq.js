import React from "react";

import Layout from "../components/layout";

const Faq = () => {
  return (
    <Layout title={`FAQ'S`}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-6">FAQ'S</h1>
        {faqs.map((faq, index) => (
          <article key={index} className="w-[90%] my-6">
            <h2 className="text-xl font-bold">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </article>
        ))}
       
        
       
        <p className="text-xl font-semibold w-[90%] my-6">
          Remember, our customer support team is always here to assist you. If
          you have any more questions, feel free to reach out to us through our
          contact page or live chat, and we'll be happy to help!
        </p>
      </div>
    </Layout>
  );
};

const faqs = [
  {
    question: "Q: How can I place an order on your online store?",
    answer:
      "A: Placing an order is simple! Browse our products, select the items you want, and add them to your cart. Once you're ready to checkout, click on the cart icon and follow the prompts to provide your shipping and payment information. After confirming your order, you'll receive a confirmation email.",
  },
  {
    question: "Q: What payment methods do you accept?",
    answer:
      "A: We accept a variety of payment methods to make your shopping experience convenient. You can pay using major credit and debit cards, as well as popular digital wallets like Apple Pay and GooglePay. We also offer secure payment through PayPal.",
  },
  {
    question: "Q: How do I track my order after it's been placed?",
    answer:
      "A: Tracking your order is easy! As soon as your order is shipped, we'll send you a shipping confirmation email with a tracking link. Just click on the link to view the real-time status of your package and estimated delivery date.",
  },
  {
    question: "Q: What's your return and exchange policy?",
    answer:
      "A: We want you to love your purchase! If you're not satisfied, you can return or exchange items within 30 days of receiving your order. Items must be in their original condition with tags attached. Simply contact our customer support team to initiate the process. Please note that personalized or final sale items may not be eligible for return or exchange.",
  },
  
]

export default Faq;
