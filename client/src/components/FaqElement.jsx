const FaqElement = ({ question, content }) => {
    return(
        <button className="border-marron border-[2px]  py-4 px-3 rounded-[15px] shadow-[3px_4px_10px_2px_rgba(64,21,13,0.25)]">
            <h3 className="font-bold  text-sm">{question}</h3>
            <p>
                {content}
            </p>
        </button>
    )
}

export default FaqElement;