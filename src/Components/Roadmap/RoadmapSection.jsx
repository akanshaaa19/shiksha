import { Fragment } from "react";

function RoadMapSection(props) {
    // console.log(props)
  return (
    <Fragment>
          <div className="flex-auto border rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md: text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                  <span className="font-black">Step {props.step}</span>
                </div>
                <div className="p-3 text-3xl text-gray-800 font">
                  {props.name}
                </div>
                <div className="px-3 pb-6">
                  {props.content.map(link=>{
                    return <a className="text-cyan-600" href={link}><li>{link}</li></a>
                  })}
                </div>
              </div>
              <div className="md:w-96 w-full p-5 hidden">
                <img
                  src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                  alt="step 2"
                  className="object-scale-down"
                />
              </div>
            </div>
          </div>
    </Fragment>
  );
}

export default RoadMapSection;
