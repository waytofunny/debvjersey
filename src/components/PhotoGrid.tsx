'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import photos from '../data/photos';
import { useState } from 'react';


export default function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; caption: string } | null>(null);

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
      {photos.map((photo, i) => (
        <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
        onClick={() => setSelectedPhoto(photo)}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            width={500}
            height={300}
            className="object-cover hover:scale-1 w-full h-full transition-transform duration-300"
          />
          {/* Overlay and caption */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0  inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <h3 className="text-lg font-semibold">{photo.title}</h3>
            <p className="text-sm mt-1">{photo.caption}</p>
          </motion.div>
        </div>
      ))}
    </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)} // Click outside to close
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing on image click
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                width={1000}
                height={600}
                className="rounded-xl max-h-[90vh] object-contain"
              />
              <button
                className="border-2 absolute top-0 right-0 bg-black/70 text-white px-3 py-1 rounded-md text-sm hover:bg-black"
                onClick={() => setSelectedPhoto(null)}
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
