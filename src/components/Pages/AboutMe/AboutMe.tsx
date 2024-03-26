import aboutMeData from "../../../data.json";

const AboutMe = () => {
  const { greet, paragraphs } = aboutMeData.aboutMe;

  return (
    <div>
      <h2>{greet}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default AboutMe;
