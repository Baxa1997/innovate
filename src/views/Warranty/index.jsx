import styles from "@/views/Privacy/styles.module.scss";
import Header from "@/components/header";
import {MotionH1, MotionP, MotionSection} from "@/utils/animation";
import {fadeInUpScaleDown} from "@/utils/constants";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WarrantyView() {
    return (
        <main className={styles.main}>
            <Header/>
            <MotionSection className={styles.termsWrapper}>
                <div className={styles.container}>
                    <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>Product Warranty</MotionH1>

                    <MotionP variants={{
                        ...fadeInUpScaleDown, visible: {
                            ...fadeInUpScaleDown.visible,
                            transition: {
                                ...fadeInUpScaleDown.visible.transition,
                                delay: 0.1
                            }
                        }
                    }} className={styles.content}>
                        Zero Max ELD warrants to Customer that any Hardware shall be free of defects
                        in materials and workmanship, for the duration of the applicable Warranty Period.

                        <br/>
                        <br/>
                        All hardware products come with a one year warranty unless otherwise specified on the relevant
                        Zero Max Eld datasheet. During the warranty period, hardware exhibiting material defects will
                        be replaced.

                        <br/>
                        <br/>
                        To receive warranty service, contact us for problem determination and service procedures. The
                        original dated bill of sale must be presented upon request as proof of purchase.
                        <br/>
                        <br/>
                        The Hardware Warranty covers the repair, and if repair is not possible, replacement of any item
                        purchased from us, for 1 year from the date of purchase of the Warranty. These obligations are
                        dependent upon proper use of the products and do not cover:
                        <br/>
                        &ensp;  • Usage that is not in accordance with product instructions.
                        &ensp;  • Combination or integration of the product with any features, accessories, software or
                        other materials not installed or provided by Zero Max Eld (unless with Zero Max Eld’s explicit
                        consent).
                        &ensp; • Unauthorized modification, removal or erasing of the barcode serial numbers or other
                        identifying marks on the products.
                        &ensp; • Products for which Zero Max Eld has not received payment
                        <br/>
                        <br/>
                        The Limited Hardware Warranty does not cover Internet connectivity with the Hardware and
                        interruptions in electric power.
                        <br/>
                        <br/>This Limited Hardware Warranty will only apply to the actual purchaser and end-user of the
                        Hardware, and this Limited Hardware Warranty is not available for products has been altered or
                        modified, or that were purchased used or from any source other than Zero Max Eld.

                        <br/>
                        <br/>
                        If you have other queries, please send us a message, call us, or email us, using our <Link
                        href={'/#contact'}>Contact Us</Link>
                            page.

                    </MotionP>


                </div>
            </MotionSection>
            <Footer/>
        </main>

    )
}