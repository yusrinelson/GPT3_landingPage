import PropTypes from 'prop-types';
import './article.css'

export default function Article({imageUrl, date, title}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

Article.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

