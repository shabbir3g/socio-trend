import Image from "next/Image"
import styles from "../styles/Error.module.css"

const Error = () => {
    return (
        <div style={{textAlign:"center", marginTop:'20vh'}}>
            <div >
                <Image src="/errorImg.png" width="200px" height="250px" alt=""></Image>
            </div>
            <div className={styles.errorText}>
                <p className={styles.errorTitle}>Oops! It looks like <br />.you&apos;re lost</p>
                <p className={styles.errorSms}>.The page you&apos;re looking for isn&apos;t available. Try to search again or use the go to</p>
                <button>HOME PAGE</button>
            </div>
        </div>
    );
};

export default Error;