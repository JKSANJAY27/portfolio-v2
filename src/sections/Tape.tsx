'use client';
import { motion } from 'framer-motion';
import ScrollVelocity from '@/components/animations/ScrollVelocity';

export const TapeSection = () => {
  return (
    <div id="skills" className="py-12 overflow-hidden relative">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

      <ScrollVelocity
        texts={[
          'React • Next.js • Node.js • Express.js • REST APIs • WebRTC • JWT Auth • Zustand • TanStack Query',
          'Python • PyTorch • TensorFlow • ViT • Transformer • Mask R-CNN • MongoDB • PostgreSQL • C++ • Java',
        ]}
        velocity={60}
        className="text-white/30 text-3xl font-bold tracking-widest uppercase"
        parallaxClassName="py-2"
        scrollerClassName="gap-8"
        numCopies={4}
        parallaxStyle={{ opacity: 1 }}
      />
    </div>
  );
};
