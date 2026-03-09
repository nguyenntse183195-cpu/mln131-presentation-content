"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function ParticleField() {
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent-gold/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-base via-[#0f1629] to-[#0d1117] animate-gradient" />

      {/* Radial orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-gold/[0.03] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-red/[0.05] blur-[100px]" />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-accent-gold font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          Tổng quan về Dân chủ
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-tight mb-8 mx-auto xl:whitespace-nowrap"
        >
          Khi tiến tới cộng sản chủ nghĩa,
          <br className="block" />
          nền dân chủ sẽ{" "}
          <span className="gradient-gold whitespace-nowrap">&ldquo;tự tiêu vong&rdquo;?</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4"
        >
          Dân chủ &ldquo;tự tiêu vong&rdquo; có phải là sự mất dân chủ, hay là
          sự phát triển đến một hình thức cao hơn?
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Có người cho rằng như vậy nghĩa là con người sẽ mất tự do, sống trong
          một chế độ độc tài toàn trị. Sự thật là gì?
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">
          Cuộn xuống
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-accent-gold" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-base to-transparent" />
    </section>
  );
}
