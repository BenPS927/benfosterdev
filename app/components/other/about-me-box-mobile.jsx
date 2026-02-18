export function AboutMeBoxMobile({ text, images }) {
    return (
        <div className="flex w-full gap-4">
            <div className="p-2 w-2/3 font-geist-sans text-orange-700">
                <div className="border p-2 rounded-lg shadow-md bg-white">{text}</div>
            </div>
            <div className="w-1/3 space-y-4 mr-4">
                {images.map((img, index) => (
                    <img key={index} src={img} alt="" className="w-32 h-24 rounded-md shadow-md active:scale-120 transition" />
                ))}
            </div>
        </div>
        

    )
}