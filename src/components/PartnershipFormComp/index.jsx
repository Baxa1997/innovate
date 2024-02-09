import {Animation, MotionSection} from "@/utils/animation";
import styles from "./styles.module.scss";
import {productFadeinDown, textFadeinDown} from "@/utils/constants";
import Container from "@/components/Container";
import PartnershipForm from "@/components/PartnershipFormComp/components/Form";

export default function PartnershipFormComp() {

    return (
        <div className={styles.partnerShipForm}>
            <Container>
                <MotionSection>
                    <Animation variants={textFadeinDown}>
                        <div className={styles.textBox}>
                            <div className={styles.desc}>
                                <h6 className={styles.label}>Contact us</h6>
                                <h3 className={styles.title}>Start your partnership today!</h3>
                            </div>
                            <div className={styles.desc}>
                                <h5 className={styles.text}>
                                    Fill out the form below to get started! A representative will contact you shortly.
                                </h5>
                            </div>
                        </div>
                    </Animation>
                </MotionSection>
            </Container>
            <Container>
                <MotionSection>
                    <Animation variants={productFadeinDown}>
                        <div className={styles.formWrapper}>
                            <PartnershipForm/>
                        </div>
                    </Animation>
                </MotionSection>
            </Container>
        </div>
    );
}
