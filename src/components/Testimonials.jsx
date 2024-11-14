import React from "react";
import { testimonials } from "../constants";

function Testimonials() {
  return (
    <section className="container mx-auto pb-20 my-20 border-b border-neutral-600">
        <h2 className="text-center text-4xl xl:text-6xl my-16">what people are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {
                testimonials.map(item => (
                        <article key={item.user} >
                            <div className=" space-y-8 p-6 bg-neutral-900 text-neutral-400 rounded-lg ">
                                <p>{item.text}</p>
                                <div className="flex gap-5">
                                    <img src={item.image} alt="user picture" className="border border-neutral-200 size-12 rounded-full" />
                                    <div>
                                        <h4 className="">{item.user}</h4>
                                        <em className="text-sm text-neutral-400/40">{item.company}</em>
                                    </div>
                                </div>
                            </div>
                    </article>
                ))
            }
        </div>
    </section>
  );
}

export default Testimonials;
