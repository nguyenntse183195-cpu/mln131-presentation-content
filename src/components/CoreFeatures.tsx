"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Factory, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Landmark,
    label: "Chính trị",
    number: "01",
    title: "Bản chất Chính trị",
    content:
      "Mang bản chất của giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc. Thực hiện cơ chế nhất nguyên chính trị, do Đảng Cộng sản lãnh đạo. Nhân dân là chủ thể quyền lực nhà nước, tham gia vào quản lý nhà nước.",
    gradient: "from-accent-gold/20 to-transparent",
    borderColor: "border-accent-gold/30",
    iconBg: "bg-accent-gold/10",
    iconColor: "text-accent-gold",
  },
  {
    icon: Factory,
    label: "Kinh tế",
    number: "02",
    title: "Bản chất Kinh tế",
    content:
      "Dựa trên chế độ sở hữu xã hội (công hữu) về các tư liệu sản xuất chủ yếu. Nhân dân là chủ thể phát triển lực lượng sản xuất và là người thụ hưởng lợi ích kinh tế.",
    gradient: "from-blue-500/20 to-transparent",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Lightbulb,
    label: "Tư tưởng - Văn hóa",
    number: "03",
    title: "Bản chất Tư tưởng - Văn hóa - Xã hội",
    content:
      "Lấy chủ nghĩa Mác - Lênin làm hệ tư tưởng chủ đạo. Thực hiện giải phóng con người triệt để, phát triển toàn diện cá nhân và thực hiện quyền tự do, bình đẳng.",
    gradient: "from-accent-red/20 to-transparent",
    borderColor: "border-accent-red/30",
    iconBg: "bg-accent-red/10",
    iconColor: "text-red-400",
  },
];

export default function CoreFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="core-features" className="relative py-32 md:py-40" ref={ref}>
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-gold/[0.02] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Bản chất Dân chủ XHCN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-gold">3 Phương diện</span> Bản chất
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent-gold rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Dân chủ XHCN là nền dân chủ mà mọi quyền lực thuộc về nhân dân,
            được thực hiện thông qua Nhà nước pháp quyền XHCN dưới sự lãnh đạo
            của Đảng Cộng sản.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2, type: "spring", bounce: 0.2 }}
                className={`relative rounded-2xl border ${feature.borderColor} bg-bg-card/50 backdrop-blur-sm overflow-hidden group hover:border-opacity-60 transition-all duration-500`}
              >
                {/* Gradient top */}
                <div
                  className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${feature.gradient}`}
                />

                <div className="relative p-8 md:p-10">
                  {/* Number */}
                  <span className="text-7xl font-serif font-bold text-white/[0.04] absolute top-4 right-6">
                    {feature.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  {/* Label */}
                  <span
                    className={`text-xs font-semibold tracking-wider uppercase ${feature.iconColor} mb-2 block`}
                  >
                    {feature.label}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary mb-4">
                    {feature.title}
                  </h3>

                  {/* Content */}
                  <p className="text-text-secondary text-base leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
