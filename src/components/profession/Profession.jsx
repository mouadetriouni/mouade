import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Artificial Intelligence (AI)",
    description:
      "I develop intelligent systems and machine learning models that solve real-world problems, enhance decision-making, and bring automation to complex tasks with accuracy and efficiency.",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "I design and implement robust software solutions, focusing on clean code, scalability, and performance to deliver applications that are both reliable and future-ready..",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "I create modern and impactful designs that communicate ideas effectively, blending creativity with functionality to ensure visuals are not only attractive but also meaningful.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
         I’m a software programmer, AI developer, and graphic designer.
I create intelligent solutions powered by artificial intelligence, build efficient and scalable applications, and design visuals that communicate ideas clearly and beautifully.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
My approach blends creativity with technical expertise, ensuring every project is not only functional and robust but also user-friendly and visually engaging
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
