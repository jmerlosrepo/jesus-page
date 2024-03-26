import ImageCarousel from "../ImagesCarousel/ImagesCaroulse";

import styles from "./ProjectContainer.module.scss";

import gitSvg from "../../assets/git.svg";
import javascriptSvg from "../../assets/javascript.svg";
import reactSvg from "../../assets/react.svg";
import nodejsSvg from "../../assets/nodejs.svg";
import htmlSvg from "../../assets/html.svg";
import angularSvg from "../../assets/angular.svg";
import bootstrapSvg from "../../assets/bootstrap.svg";
import cssSvg from "../../assets/css3.svg";
import firebaseSvg from "../../assets/google-firebase.svg";
import javaSvg from "../../assets/java.svg";
import mongoSvg from "../../assets/mongodb.svg";
import mysqlSvg from "../../assets/mysql.svg";
import pythonSvg from "../../assets/python.svg";
import typescriptSvg from "../../assets/typescript.svg";
import reduxSvg from "../../assets/redux.svg";

export type ProjectContainerProps = {
  title: string;
  description: string;
  images: string[];
  technologiesUsed: string[];
  gitUrl: string;
};

const technologies: {
  [key: string]: string;
} = {
  javascript: javascriptSvg,
  react: reactSvg,
  nodejs: nodejsSvg,
  html: htmlSvg,
  angular: angularSvg,
  bootstrap: bootstrapSvg,
  css: cssSvg,
  firebase: firebaseSvg,
  java: javaSvg,
  mongo: mongoSvg,
  mysql: mysqlSvg,
  python: pythonSvg,
  typescript: typescriptSvg,
  redux: reduxSvg,
};

const ProjectContainer = ({
  title,
  description,
  images = [],
  technologiesUsed = [],
  gitUrl,
}: ProjectContainerProps) => {
  return (
    <div className={styles.projectContainer}>
      <h4 className={styles.projectTitle}>{title}</h4>
      <div className={styles.repoUrl}>
        <img className={styles.icon} src={gitSvg} />
        <a href={gitUrl}>{gitUrl}</a>
      </div>
      <div>
        <h5>Technologies Used</h5>
        {technologiesUsed.map((tech, index) => (
          <img
            style={{ backgroundColor: `#fff` }}
            className={styles.icon}
            key={index}
            src={technologies[tech]}
          />
        ))}
      </div>
      <p>{description}</p>
      <ImageCarousel images={images} />
    </div>
  );
};

export default ProjectContainer;
