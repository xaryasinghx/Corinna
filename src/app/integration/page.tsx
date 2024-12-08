import React from 'react';
import { Caveat } from "next/font/google";
import Navbar from '@/components/main/navbar';

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white">
      <Navbar/>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 transform scale-95">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className={`mb-4 text-5xl tracking-tight text-blue-600 font-extrabold ${caveat.className}`}>
            Corinna
          </h2>
          <p className="mb-5 font-light text-gray-700 sm:text-xl">
            Here at Corinna we focus on markets where technology, innovation, and capital can unlock long-term value
            and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {[
            {
              title: 'Starter',
              price: '$29',
              description: 'Best option for personal use & for your next project.',
              perks: [
                'Individual configuration',
                'No setup, or hidden fees',
                'Team size: 1 developer',
                'Premium support: 6 months',
                'Free updates: 6 months',
              ],
            },
            {
              title: 'Company',
              price: '$99',
              description: 'Relevant for multiple users, extended & premium support.',
              perks: [
                'Individual configuration',
                'No setup, or hidden fees',
                'Team size: 10 developers',
                'Premium support: 24 months',
                'Free updates: 24 months',
              ],
            },
            {
              title: 'Enterprise',
              price: '$499',
              description: 'Best for large scale uses and extended redistribution rights.',
              perks: [
                'Individual configuration',
                'No setup, or hidden fees',
                'Team size: 100+ developers',
                'Premium support: 36 months',
                'Free updates: 36 months',
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-200 shadow"
            >
              <h3 className={`mb-4 text-3xl font-semibold text-blue-600 ${caveat.className}`}>
                {plan.title}
              </h3>
              <p className="font-light text-gray-700 sm:text-lg">{plan.description}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-2xl px-5 py-2.5 text-center ${caveat.className}`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
