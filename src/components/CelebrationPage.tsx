import { useState, useEffect } from "react";
import { Heart, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";

interface CelebrationPageProps {
  onPoem?: () => void;
  onThankYou?: () => void;
}

const FallingHeart = ({ delay, left }: { delay: number; left: number }) => {
  const size = 12 + Math.random() * 24;
  const duration = 3 + Math.random() * 4;
  return (
    <div
      className="fixed pointer-events-none text-primary"
      style={{
        left: `${left}%`,
        top: "-50px",
        fontSize: `${size}px`,
        animation: `fall ${duration}s linear ${delay}s infinite`,
        opacity: 0.6 + Math.random() * 0.4,
      }}
    >
      {Math.random() > 0.5 ? "❤️" : "💖"}
    </div>
  );
};

const CelebrationPage = ({ onPoem, onThankYou }: CelebrationPageProps) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Real images from assets to replace placeholder images
  const photos = [
    heroBg, image1, image2, image1, image2
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowCarousel(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showCarousel) return;
    const interval = setInterval(() => {
      setActiveSlide((s) => (s + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showCarousel, photos.length]);

  // Play audio and navigate to thank you page after it finishes
  useEffect(() => {
    const audio = new Audio("/celebration.m4a");
    
    const handleAudioEnd = () => {
      if (onThankYou) {
        onThankYou();
      }
    };
    
    audio.addEventListener('ended', handleAudioEnd);
    audio.play().catch(error => console.error("Audio playback failed:", error));
    
    // Cleanup event listener
    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, [onThankYou]);

  return (
    <div className="min-h-screen gradient-love-soft relative overflow-hidden">
      {/* Falling hearts */}
      {[...Array(30)].map((_, i) => (
        <FallingHeart key={i} delay={i * 0.2} left={Math.random() * 100} />
      ))}

      {/* Main message */}
      {!showCarousel && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="animate-heartbeat mb-6">
            <Heart className="w-24 h-24 text-primary fill-primary" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl text-foreground mb-4"
            style={{ opacity: 0, animation: "fade-in-up 1s ease-out 0.5s forwards" }}
          >
            She Said Yes!
          </h1>

          <p
            className="text-xl md:text-2xl font-body text-foreground/80 max-w-md"
            style={{ opacity: 0, animation: "fade-in-up 1s ease-out 1s forwards" }}
          >
            I am the happiest man on the earth right now 🥹💖
          </p>

          {/* Removed the instruction about adding audio */}
        </div>
      )}

      {/* 3D Carousel */}
      {showCarousel && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <h2
            className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center"
            style={{ opacity: 0, animation: "fade-in-up 0.8s ease-out forwards" }}
          >
            I checked my Gallery and found this<br />  photos that I liked and got me to know your face
          </h2>

          <div className="relative w-80 h-80 md:w-96 md:h-96" style={{ perspective: "1000px" }}>
            {photos.map((photo, i) => {
              const angle = (360 / photos.length) * i;
              const currentAngle = angle - (360 / photos.length) * activeSlide;
              const rad = (currentAngle * Math.PI) / 180;
              const z = 250 * Math.cos(rad);
              const x = 250 * Math.sin(rad);
              const opacity = (z + 250) / 500;
              const scale = 0.6 + (z + 250) / 700;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-48 h-48 md:w-56 md:h-56 -mt-24 -ml-24 md:-mt-28 md:-ml-28 rounded-2xl shadow-2xl border-4 border-primary/20 overflow-hidden bg-secondary flex items-center justify-center transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                    opacity: Math.max(0.3, opacity),
                    zIndex: Math.round(z + 300),
                  }}
                >
                  {photo ? (
                    <img 
                      src={photo} 
                      alt={`Celebration photo ${i+1}`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <Heart className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground font-body">Photo {i + 1}</p>
                      <p className="text-xs text-muted-foreground/60 font-body">Add your photo</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* <p className="text-muted-foreground mt-12 font-body text-center text-sm">
            Replace placeholder photos in <code className="bg-secondary px-2 py-1 rounded">CelebrationPage.tsx</code>
          </p> */}
          
          {onPoem && (
            <div className="mt-12">
              <button
                onClick={onPoem}
                className="inline-flex items-center gap-2 text-primary font-body text-lg underline hover:no-underline"
              >
                <BookOpen className="w-5 h-5" />
                Read Our Love Poem
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CelebrationPage;