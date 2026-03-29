import { Heart, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ThankYouPage = ({ onPoem }: { onPoem?: () => void }) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for softness */}
      <div className="absolute inset-0 bg-pink-50/70 backdrop-blur-sm z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-pink-300 text-4xl animate-bounce z-10">✨</div>
      <div className="absolute bottom-20 right-10 text-pink-400 text-4xl animate-pulse z-10">💖</div>
      <div className="absolute top-1/3 right-1/4 text-pink-200 text-3xl animate-ping z-10">💕</div>
      
      <div className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-pink-200">
        <div className="flex justify-center mb-8">
          <Heart className="w-16 h-16 text-pink-500 fill-current" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-10">
          A Promise From The Heart
        </h1>
        
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 font-serif leading-relaxed">
              Thank you for giving us a chance.
            </p>
          </div>
          
          <div className="border-t border-pink-200 pt-6"></div>
          
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 font-serif leading-relaxed">
              I promise, as God helps me, to love you newly each day.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium">
            With all my love, forever and always
          </p>
          <p className="text-pink-600 font-semibold mt-2">
            &mdash; Jatto Overcomer
          </p>
        </div>
      </div>
      
      {onPoem && (
        <div className="mt-12 z-10">
          <button
            onClick={onPoem}
            className="inline-flex items-center gap-2 text-pink-600 font-body text-lg underline hover:no-underline bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <BookOpen className="w-5 h-5" />
            Read Our Love Poem
          </button>
        </div>
      )}
    </div>
  );
};

export default ThankYouPage;