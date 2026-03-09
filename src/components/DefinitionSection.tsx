"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Scale, Heart } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Nghĩa gốc",
    subtitle: "Tiếng Hy Lạp cổ đại",
    content:
      'Xuất phát từ tiếng Hy Lạp cổ đại, dân chủ (Demos Kratos) có nghĩa là "quyền lực của nhân dân" hay "quyền lực thuộc về nhân dân".',
    accent: "gold",
  },
  {
    icon: Scale,
    title: "Quan điểm Mác - Lênin",
    subtitle: "Hình thức tổ chức nhà nước",
    content:
      'Về chính trị, dân chủ là một hình thức tổ chức nhà nước của giai cấp thống trị, một kiểu nhà nước mà ở đó các quyền cơ bản của con người được pháp luật hóa. Lênin khẳng định dân chủ là "sự thống trị của đa số".',
    accent: "red",
  },
  {
    icon: Heart,
    title: "Tư tưởng Hồ Chí Minh",
    subtitle: "Giá trị nhân loại",
    content:
      '"Dân là chủ" và "Dân làm chủ". Trong chế độ ta, nhân dân là chủ, còn Chính phủ là "đầy tớ trung thành của nhân dân".',
    accent: "gold",
  },
];

function ScrollCard({
  card,
}: {
  card: (typeof cards)[0];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100, filter: "blur(10px)", scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }
          : {}
      }
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card rounded-2xl p-8 md:p-10 group hover:border-border-gold transition-colors duration-500"
    >
      <div className="flex items-start gap-5">
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
            card.accent === "gold"
              ? "bg-accent-gold/10 text-accent-gold"
              : "bg-accent-red/10 text-accent-red"
          } group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-primary">
              {card.title}
            </h3>
            <span className="text-xs tracking-wider uppercase text-text-muted bg-bg-card px-3 py-1 rounded-full">
              {card.subtitle}
            </span>
          </div>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            {card.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DefinitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="definition" className="relative py-32 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                Khái niệm
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Nguồn gốc &{" "}
                <span className="gradient-gold">Bản chất cốt lõi</span>
              </h2>
              <div className="w-16 h-1 bg-accent-gold rounded-full mb-6" />
              <p className="text-text-secondary text-lg leading-relaxed">
                Dân chủ không chỉ là một khái niệm chính trị — nó là nền tảng
                của mọi xã hội văn minh, được nhìn nhận từ nhiều góc độ khác
                nhau qua hàng nghìn năm lịch sử.
              </p>
            </motion.div>
          </div>

          {/* Right scrolling cards */}
          <div className="lg:col-span-8 space-y-16 lg:space-y-24 pt-10 lg:pt-0">
            {cards.map((card, i) => (
              <ScrollCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
