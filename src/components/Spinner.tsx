import { Rings } from "react-loader-spinner";
import styles from "./Spinner.module.css";
export interface SpinnerProps {
  visible?: boolean;
}

const Spinner = ({ visible }: SpinnerProps) => {
  return (
    <>
      {visible ? (
        <div className={styles.container}>
          <Rings height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      ) : null}
    </>
  );
};

export default Spinner;
