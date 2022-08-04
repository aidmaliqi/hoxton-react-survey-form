import AnswersItem, { AnswerItemType } from "./AnswersItem";

export type Props = {
  answersList: AnswerItemType[]
}

export default function AnswersList({ answersList }: Props) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
