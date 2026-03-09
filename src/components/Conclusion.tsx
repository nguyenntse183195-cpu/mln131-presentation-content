"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Mối quan hệ biện chứng",
    content:
      "Dân chủ XHCN là cơ sở để xây dựng nhà nước; ngược lại, nhà nước là công cụ để thực thi quyền làm chủ của nhân dân.",
  },
  {
    icon: Shield,
    title: "Định hướng tại Việt Nam",
    content:
      "Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân. Phát huy dân chủ đi đôi với tăng cường pháp chế và phòng, chống tham nhũng.",
  },
];

export default function Conclusion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conclusion" className="relative py-32 md:py-40" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-red-deep/40 via-bg-base to-bg-base" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Kết luận
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Thực tiễn Việt Nam &{" "}
            <span className="gradient-gold">Trách nhiệm của chúng ta</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent-gold rounded-full mx-auto"
          />
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2, type: "spring", bounce: 0.3 }}
                className="glass-card rounded-2xl p-8 md:p-10 hover:border-border-gold transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary mb-4">
                  {point.title}
                </h3>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  {point.content}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 80, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center"
        >
          <div className="glass-card rounded-3xl p-10 md:p-16 max-w-3xl mx-auto glow-gold">
            <Star className="w-10 h-10 text-accent-gold mx-auto mb-6" />
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-6">
              Công dân có trách nhiệm tích cực trong việc xây dựng và bảo vệ chế
              độ dân chủ.
            </p>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary leading-snug">
              Vậy{" "}
              <span className="gradient-gold">trách nhiệm của bạn</span>{" "}
              trong kỷ nguyên hiện nay là gì?
            </h3>
            <motion.div
              className="mt-8 inline-flex items-center gap-2 text-accent-gold font-medium"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>Hãy suy ngẫm</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 pt-10 border-t border-border"
        >
          <p className="text-text-muted text-sm">
            Bài trình bày môn{" "}
            <span className="text-text-secondary">MLN131</span> — Chủ nghĩa xã
            hội khoa học
          </p>
        </motion.div>
      </div>
    </section>
  );
}
