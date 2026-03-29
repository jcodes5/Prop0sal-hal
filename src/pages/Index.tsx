import { useState } from "react";
import ProposalPage from "@/components/ProposalPage";
import NoPage from "@/components/NoPage";
import QuestionsPage from "@/components/QuestionsPage";
import CelebrationPage from "@/components/CelebrationPage";
import PoemPage from "@/components/PoemPage";
import ThankYouPage from "@/components/ThankYouPage";
import { ArrowLeft } from "lucide-react";

type Stage = "proposal" | "no" | "questions" | "celebration" | "poem" | "thankyou";

const Index = () => {
  const [stage, setStage] = useState<Stage>("proposal");
  const [answers, setAnswers] = useState<string[]>([]);
  const [history, setHistory] = useState<Stage[]>([]);

  const navigate = (newStage: Stage) => {
    setHistory(prev => [...prev, stage]);
    setStage(newStage);
  };

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setStage(prev);
    }
  };

  const showBack = history.length > 0;

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {showBack && (
        <button
          onClick={goBack}
          className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      )}
      {stage === "proposal" && (
        <ProposalPage
          onYes={() => navigate("questions")}
          onNo={() => navigate("no")}
          onPoem={() => navigate("poem")}
        />
      )}
      {stage === "no" && (
        <NoPage
          onYes={() => navigate("questions")}
          onPoem={() => navigate("poem")}
        />
      )}
      {stage === "questions" && (
        <QuestionsPage
          onComplete={(ans) => {
            setAnswers(ans);
            navigate("celebration");
          }}
          onPoem={() => navigate("poem")}
        />
      )}
      {stage === "celebration" && (
        <CelebrationPage 
          onPoem={() => navigate("poem")} 
          onThankYou={() => navigate("thankyou")} 
        />
      )}
      {stage === "poem" && <PoemPage />}
      {stage === "thankyou" && <ThankYouPage onPoem={() => navigate("poem")} />}
    </div>
  );
};

export default Index;