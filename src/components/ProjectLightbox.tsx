"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxProject {
  name: string;
  category: string;
  photos: string[];
}

interface Props {
  project: LightboxProject;
  photoIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectPhoto: (i: number) => void;
}

export default function ProjectLightbox({
  project,
  photoIndex,
  onClose,
  onNext,
  onPrev,
  onSelectPhoto,
}: Props) {
  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex flex-col"
        style={{ backgroundColor: "rgba(7,9,13,0.97)" }}
        onClick={onClose}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid #21262D" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "#F97316" }}>
              {project.category}
            </p>
            <h2
              className="text-xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-heading)", color: "#F0F6FC" }}
            >
              {project.name}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: "#8B949E" }}>
              {photoIndex + 1} / {project.photos.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded transition-colors duration-150 hover:bg-white/10"
              style={{ color: "#F0F6FC" }}
              aria-label="Close"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Main photo area */}
        <div
          className="flex-1 relative flex items-center justify-center overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Prev button */}
          <button
            onClick={onPrev}
            className="absolute left-4 z-10 p-3 rounded-full transition-all duration-150 hover:scale-110"
            style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#F97316" }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Photo */}
          <AnimatePresence mode="wait">
            <motion.img
              key={photoIndex}
              src={project.photos[photoIndex]}
              alt={`${project.name} – photo ${photoIndex + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="max-h-full max-w-full object-contain"
              style={{ maxHeight: "calc(100vh - 200px)" }}
              // eslint-disable-next-line @next/next/no-img-element
            />
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={onNext}
            className="absolute right-4 z-10 p-3 rounded-full transition-all duration-150 hover:scale-110"
            style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#F97316" }}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          className="flex-shrink-0 px-6 py-4 flex gap-2 overflow-x-auto"
          style={{ borderTop: "1px solid #21262D" }}
          onClick={(e) => e.stopPropagation()}
        >
          {project.photos.map((src, i) => (
            <button
              key={i}
              onClick={() => onSelectPhoto(i)}
              className="relative flex-shrink-0 overflow-hidden rounded transition-all duration-150"
              style={{
                width: 72,
                height: 52,
                outline: i === photoIndex ? "2px solid #F97316" : "2px solid transparent",
                outlineOffset: "2px",
                opacity: i === photoIndex ? 1 : 0.5,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
