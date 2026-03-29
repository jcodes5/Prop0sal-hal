import { useState } from "react";
import { Heart, BookOpen } from "lucide-react";

interface QuestionsPageProps {
  onComplete: (answers: string[]) => void;
  onPoem?: () => void;
}

const questions = [
  {
    question: "What Kind of moment makes you feel special? 💕",
    options: [
      "A calm, meaningful conversation.",
      "A nice meal and good company.",
      "Music + late night vibes.",
      "Something spontaneous and different.",
    ],
  },
  {
    question: "Do you believe the right person can make simple moments unforgettable? 💕",
    options: [
      "Yes, definitely.",
      "I think so.",
      "Depends on the person.",
      "Convince me.",
    ],
  },
  {
    question: "I would Like to be that person for you... would you want to go on a date with me? 🌹🌹",
    options: [
      "Yes.",
      "I'd love to, but I'm shy.",
      "Maybe... tell me more.",
      "Let me think about it.",
    ],
  },
];

const responses = {
  thirdQuestion: {
    "Yes.": "Perfect. I'll make it worth it, I promise. 💕",
    "I'd love to, but I'm shy.": "No pressure... we'll take it at your pace. 💕",
    "Maybe... tell me more.": "Fair enough... I like a little mystery. Let me prove it to you. 💕",
    "Let me think about it.": "Fair enough... I like a little mystery. Let me prove it to you. 💕",
  },
};

const QuestionsPage = ({ onComplete, onPoem }: QuestionsPageProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState("");

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQ === 2) {
      setResponseText(responses.thirdQuestion[option as keyof typeof responses.thirdQuestion]);
      setShowResponse(true);
      setTimeout(() => {
        onComplete(newAnswers);
      }, 2500);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen gradient-love-soft flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-body text-muted-foreground">
              Question {currentQ + 1} of {questions.length}
            </span>
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full gradient-love rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border"
          style={{ opacity: 0, animation: "fade-in-up 0.5s ease-out forwards" }}
        >
          {showResponse ? (
            <div className="text-center">
              <h2 className="font-display text-3xl text-foreground mb-6">
                {responseText}
              </h2>
              <Heart className="w-12 h-12 text-primary fill-primary mx-auto animate-heartbeat" />
            </div>
          ) : (
            <>
              <h2 className="font-display text-3xl text-foreground mb-6">
                {questions[currentQ].question}
              </h2>
              <div className="flex flex-col gap-3">
                {questions[currentQ].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full bg-background/50 border border-border rounded-xl p-4 font-body text-foreground hover:bg-secondary hover:border-primary transition-all duration-300 text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        
        {onPoem && (
          <div className="mt-6 text-center">
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
    </div>
  );
};

export default QuestionsPage;