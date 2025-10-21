import "./GamePage.css";

import HeaderBar from "../../comps/nav/HeaderBar";
import QuestionCardComps from "../../comps/questionCard/QuestionCardComps";

import { CategoriesType, type RiddleMultipleAnswer } from "../../logic/riddle/RiddleTypes";
import { useEffect, useState } from "react";
export default function GamePage() {

  const arrData: RiddleMultipleAnswer[] = [
    {
      title: "מהי בירת צרפת?",
      category: CategoriesType.EAZY,
      answerA: "לונדון",
      answerB: "פריז",
      answerC: "רומא",
      currectAnswer: 2
    },
    {
      title: "מגדל גבוה בצרפת ?",
      category: CategoriesType.EAZY,
      answerA: "אייפל",
      answerB: "ביג בן ",
      answerC: "עזריאלי",
      currectAnswer: 1
    },
    {
      title: " ב.ס.ר זה?",
      category: CategoriesType.MEDIUM,
      answerA: "אזור חשוב",
      answerB: "  אין תשובה",
      answerC: "חיקוי של עזריאלי",
      currectAnswer: 1
    }
  ];

  let r: RiddleMultipleAnswer | null = null;
  const updateData = () => {
    const a: number = Math.floor(Math.random(1) * 3);
    console.log(a);
    r = {
      title: arrData[a].title,
      category: arrData[a].category,
      answerA: arrData[a].answerA,
      answerB: arrData[a].answerB,
      answerC: arrData[a].answerC,
      currectAnswer: arrData[a].currectAnswer
    }
    return r;
  }
  // const [objQuestionA, setObjQuestionA] = useState<RiddleMultipleAnswer | undefined>(undefined);

  useEffect(() => {
    updateData();
  }, []);

  // export default function GamePage({a}: {a: PropsWithChildren }) {
  return (
    <>
      <div id="rootGame">
        <HeaderBar />
        <QuestionCardComps
          objQuestion={updateData()}
        />


      </div>
    </>
  )
}
