import { Fragment } from "react";
import { SearchBar } from "../SearchBar";
import Card from "./Card";

const tracks = [
  {
    id: 'c_ui',
    src: "https://img.freepik.com/free-vector/mobile-ux-concept-illustration_114360-7191.jpg?w=740&t=st=1676373963~exp=1676374563~hmac=d1056a5aadc1e65778c6a07408191481ec3f36b7fa676eb7da9a7ba9dbfb33a0",
    heading: "UX UI",
  },
  {
    id: 'c_ds',
    heading: "Data Science",
    src: "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?w=740&t=st=1676373057~exp=1676373657~hmac=d79c51b811733a737d9b23c61bfb2ed2b0f32cac499893f8e63977d68a395216",
  },

  {
    id: 'c_f',
    heading: "Fashion",
    src: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1676374214~exp=1676374814~hmac=fefdc10ba69945fe0ad1b2d110015ed5807a3d557e42728dc5c2c74e2ec26c3f",
  },
  {
    id: 'c_wd',
    heading: "Web Development",
    src: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1676374214~exp=1676374814~hmac=fefdc10ba69945fe0ad1b2d110015ed5807a3d557e42728dc5c2c74e2ec26c3f",
  },
  {
    id: 'c_ui',
    src: "https://img.freepik.com/free-vector/mobile-ux-concept-illustration_114360-7191.jpg?w=740&t=st=1676373963~exp=1676374563~hmac=d1056a5aadc1e65778c6a07408191481ec3f36b7fa676eb7da9a7ba9dbfb33a0",
    heading: "UX UI",
  },
];

function TrendingPage() {
  return (
    <section className="">
      <div className="mx-16 my-8">
        <h1 className="text-cyan-800 font-extrabold text-4xl mb-3">
          Trending Topics
        </h1>
        <div className="flex">
          {tracks.map((track) => {
            return <Card id={track.id} src={track.src} heading={track.heading} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default TrendingPage;
