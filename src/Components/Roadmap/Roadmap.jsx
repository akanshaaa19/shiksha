import roadmaps from "../../roadmapdata";
import ConnectingBorder from "./ConnectingBorder";
import RoadMapSection from "./RoadmapSection";

function Roadmap(props) {
  const selectedRoadmap = roadmaps.filter((roadmap) => {
    return roadmap.courseId === props.id;
  });
  console.log(selectedRoadmap);

  const sections = selectedRoadmap[0].sections;

  return (

    <section className="max-w-5xl mx-auto py-10">
      <h1 className=" text-4xl font-bold mb-8 text-gray-800">
        {selectedRoadmap[0].courseName}
      </h1>
      <div>
        {sections.map((section) => {
          return (
            <>
              <RoadMapSection name={section.name} content={section.links} step={section.step} />
              <ConnectingBorder />
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Roadmap;
