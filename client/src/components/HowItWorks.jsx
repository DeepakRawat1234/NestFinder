import Icon from "./Icon";
import { HOW_STEPS } from "../data/constants";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-4">How It Works</h2>
        <p className="text-slate-500 mb-16">Three simple steps to your new home</p>
        <div className="relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px border-t-2 border-dashed border-indigo-100" />
          {HOW_STEPS.map((step) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center">
              <div className={`w-24 h-24 ${step.bg} ${step.color} rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl`}>
                <Icon name={step.icon} className="text-4xl" />
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}