import styles from './styles.module.scss'
import {features} from "@/components/PartnershipFeatures/mock";
import Image from "next/image";
import {Animation, MotionSection} from "@/utils/animation";
import {containerAnimation, fadeinDownPhone, fadeinRight, textFadeinDown} from "@/utils/constants";

export default function PartnershipFeatures() {
    return (
        <MotionSection className={styles.featuresCont}>
            <div className={styles.container}>
                <Animation variants={textFadeinDown} className={styles.titleCont}>
                    <h2>Grow your company by becoming our White Label Partner</h2>
                    <p>Advanced, Powerful, and Innovative software to help grow your company to new heights.</p>
                </Animation>
                <div className={styles.featuresWrapper}>
                    <Animation variants={containerAnimation} className={styles.features}>
                        {features.map((el, index) => (
                            <Animation variants={fadeinDownPhone} className={styles.feature} key={index}>
                                <div className={styles.icon}>
                                    <el.icon/>
                                </div>
                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                                {el.tags?.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </Animation>
                        ))}
                    </Animation>
                    <div className={styles.featuresImages}>
                        <Animation variants={fadeinDownPhone} className={styles.phoneImage}>
                            <div className={styles.border_phone}>
                                <Image
                                    alt="admin_panel"
                                    src="/images/iphone_template.svg"
                                    width={314}
                                    height={610}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.phone}>
                                <Image
                                    alt="admin_panel"
                                    src="/images/phone.jpg"
                                    width={218}
                                    height={610}
                                    loading="lazy"
                                />
                            </div>
                        </Animation>
                        <Animation variants={fadeinRight} className={styles.admin}>
                            <Image
                                alt="admin_panel"
                                src="/images/banner_admin_panel.webp"
                                width={1024}
                                height={682}
                                loading="lazy"
                            />
                        </Animation>
                    </div>
                </div>
            </div>
        </MotionSection>
    )
}