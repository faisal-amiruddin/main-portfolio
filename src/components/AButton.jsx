const AButton = ({ title, href, className }) => {
    return (
        <div>
          <a
            href={href}
            className={`pointer-events-auto bg-white text-black font-semibold text-2xl cursor-target p-2 border rounded m-2 hover:bg-transparent hover:text-white hover:border-white hover:cursor-none ${className}`}
          >
            {title}
          </a>
        </div>
    );
}

export default AButton;