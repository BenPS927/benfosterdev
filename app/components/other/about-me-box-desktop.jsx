// no state, just receives props and renders
//destructured props where values are pulled out of props object

export function AboutMeBoxDesktop (props) {

    return (
        <div className="bg-white rounded-md p-6 mt-4 hover:scale-110 transition hover:z-100 shadow-xl">
            {props.text}
            
        </div>
    )
    
}