import { useState, useCallback, useRef } from "react";
import { BookOpen } from "lucide-react";
import sadMeme from "@/assets/sad-meme.jpg";

interface NoPageProps {
  onYes: () => void;
  onPoem: () => void;
}

const NoPage = ({ onYes, onPoem }: NoPageProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const messages = [
    "Are you sure? 🥺",
    "Really really sure? 😢",
    "Think again... 💔",
    "You're breaking my heart! 😭",
    "Please reconsider! 🙏",
    "I'll be the best! 🌹",
    "Pretty please? 🥹",
    "Last chance? 💕",
    "Come onnn! 😩",
    "Just say yes already! 💖",
  ];

  const moveButton = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const btnWidth = 160;
    const btnHeight = 50;
    const maxX = container.width - btnWidth;
    const maxY = container.height - btnHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoPos({ x: newX, y: newY });
    setAttempts((a) => a + 1);
  }, []);

  const currentMessage = messages[Math.min(attempts, messages.length - 1)];
  const yesScale = 1 + attempts * 0.15;

  return (
    <div className="min-h-screen gradient-love-soft flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-8" style={{ opacity: 0, animation: "fade-in-up 0.6s ease-out forwards" }}>
        <img
          src={sadMeme}
          alt="Sad puppy"
          className="w-48 h-48 object-contain mx-auto mb-6 rounded-2xl shadow-lg"
          width={512}
          height={512}
        />
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
          {currentMessage}
        </h2>
        <p className="text-lg text-muted-foreground font-body">
          {attempts === 0
            ? "You really said no? Look at this face... 🥺"
            : attempts < 5
            ? "The No button seems to have a mind of its own... 😏"
            : "That No button is REALLY hard to click huh? 😄"}
        </p>
      </div>

      <div ref={containerRef} className="relative w-full max-w-md h-64">
        {/* Yes button grows with each attempt */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={onYes}
            className="gradient-love text-primary-foreground font-body font-bold rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl px-8 py-4"
            style={{
              transform: `scale(${yesScale})`,
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          >
            Yes! 💖
          </button>
        </div>

        {/* No button runs away */}
        <button
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          onClick={moveButton}
          className="absolute bg-secondary text-secondary-foreground font-body font-medium rounded-full px-6 py-3 transition-all duration-200 text-sm hover:bg-muted"
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          No 😢
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
  );
};

export default NoPage;