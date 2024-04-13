import styles from "@/views/Privacy/styles.module.scss";
import Header from "@/components/header";
import {MotionH1, MotionP, MotionSection} from "@/utils/animation";
import {fadeInUpScaleDown} from "@/utils/constants";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RefundsView() {
    return (
        <main className={styles.main}>
            <Header/>
            <MotionSection className={styles.termsWrapper}>
                <div className={styles.container}>
                    <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>Returns</MotionH1>

                    <MotionP variants={{
                        ...fadeInUpScaleDown, visible: {
                            ...fadeInUpScaleDown.visible,
                            transition: {
                                ...fadeInUpScaleDown.visible.transition,
                                delay: 0.1
                            }
                        }
                    }} className={styles.content}>
                        Zero Max ELD Inc takes your privacy very seriously. This Privacy
                        There are a few important things to keep in mind when returning a product you purchased online
                        from Zero Max ELD:
                        <br/>
                        &ensp; • You have to return an item from the date you received it. You may cancel the contract
                        and
                        return your products for any reason within 7 calendar days of the day you receive the
                        product(s).
                        <br/>
                        &ensp;• If a fault is found after 7 days from delivery, you should contact us and we will
                        replace or
                        repair the product, at our discretion.
                        <br/>
                        &ensp;• Only items that have been purchased directly from zeromaxeld.com can be returned to us.
                        Items
                        purchased from dealers or resellers and not zeromaxeld.com directly are not eligible for
                        return, refund or exchange.
                        <br/>
                        To return an item, please
                        <a href="mailto:support.zeromaxeld@com" className={styles.link}>contact us</a>
                        <br/>
                        <br/>
                        <br/>
                        Please return items with all accessories and packaging. If you do not, we may either deny the
                        return, or allow a return with a nonrefundable deduction on your refund for what is missing.
                        <br/>
                        &ensp; • Items need to be returned in a like-new condition. Items that are damaged, unsanitary,
                        dented
                        or
                        scratched may be denied a return.
                        <br/>
                        &ensp; • Pack the item carefully so that it will not be damaged during the shipping process. We
                        suggest
                        using a box and bubble wrap.
                        <br/>
                        &ensp;• Please ensure that the item you’re returning is repackaged with all the cords, adapters
                        and
                        documentation that were included when you received it.
                        <br/>
                        &ensp;• It is recommended to use a secure shipping method such as Insured UPS to send the item
                        so that
                        you have tracking for the package. Zero Max ELD is not responsible for items lost in transit
                        and a return can not be processed until the item is received.
                        <br/>
                        <br/>
                        <span style={{fontWeight: 600}}>All returns should be sent to the following address:</span>
                        <br/>
                        Zero Max ELD Inc
                        <br/>
                        222 Katie Dr Feasterville Trevose, PA  19053
                        <br/>
                        Once we receive your item, a refund is initiated immediately. If you canceled a pickup item, and
                        you were billed for it, we initiate your refund immediately after you submit your cancellation
                        request.
                        <br/>
                        <br/>

                    </MotionP>
                    <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>Refunds</MotionH1>
                    <MotionP variants={fadeInUpScaleDown} className={styles.content}>
                        For returns by mail, once we receive your return, we will process it within 3Z5 business days.
                        With a few exceptions, we will reimburse you for returned items in the same way you paid for
                        them. Funds should be available within 5 business days. If you prefer, you can make an exchange
                        for the same item.
                        <br/>
                        <br/>
                        If you have further questions regarding return and refund policy please feel free to visit our
                        <Link href={'/#contact'}>contact</Link> page .
                    </MotionP>


                </div>
            </MotionSection>
            <Footer/>
        </main>

    )
}