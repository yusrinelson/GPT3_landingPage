import PropTypes from "prop-types"
import './feature.css'

export default function Feature({title, text}) {
  return (
    <div className='gpt3__features-container__feature'>
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}