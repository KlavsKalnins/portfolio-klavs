import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

interface TypingGameProps {
  fullText: string;
  onComplete: (time: number) => void;
}

export const TypingGame: React.FC<TypingGameProps> = ({
  fullText,
  onComplete,
}) => {
  const [userInput, setuserInput] = useState<string>("");
  const [previouseInput, setpreviouseInput] = useState<string>("");
  const [errorLetters, seterrorLetters] = useState<string>("");
  const [startTime, setstartTime] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setstartTime(Date.now());
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (userInput.length <= 0) {
      if (value != fullText.slice(0, 1)) {
        console.warn("first letter isnt true");
        return;
      }
    }
    if (value.length < previouseInput.length) {
      if (errorLetters.length > 0) {
        seterrorLetters(errorLetters.slice(0, -1));
        return;
      } else {
        console.warn("dont delete green");
        return;
      }
    }
    if (errorLetters.length > 0) {
      return;
    }
    setpreviouseInput(value);

    if (value === fullText) {
      onComplete(Date.now() - startTime);
    //   console.log("YES");
      setuserInput(value);
    } else if (fullText.startsWith(value)) {
    //   console.log("Continue");
      setuserInput(value);
    } else {
    //   console.log("NO");
      seterrorLetters(value[value.length - 1]);
      console.log(errorLetters);
    }
  };

  const remainingTextMemo = useMemo(() => {
    return fullText.slice(userInput.length, fullText.length);
  }, [userInput, fullText]);

  return (
    <div className="flex flex-col w-full">
      <p className="font-bold text-white p-2">
        <span className={`bg-green-500 ${userInput.length > 0 && "p-2"} px-0`}>
          {userInput}
        </span>
        {errorLetters.length > 0 && (
          <>
            <span
              className={`bg-red-600 ${userInput.length > 0 && "p-2"} px-0`}
            >
              {errorLetters}{" "}
            </span>
          </>
        )}
        <span className="font-bold p-2 pl-0">{remainingTextMemo}</span>
      </p>
      <div className="h-2"></div>
      <input
        ref={inputRef}
        value={userInput}
        onChange={handleInputChange}
        className="text-white bg-stone-800 w-full"
      ></input>
    </div>
  );
};
