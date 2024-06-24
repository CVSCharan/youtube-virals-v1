import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ButtonComp from "../components/Button/ButtonComp";

export default function KalkiTrailer() {
  return (
    <main className={styles.main}>
      <div className={styles.firstDiv}>
        <h2 className={styles.mainHeading}>Youtube Viral Viedos</h2>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.secondDivSubDivOne}>
          <div className={styles.secondDivSubDivHeadingDiv}>
            <h2 className={styles.secondDivSubDivOneHeading}>
              Kalki 2898 AD Release Trailer - Telugu
            </h2>
            <h2 className={styles.secondDivSubDivOneHeading}>
              Prabhas | Amitabh | Kamal Haasan | Deepika | Nag Ashwin
            </h2>
          </div>
          <Image
            src="/Kalki Tel Thumbnail.jpg"
            alt="Kalki Tel"
            height={200}
            width={200}
            className={styles.imgOne}
          />
          <div className={styles.btnDiv}>
            <ButtonComp link={"https://www.youtube.com/watch?v=-rTzyZZGJ84"} />
          </div>
        </div>
        <div className={styles.secondDivSubDivTwo}>
          <div className={styles.secondDivSubDivHeadingDiv}>
            <h2 className={styles.secondDivSubDivTwoHeading}>
              Kalki 2898 AD Release Trailer - Hindi
            </h2>
            <h2 className={styles.secondDivSubDivTwoHeading}>
              Prabhas | Amitabh | Kamal Haasan | Deepika | Nag Ashwin
            </h2>
          </div>
          <Image
            src="/Kalki Hin Thumbnail.jpg"
            alt="Kalki Hin"
            height={500}
            width={500}
            className={styles.imgOne}
          />
          <div className={styles.btnDiv}>
            <ButtonComp link={"https://www.youtube.com/watch?v=BfCIPsEGAS8"} />
          </div>
        </div>
      </div>
    </main>
  );
}
