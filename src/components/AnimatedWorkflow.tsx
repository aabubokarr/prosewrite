'use client';

import { useEffect, useRef, useState } from 'react';
import { Mic, Edit, FileText } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Speak',
    description: 'Dictate your ideas naturally with 95% accuracy',
    details:
      "ProseWrite's advanced speech recognition technology allows you to speak your thoughts freely. Our AI understands context and automatically adds punctuation, making the dictation process smooth and effortless.",
  },
  {
    icon: Edit,
    title: 'Auto-Edit',
    description: 'AI refines your text while preserving your style',
    details:
      "As you dictate, ProseWrite's intelligent editing system works in real-time to refine your text. It corrects grammar, enhances clarity, and even suggests improvements to your writing style, all while maintaining your unique voice.",
  },
  {
    icon: FileText,
    title: 'Finalize',
    description: 'Export your polished content in any format',
    details:
      "Once you're satisfied with your work, ProseWrite allows you to export your polished content in various formats. Whether you need a Word document, a PDF, or even a formatted blog post, ProseWrite has you covered.",
  },
];

export function AnimatedWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.5 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-zinc-950 to-zinc-900 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            How ProseWrite Works
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Transform your ideas into polished content in three simple steps
          </p>
        </div>
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`grid items-center gap-8 transition-all duration-500 ease-in-out md:grid-cols-2 ${
                activeStep === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-50'
              }`}
            >
              <div
                className={`order-2 text-center md:text-left md:order-${index % 2 === 0 ? 1 : 2}`}
              >
                <h3 className="mb-4 text-2xl font-bold text-white">{step.title}</h3>
                <p className="mb-4 text-lg text-zinc-300">{step.description}</p>
                <p className="text-zinc-400">{step.details}</p>
              </div>
              <div className={`order-1 flex justify-center md:order-${index % 2 === 0 ? 2 : 1}`}>
                <div
                  className={`relative flex h-40 w-40 items-center justify-center rounded-full 
                    bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg transition-all duration-500 ease-in-out 
                    ${activeStep === index ? 'scale-110' : 'scale-100'}`}
                >
                  <step.icon className="h-20 w-20 text-white" />
                  <div className="absolute inset-0 -z-10 rounded-full bg-orange-500 opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
