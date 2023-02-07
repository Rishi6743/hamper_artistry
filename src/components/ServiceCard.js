import React from "react";
import './Services.css'
const ServiceCard = (props) => {
  return (
    <div className="col-md-4 my-4">

      <div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img 
                class="rounded-t-lg fxit"
                src={props.src}
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2 mff mfw">{props.title}</h5>

              {/* <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


ServiceCard.defaultProps = {
  src: "https://tipsmake.com/data/images/nice-blue-synthetic-background-picture-32-Xh0HQROIf.jpg",
  title: "Add Title"
}
export default ServiceCard;



