import careerData from "../../../data.json";
import JobCard from "../../JobCard/JobCard";

const Career = () => {
  const { careerIntro, jobHistory } = careerData.career;

  return (
    <div>
      <h2>{careerIntro}</h2>
      {jobHistory.map((jobs, index) => (
        <JobCard
          key={index}
          title={jobs.title}
          location={jobs.location}
          companyName={jobs.companyName}
          startDate={jobs.startDate}
          endDate={jobs.endDate}
          description={jobs.description}
        />
      ))}
    </div>
  );
};

export default Career;
