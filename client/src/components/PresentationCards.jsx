const PresentationCards = ({ img, alt, textContent}) => {
    return (
        <div className="bg-marron p-10 rounded-2xl flex flex-col justify-center items-center">
            <img src={img} alt={alt} />
            <p className="text-center text-white font-semibold">{textContent}</p>
        </div>
    )
}
export default PresentationCards;