import styles from './styles.module.scss'
import {Animation, MotionH1, MotionP, MotionSection} from "@/utils/animation";
import {fadeInUpScaleDown} from "@/utils/constants";
import Image from "next/image";

export default function PartnershipBanner() {
    return (
        <MotionSection className={styles.container}>
            <div className={styles.banner}>
                <MotionH1 variants={fadeInUpScaleDown}>Our partnership is designed to <br/>
                    <span>deliver excellence</span></MotionH1>
                <MotionP variants={{
                    ...fadeInUpScaleDown, visible: {
                        ...fadeInUpScaleDown.visible,
                        transition: {
                            ...fadeInUpScaleDown.visible.transition,
                            delay: 0.05
                        }
                    }
                }}>Resell Fleet Management system under your brand name
                    and be in the edge of innovations</MotionP>
                <Animation variants={{
                    ...fadeInUpScaleDown, visible: {
                        ...fadeInUpScaleDown.visible,
                        transition: {
                            ...fadeInUpScaleDown.visible.transition,
                            delay: 0.1
                        }
                    }
                }}>
                    <button>Get in touch</button>
                </Animation>
                <Image width={1920} height={720} src={'/bannerImages/partnershipBanner.png'}
                       alt={'Our partnership is designed to deliver excellence'}/>
            </div>
        </MotionSection>
    )
}