import ResultImg from './img/result.jpg'

function ImageResult() {
  return (
    <div className="image-result">
      {Array(4 * 3)
        .fill(null)
        .map((e, i) => (
          <img key={i} src={ResultImg} alt="Ads" />
        ))}
    </div>
  )
}

export default ImageResult
