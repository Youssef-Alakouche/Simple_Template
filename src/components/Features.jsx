import React from "react";

import { features } from "../constants";

function Features() {
  return (
    <section className="container mx-auto text-center pb-20 my-20 border-b border-neutral-600">
      <header>
        <strong className="font-medium tracking-tight px-2 py-1 bg-orange-500/10 rounded-md">
          FEATURE
        </strong>
      </header>
      <div className="my-20 lg:my-32">
        <h2 className="text-4xl md:text-5xl xl:text-6xl">
          Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">your code</span>
        </h2>
      </div>
      <div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center px-12 sm:px-20 xl:px-32">
        {features.map((item) => (
          <article key={item.text} className="flex flex-col items-center md:items-start md:flex-row gap-4 " >
            <aside className="text-orange-500 p-2 rounded-2xl bg-orange-500/5">{item.icon}</aside>
            <div className="md:text-start md:pt-2">
              <h3 className="mb-5">{item.text}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
