import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {id, value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item" key={id}>
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
