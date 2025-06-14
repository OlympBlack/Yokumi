const SubmitBtn = ({text, className }) => {
    return (
        <button
            type="submit"
            className={`px-8 py-[6px] text-white font-bold rounded-2xl bg-gradient-to-l from-[#40150D] from-[38.94%] to-[#000000] to-[63.94%]  ${className ? className : ""}`}
        >
            {text}
        </button>
    );
}

export default SubmitBtn;