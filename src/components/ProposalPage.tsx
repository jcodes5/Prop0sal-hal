import heroBg from "@/assets/hero-bg.jpg";
import image1 from "@/assets/image1.jpg";  // Replace with your actual image
import image2 from "@/assets/image2.jpg";  // Replace with your actual image  // Replace with your actual image
import { Heart, BookOpen } from "lucide-react";

interface ProposalPageProps {
  onYes: () => void;
  onNo: () => void;
  onPoem: () => void;
}

const FloatingHeart = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <div
    className="absolute text-primary opacity-30 pointer-events-none"
    style={{
      left,
      top: `${Math.random() * 80}%`,
      animation: `float 3s ease-in-out ${delay}s infinite`,
      fontSize: `${size}px`,
    }}
  >
    ❤️
  </div>
);

const ProposalPage = ({ onYes, onNo, onPoem }: ProposalPageProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-love-soft opacity-80" />
      </div>

      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <FloatingHeart
          key={i}
          delay={i * 0.4}
          left={`${10 + i * 11}%`}
          size={20 + Math.random() * 30}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="animate-heartbeat inline-block mb-6">
          <Heart className="w-16 h-16 text-primary fill-primary mx-auto" />
        </div>

        <h1
          className="font-display text-5xl md:text-7xl text-foreground mb-4"
          style={{ opacity: 0, animation: "fade-in-up 0.8s ease-out 0.3s forwards" }}
        >
          Hey Promise...
        </h1>

        <p
          className="text-xl md:text-2xl font-body text-foreground/80 mb-12"
          style={{ opacity: 0, animation: "fade-in-up 0.8s ease-out 0.6s forwards" }}
        >
          I love you and I want to be with you forever. But I also want to know you better. So, I'm asking If you will be my cutie bunnie pie?
        </p>

        {/* Image gallery section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img 
              src={image1} 
              alt="Special moment 1" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img 
              src={image2} 
              alt="Special moment 2" 
              className="w-full h-48 object-cover"
            />
          </div>
          
           <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img 
              src={image2} 
              alt="Special moment 2" 
              className="w-full h-48 object-cover"
            />
          </div>
          {/* <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img 
              src={image3} 
              alt="Special moment 3" 
              className="w-full h-48 object-cover"
            />
          </div> */}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ opacity: 0, animation: "fade-in-up 0.8s ease-out 0.9s forwards" }}
        >
          <button
            onClick={onYes}
            className="gradient-love text-primary-foreground font-body font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          >
            Yes! 💖
          </button>

          <button
            onClick={onNo}
            className="bg-secondary text-secondary-foreground font-body font-medium text-lg px-10 py-3 rounded-full hover:bg-muted transition-colors duration-300"
          >
            No...
          </button>
        </div>
        
        <div className="mt-8">
          <button
            onClick={onPoem}
            className="inline-flex items-center gap-2 text-primary font-body text-lg underline hover:no-underline"
          >
            <BookOpen className="w-5 h-5" />
            Read Our Love Poem
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;