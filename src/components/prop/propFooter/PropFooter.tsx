import { propFooterStyle } from "./PropFooterStyle.css";

type PropFooterProps = {
    dateOfCreation: string;
}

const PropFooter = ({dateOfCreation}: PropFooterProps) => {
  return (
    <div className={propFooterStyle}>
        <p>{dateOfCreation}</p>
    </div>
  )
}

export default PropFooter
