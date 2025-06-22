const Links = ({link, target, className, content})=>{
    return(
        <a 
            href={link}
            target= {target}
            rel="noopener noreferrer"
            className={className}
        >
            {content}
        </a>
    )
}

export default Links;