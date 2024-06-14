type PropFooterProps = {
    dateOfCreation: string;
}

const PropFooter = ({dateOfCreation}: PropFooterProps) => {
  return (
    <div className="prop__footer">
        <h3 className="prop__footer__date-of-creation">{dateOfCreation}</h3>
    </div>
  )
}

export default PropFooter
