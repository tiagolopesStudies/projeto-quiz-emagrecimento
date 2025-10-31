import { useEffect, useState } from "react";
import transformation1 from "@/assets/transformation-1.webp";
import transformation2 from "@/assets/transformation-2.png";
import transformation3 from "@/assets/transformation-3.jpg";
import transformation4 from "@/assets/transformation-4.jpg";

const transformations = [
  { image: transformation1, text: "Perda média: 8 kg em 18 dias — resultado individual." },
  { image: transformation2, text: "Perda média: 6.5 kg em 18 dias — resultado individual." },
  { image: transformation3, text: "Perda média: 9 kg em 18 dias — resultado individual." },
  { image: transformation4, text: "Perda média: 7.2 kg em 18 dias — resultado individual." },
];

export const BeforeAfterCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-xl aspect-square shadow-card">
        {transformations.map((transformation, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={transformation.image}
              alt={`Transformação ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-sm font-medium">{transformation.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {transformations.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
