import "./GamePage.css";

import HeaderBar from "../../comps/nav/HeaderBar";
import QuestionCardComps from "../../comps/questionCard/QuestionCardComps";

import { CategoriesType, type RiddleMultipleAnswer, } from "../../logic/riddle/RiddleTypes";
export default function GamePage() {
  // export default function GamePage({ a }: { a: PropsWithChildren }) {
  return (
    <>
      <div id="rootGame">
        <HeaderBar />
        <QuestionCardComps
          objQuestion={{
            title: "מהי בירת צרפת?",
            category: CategoriesType.EAZY,
            answerA: "לונדון",
            answerB: "פריז",
            answerC: "רומא"
          }}
        />


      </div>
    </>
  )
}
