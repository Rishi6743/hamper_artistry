import React from "react";

const Intro = () => {
    return (
        <div className="container">
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Experience the Art of Gifting with
                            <br class="hidden lg:inline-block" />
                            <strong style={{ color: "#da1fa8" }}>Hamper_Artistry</strong>
                        </h1>
                        <p class="mb-8 leading-relaxed mff" style={{fontSize:"16px"}}>
                            Bring a Smile to Your Loved Ones with Hamper_Artistry - Where
                            Every Hamper is a Heartfelt Embrace
                        </p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                                Contact us
                            </button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            class="object-cover object-center rounded"
                            alt="hero"
                            src="https://4.imimg.com/data4/NY/DV/IMOB-35185875/screenshot_2016-10-23-22-12-02-1-500x500.png"
                        />
                        {/* <img class="object-cover object-center rounded" alt="hero" src="https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Medium/hamper116.jpg?V=01022023124417"/> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intro;
