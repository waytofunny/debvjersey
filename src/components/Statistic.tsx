'use client';

import { Card, CardContent } from './ui/Card';
import { motion } from 'framer-motion';
import { FiDatabase, FiClock, FiLayers } from 'react-icons/fi';

const statistics = [
  {
    label: 'Total Jersey',
    value: 40,
    icon: <FiDatabase size={24} />,
    desc: 'Koleksi keseluruhan dari berbagai musim & klub.',
  },
  {
    label: 'Vintage Jersey',
    value: 15,
    icon: <FiClock size={24} />,
    desc: 'Jersey klasik yang langka & bersejarah.',
  },
  {
    label: 'Longsleeve Jersey',
    value: 12,
    icon: <FiLayers size={24} />,
    desc: 'Jersey lengan panjang khas era 90-an & awal 2000-an.',
  },
];

export default function Statistic() {
  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-[#fdf6ec] text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Jersey Collection Overview</h2>
        <p className="text-sm text-gray-600">Statistik ringkas koleksi jersey yang ada di situs ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statistics.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-[#2b2b2b] border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
            <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-yellow-600 dark:text-yellow-400 font-semibold">
                {stat.icon}
                <span>{stat.label}</span>
                </div>
                <h3 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.desc}
                </p>
            </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
