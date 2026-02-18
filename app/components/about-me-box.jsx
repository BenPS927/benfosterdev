// no state, just receives props and renders
//destructured props where values are pulled out of props object

export function AboutMeBox (props) {
    const { top, left, zIndex, text, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut, onClick } = props;
    return (
    <div className="absolute w-[250px] h-[250px]
                    bg-white border border-green-300 rounded-md p-5
                    hover:scale-150 transition-all mx-auto
                    "
                    style={{ top, left, zIndex }}       
                    onMouseEnter={onMouseEnter}  
                    onMouseLeave={onMouseLeave}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onClick={onClick}>
        <div className="p-1">
            <p className="text-sm text-green-800 leading-relaxed">   
                {text}
            </p>
        </div>
    </div>
    )
}