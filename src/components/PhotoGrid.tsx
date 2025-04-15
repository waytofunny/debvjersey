'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import photos from '../data/photos';

// export default function PhotoGrid({ onImageClick }: { onImageClick: (src: string) => void }) {
export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
      {photos.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
          // onClick={() => onImageClick(src)}
        >
          <Image src={src} alt={`Photo ${i}`} width={500} height={300} className="object-cover w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
}
