import { backgroundTertiary, borderPrimary, borderRadius0_5, flexAlignCenter, justifyBetween, padding0_5, textColor } from "../../../../styles/index.css";

type UserPointsCardProps = {
    title:string;
    points:number;
}

const UserPointsCard = ({title,points}: UserPointsCardProps) => {
  return (
    <div className={`${borderRadius0_5} ${padding0_5} ${textColor} ${flexAlignCenter} ${justifyBetween} ${backgroundTertiary} ${borderPrimary}`}>
      <p>{title}:</p>
      <p>{points}</p>
    </div>
  )
}

export default UserPointsCard
