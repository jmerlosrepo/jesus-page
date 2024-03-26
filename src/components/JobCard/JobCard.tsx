import styles from "./JobCard.module.scss";

export type JobCardProps = {
  title: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
};

const JobCard = ({
  title,
  companyName,
  location,
  startDate,
  endDate,
  description,
}: JobCardProps) => {
  return (
    <div className={styles.jobCard}>
      <h3>{title}</h3>
      <h4>{companyName}</h4>
      <div className={styles.jobCardDates}>
        <span>{startDate}</span>
        {endDate ? " - " : ""}
        <span>{endDate}</span>
      </div>
      <div className={styles.jobCardLocation}>
        <span>{location}</span>
      </div>
      <div>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
