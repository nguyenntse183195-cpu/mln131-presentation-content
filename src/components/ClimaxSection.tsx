"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "Bước 1",
    text: 'Theo lý luận Mác - Lênin, dân chủ là một hình thức tổ chức nhà nước của giai cấp thống trị. Nó vẫn mang tính giai cấp và là một công cụ chính trị.',
  },
  {
    step: "Bước 2",
    text: "Chế độ Cộng sản chủ nghĩa (tương lai) là một xã hội không còn giai cấp. Khi giai cấp biến mất, nhà nước cũng mất đi lý do tồn tại.",
  },
  {
    step: "Bước 3",
    text: "Nền dân chủ sẽ mất đi khi giai cấp và nhà nước không còn.",
  },
];

function HighlightedText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.65"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className="flex flex-wrap gap-x-2 gap-y-1">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <HighlightedWord
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </div>
  );
}

function HighlightedWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ["rgb(107, 114, 128)", "rgb(243, 244, 246)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-relaxed"
    >
      {word}
    </motion.span>
  );
}

export default function ClimaxSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const truthRef = useRef(null);
  const truthInView = useInView(truthRef, { once: true, margin: "-50px" });

  return (
    <section
      id="climax"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-accent-red-deep/30 to-accent-red-deep/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red/[0.05] to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent-red/[0.08] blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-gold/[0.04] blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-red font-semibold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Giải mã nghịch lý
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Tại sao lại{" "}
            <span className="gradient-gold">&ldquo;Tự tiêu vong&rdquo;</span>?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent-red rounded-full mx-auto"
          />
        </div>

        {/* Steps */}
        <div className="space-y-20 mb-32">
          {steps.map((step, i) => (
            <div key={i}>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block"
              >
                {step.step}
              </motion.span>
              <HighlightedText text={step.text} />
            </div>
          ))}
        </div>

        {/* The Ultimate Truth */}
        <div ref={truthRef} className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 150, filter: "blur(20px)" }}
            animate={truthInView ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
          >
            <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-gold mb-12 leading-tight">
              ĐÂY KHÔNG PHẢI
              <br />
              LÀ ĐỘC TÀI!
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={truthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed text-balance">
              Độc tài là sự cai trị bằng bạo lực của một bộ máy nhà nước.
            </p>
            <p className="text-text-primary text-lg md:text-xl leading-relaxed font-medium text-balance">
              Khi tiến lên Cộng sản chủ nghĩa, sự &ldquo;tiêu vong&rdquo; của dân chủ
              thực chất là sự tiêu vong của{" "}
              <span className="text-accent-gold font-semibold">
                bộ máy cưỡng chế chính trị
              </span>
              .
            </p>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed text-balance">
              Lúc này, pháp luật ép buộc được thay thế hoàn toàn bằng{" "}
              <span className="text-accent-gold">
                thói quen tự quản lý xã hội
              </span>{" "}
              và{" "}
              <span className="text-accent-gold">đạo đức tự giác</span>{" "}
              của con người.
            </p>
            <div className="pt-6">
              <p className="text-text-primary text-xl md:text-2xl font-serif font-semibold italic md:whitespace-nowrap">
                &ldquo;Đó không phải là sự mất tự do, mà là sự{" "}
                <span className="gradient-gold">thăng hoa của tự do tuyệt đối</span>
                .&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
