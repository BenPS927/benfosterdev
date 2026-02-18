import { AboutMeBoxMobile } from "../../other/about-me-box-mobile"

export default function AboutMeMobile() {

    const aboutMeMobile = [
    {id: 1, images: ['/beach.png', 'thailand.png'], text: 'Having spent my early 20s traveling and making the best memories, I decided it was time to get into a career.'},
     {id: 2, images: ['/ps.jpg', '/PT.jpg'], text: "Since finishing uni, I'd always missed studying and learning. IT and computer science was completely alien to me, so I decided that would be my next pursuit."},
     {id: 3, images: ['lab.jpg'], text: "I built a home network, studyied for certifications, learned all the fundamentals of IT aand posting it all on Linkedin."},
     {id: 4, images: ['/server.jpg'], text: "I landed a job as the IT manager at Gibson Watts where my time is spent managing microsoft 365, user devices, and the network."},
     {id: 5, images: ['/react.png'], text: "I decided my next endeavour would be programming. I started teaching myself JavaScript React, which is what I've used to build this website."}
    ]

    return (
        <div className="p-2 mt-4 bg-gray-100">
            <h1 className="w-full p-4 flex justify-center mb-8 font-oswald text-2xl ">A bit about me...</h1>
            <div>
                <div className="text-sm mb-8">
                    <div>
                        {aboutMeMobile.map((box) => (
                            <div key={box.id}>
                                <AboutMeBoxMobile text={box.text} images={box.images} />
                                
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className="w-full p-4 flex justify-center text-xl ">Have a look at my projects below!</div>
        </div>
    )
}