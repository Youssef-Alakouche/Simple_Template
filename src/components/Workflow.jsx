import React from "react";
import { checklistItems } from "../constants";
import { CircleCheckBig } from "lucide-react";
import code from "../assets/code.jpg";

function Workflow() {
  return (
    <section id="Workflow" className="container mx-auto text-center pb-20 my-20 border-b border-neutral-600">
      <header>
        <h2 className="text-4xl md:text-5xl xl:text-6xl">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            coding workflow.
          </span>
        </h2>
      </header>
      <div className="flex justify-center flex-col items-center lg:flex-row gap-10  mt-12 px-12 md:px-20 xl:px-32">
        <img src={code} alt="code picture" className="px-12 w-full lg:px-0  lg:w-1/2" />
        <div className="flex flex-col text-start gap-6 lg:gap-12">
          {checklistItems.map((item) => (
            <article key={item.title} className="flex items-start gap-4 lg:gap-6">
              <aside className="text-green-500"><CircleCheckBig /></aside>
              <div>
                <h3 className="mb-2 text-lg">{item.title}</h3>
                <p className="text-neutral-500">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
