import { useState } from "react";
import ProposalPage from "@/components/ProposalPage";
import NoPage from "@/components/NoPage";
import QuestionsPage from "@/components/QuestionsPage";
import CelebrationPage from "@/components/CelebrationPage";
import PoemPage from "@/components/PoemPage";

type Stage = "proposal" | "no" | "questions" | "celebration" | "poem";

const Index = () => {
  const [stage, setStage] = useState<Stage>("proposal");
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {stage === "proposal" && (
        <ProposalPage
          onYes={() => setStage("questions")}
          onNo={() => setStage("no")}
          onPoem={() => setStage("poem")}
        />
      )}
      {stage === "no" && (
        <NoPage
          onYes={() => setStage("questions")}
          onPoem={() => setStage("poem")}
        />
      )}
      {stage === "questions" && (
        <QuestionsPage
          onComplete={(ans) => {
            setAnswers(ans);
            setStage("celebration");
          }}
          onPoem={() => setStage("poem")}
        />
      )}
      {stage === "celebration" && <CelebrationPage />}
      {stage === "poem" && <PoemPage />}
    </div>
  );
};

export default Index;