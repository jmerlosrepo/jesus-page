import styles from "./RoundProfilePic.module.scss";

import userSvg from "../../assets/user.svg";

export type RoundImagePicProps = {
  sourceImage?: string;
  altName?: string;
};

const RoundProfilePic = ({ sourceImage, altName }: RoundImagePicProps) => {
  return (
    <img
      alt={altName ? altName : "default pic"}
      src={sourceImage ? sourceImage : userSvg}
      className={styles.roundProfilePic}
    />
  );
};

export default RoundProfilePic;
