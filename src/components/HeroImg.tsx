import img from "/images/image-omelette.jpeg";

export default function HeroImg() {
  return (
    <div className="mb-8 lg:mb-10">
      <img src={img} alt="" className="lg:rounded-xl" />
    </div>
  );
}
