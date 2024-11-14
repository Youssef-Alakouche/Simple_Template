import React from "react";
import { pricingOptions } from "../constants";
import { CircleCheck } from "lucide-react";

function Pricing() {
  return (
    <section className="container mx-auto pb-20 my-20 border-b border-neutral-600">
      <h2 className="text-center text-4xl xl:text-6xl my-16">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4  sm:px-12 xl:px-40">
        {pricingOptions.map((item) => (
          <article key={item.title} className="mx-auto min-w-[300px] max-w-[350px] p-5 lg:p-7 space-y-8 border border-neutral-700 rounded-lg">
            <h3 className="text-2xl">
              {item.title}{" "}
              <span className="text-sm text-orange-500">{item.title == "Pro" ? "(Most Popular)" : ""}</span>
            </h3>
            <div>
              <span className="text-4xl">{item.price}</span>
              <span className="text-sm text-neutral-500"> /Month</span>
            </div>
            <ul className="space-y-5">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-2 items-center">
                  <CircleCheck size={19} className="text-green-400" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div>
            <button className="text-center mt-10 w-full border border-orange-800 transition-all rounded-md py-2 hover:bg-orange-800">Subscribe</button>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
