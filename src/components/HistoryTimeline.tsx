"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const timelineNodes = [
  {
    era: "Cộng sản nguyên thủy",
    period: "Thời kỳ đầu",
    description: "Chưa có nền dân chủ chính thức.",
    detail: "Xã hội chưa có giai cấp, chưa có nhà nước, và do đó chưa xuất hiện bất kỳ hình thức dân chủ nào.",
    color: "text-text-muted",
    dotColor: "bg-text-muted",
    index: 0,
  },
  {
    era: "Chiếm hữu nô lệ",
    period: "Cổ đại",
    description: "Nền dân chủ chủ nô — đầu tiên trong lịch sử.",
    detail: "Xuất hiện nền dân chủ chủ nô, nền dân chủ đầu tiên trong lịch sử, nhưng chỉ phục vụ cho giai cấp chủ nô.",
    color: "text-accent-gold",
    dotColor: "bg-accent-gold",
    index: 1,
  },
  {
    era: "Phong kiến",
    period: "Trung cổ",
    description: "Nền quân chủ chuyên chế — không có dân chủ.",
    detail: "Không có nền dân chủ, thay vào đó là nền quân chủ chuyên chế, quyền lực tập trung trong tay vua chúa và quý tộc.",
    color: "text-accent-red",
    dotColor: "bg-accent-red",
    index: 2,
  },
  {
    era: "Tư bản chủ nghĩa",
    period: "Cận - Hiện đại",
    description: "Nền dân chủ tư sản ra đời.",
    detail: "Nền dân chủ tư sản ra đời, mở rộng quyền chính trị cho nhiều tầng lớp hơn, nhưng bản chất vẫn phục vụ giai cấp tư sản.",
    color: "text-blue-400",
    dotColor: "bg-blue-400",
    index: 3,
  },
  {
    era: "Xã hội chủ nghĩa",
    period: "1871 — nay",
    description: "Nền dân chủ vô sản (XHCN) — cao hơn về chất.",
    detail: "Nền dân chủ vô sản (XHCN) ra đời, là nền dân chủ cao hơn về chất. Phôi thai từ Công xã Pari (1871) và xác lập sau Cách mạng tháng Mười Nga (1917).",
    color: "text-accent-gold",
    dotColor: "bg-accent-gold",
    index: 4,
  },
];

function TimelineNode({
  node,
  isLeft,
}: {
  node: (typeof timelineNodes)[0];
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${
        isLeft ? "justify-start" : "justify-end"
      } mb-16 md:mb-24`}
    >
      {/* Connector to center line */}
      <motion.div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-border ${
          isLeft ? "right-1/2 left-[calc(50%-100px)]" : "left-1/2 right-[calc(50%-100px)]"
        }`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transformOrigin: isLeft ? "right" : "left" }}
      />

      {/* Dot on center */}
      <motion.div
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${node.dotColor} ring-4 ring-bg-base z-10`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
      />

      {/* Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-60px)] ${
          isLeft ? "md:pr-0" : "md:pl-0"
        }`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-border-gold transition-all duration-500 group">
          {/* Mobile dot */}
          <div className="flex md:hidden items-center gap-3 mb-3">
            <div className={`w-3 h-3 rounded-full ${node.dotColor}`} />
            <span className="text-xs tracking-wider uppercase text-text-muted">
              {node.period}
            </span>
          </div>

          <div className="hidden md:block">
            <span className="text-xs tracking-wider uppercase text-text-muted mb-2 block">
              {node.period}
            </span>
          </div>

          <h3
            className={`font-serif text-xl md:text-2xl font-bold mb-3 ${node.color} group-hover:brightness-110 transition-all`}
          >
            {node.era}
          </h3>
          <p className="text-text-primary font-medium mb-2 text-base md:text-lg">
            {node.description}
          </p>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            {node.detail}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-32 md:py-40" ref={sectionRef}>
      {/* Section heading */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-accent-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4"
        >
          Tiến trình lịch sử
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Những nấc thang lịch sử của{" "}
          <span className="gradient-gold">Dân chủ</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={sectionInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-1 bg-accent-gold rounded-full mx-auto"
        />
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative max-w-6xl mx-auto px-6">
        {/* Center vertical line (desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border">
          <motion.div
            className="w-full bg-gradient-to-b from-accent-gold to-accent-red"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Nodes */}
        {timelineNodes.map((node, i) => (
          <TimelineNode key={node.era} node={node} isLeft={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
