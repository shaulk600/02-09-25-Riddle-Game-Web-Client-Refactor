export enum CategoriesType {
    EAZY = "EAZY",
    MEDIUM = "MEDIUM",
    HARD = "HARD"
}
// const a = CategoriesType.HARD;

export enum CurrectAnswer {
    A = 1,
    B = 2,
    C = 3
}


export type Riddle = {
    _id?: string,
    title: string,
    category: CategoriesType,
    answer: string
}
export type RiddleMultipleAnswer = {
    _id?: string,
    title: string,
    category: CategoriesType,
    answerA: string,
    answerB: string,
    answerC: string,
    currectAnswer: CurrectAnswer,

}



export function RiddleTypes() {

}
