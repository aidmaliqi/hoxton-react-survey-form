import { useState } from "react";
import { AnswerItemType } from "./AnswersItem";
import AnswersList from "./AnswersList";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<AnswerItemType[]>([]);
  

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers}/>
      </section>
      <section className="main__form">
        <form
          action=""
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            
            const answer = {
              username : event.target.name.value
            }
            setAnswers([...answers, answer])
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <ul>
            <li>
              <label htmlFor="feature-1">
                <input type="checkbox" name="" id="feature-1" value="color" />{" "}
                It's yellow!
              </label>
            </li>
            <li>
              <label htmlFor="feature-2">
                <input type="checkbox" name="" id="feature-2" value="sound" />{" "}
                It squeaks!
              </label>
            </li>
            <li>
              <label htmlFor="feature-3">
                <input type="checkbox" name="" id="feature-3" value="logo" /> It
                has a logo!
              </label>
            </li>
            <li>
              <label htmlFor="feature-4">
                <input type="checkbox" name="" id="feature-4" value="size" />{" "}
                It's big!
              </label>
            </li>
          </ul>
          <h3>
            What would you say that are the worst features of your rubber duck?
          </h3>
          <ul>
            <li>
              <label htmlFor="feature-1">
                <input
                  type="checkbox"
                  name="goodFeatures"
                  id="feature-1"
                  value="color"
                />{" "}
                It's yellow!
              </label>
            </li>
            <li>
              <label htmlFor="feature-2">
                <input
                  type="checkbox"
                  name="goodFeatures"
                  id="feature-2"
                  value="sound"
                />{" "}
                It squeaks!
              </label>
            </li>
            <li>
              <label htmlFor="feature-3">
                <input
                  type="checkbox"
                  name="goodFeatures"
                  id="feature-3"
                  value="logo"
                />{" "}
                It has a logo!
              </label>
            </li>
            <li>
              <label htmlFor="feature-4">
                <input
                  type="checkbox"
                  name="goodFeatures"
                  id="feature-4"
                  value="size"
                />{" "}
                It's big!
              </label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            {/*label after input*/}
            <li>
              <input type="radio" id="consistency-1" name="consistency" />
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input type="radio" id="consistency-2" name="consistency" />
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input type="radio" id="consistency-3" name="consistency" />
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input type="radio" id="consistency-4" name="consistency" />
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck color?</h3>
          <ul className="form__group radio">
            {/*label after input*/}
            <li>
              <input type="radio" id="color-1" name="color" />
              <label htmlFor="color-1">1</label>
            </li>
            <li>
              <input type="radio" id="color-2" name="color" />
              <label htmlFor="color-2">2</label>
            </li>
            <li>
              <input type="radio" id="color-3" name="color" />
              <label htmlFor="color-3">3</label>
            </li>
            <li>
              <input type="radio" id="color-4" name="color" />
              <label htmlFor="color-4">4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            {/*label after input*/}
            <li>
              <input type="radio" id="logo-1" name="logo" />
              <label htmlFor="logo-1">1</label>
            </li>
            <li>
              <input type="radio" id="logo-2" name="logo" />
              <label htmlFor="logo-2">2</label>
            </li>
            <li>
              <input type="radio" id="logo-3" name="logo" />
              <label htmlFor="logo-3">3</label>
            </li>
            <li>
              <input type="radio" id="logo-4" name="logo" />
              <label htmlFor="logo-4">4</label>
            </li>
          </ul>
          <h3>How do you spend time with your rubber duck?</h3>
          <ul>
            <li>
              <label htmlFor="time-spent-1">
                <input
                  type="checkbox"
                  name="time-spent"
                  id="time-spent-1"
                  value="color"
                />{" "}
                Swimming
              </label>
            </li>
            <li>
              <label htmlFor="time-spent-2">
                <input
                  type="checkbox"
                  name="time-spent"
                  id="time-spent-2"
                  value="sound"
                />{" "}
                Bathing
              </label>
            </li>
            <li>
              <label htmlFor="time-spent-3">
                <input
                  type="checkbox"
                  name="time-spent"
                  id="time-spent-3"
                  value="logo"
                />{" "}
                Chatting
              </label>
            </li>
            <li>
              <label htmlFor="time-spent-4">
                <input
                  type="checkbox"
                  name="time-spent"
                  id="time-spent-4"
                  value="size"
                />{" "}
                I don't like to spend time with it
              </label>
            </li>
          </ul>

          <label htmlFor="textarea">
            What else have you got to say about your rubber duck?
          </label>
          <textarea name="" id="textarea" cols={30} rows={10}></textarea>

          <label htmlFor="text-input">
            Put your name have (if you feel like it):
          </label>
          <input type="text" id="text-input" name="name" />

          <label htmlFor="email-input">
            Leave as your email pretty please??
          </label>
          <input type="email" id="email-input" />
          <button className="form__submit">Submit Survey</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
