import { useState } from "react";

export default function DCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  //   const [date, setDate] = useState(date);
  // console.log([date, setDate]);

  return (
    <>
      <div className="">
        <div>
          <br />
          <br />
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <br />
          <br />
          <button onClick={() => setStep((s) => s - 1)}>--</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}>++</button>
        </div>
        <br />
        <br />
        <div>
          <button onClick={() => setCount((c) => c - step)}>--</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((c) => c + step)}>++</button>
        </div>
        <br />
        <br />

        <p className="message">
          <span>
            {count === 0
              ? "Today is: "
              : count > 0
              ? `${count} days from today is:`
              : `${count} days ago was:`}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
