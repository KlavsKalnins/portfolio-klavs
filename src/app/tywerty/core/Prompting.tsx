import { useState } from "react";
import { generateResponse } from "./openai";
import { isTesting } from "./logic";

interface PromptingProps {
  onComplete: (text: string) => void;
}

const GENERATE_MIN_LENGTH = 5;

export const Prompting: React.FC<PromptingProps> = ({ onComplete }) => {
  const [inputText, setinputText] = useState<string>("");

  async function callOpenAI() {
    // const response = await generateResponse("write a story about 5 paganism men."); // write a story about 5 paganism men.
    const response = await generateResponse(inputText).finally(() => {
      setinputText("");
    }); // write a story about 5 paganism men.
    onComplete(response);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <p>Prompt a story or write your own sentence to speedtype</p>
      <textarea
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        className="text-white h-20 bg-stone-600"
      />

      <button
        className="p-2 bg-stone-800 rounded-lg"
        disabled={inputText.length <= GENERATE_MIN_LENGTH}
        onClick={() => callOpenAI()}
      >
        Generate Story
      </button>

      {isTesting && (
        <button
          className="p-2 bg-stone-800 rounded-lg"
          disabled={inputText.length <= GENERATE_MIN_LENGTH}
          onClick={() => onComplete(inputText)}
        >
          Typewrite your sentence
        </button>
      )}
    </div>
  );
};
