const OurGoalCard = ({ImageName, illustration, details, color,alt}) => {
    return (
        <div
            className={`h-[350px] w-full relative bg-[url('${ImageName}')] bg-cover bg-center`}
        >
            <div className={`absolute inset-0 bg-[${color}] mix-blend-multiply`}></div>
            <div className="relative z-10 p-16 space-y-5">
                <img src={`/assets/${illustration}`} alt={alt} width="60px" />
                <p className="font-semibold text-white">{details}</p>
            </div>
        </div>
    )
}

export default OurGoalCard;