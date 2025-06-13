import Header from "@/components/header";
import Footer from "@/components/Footer";
import styles from "./styles.module.scss";
import {MotionH1, MotionP, MotionSection} from "@/utils/animation";
import {fadeInUpScaleDown} from "@/utils/constants";

export default function PrivacyView() {
  return (
    <main className={styles.main}>
      <Header />
      <MotionSection className={styles.termsWrapper}>
        <div className={styles.container}>
          <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>
            Privacy
          </MotionH1>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.05,
                },
              },
            }}>
            Effective as of January 26, 2024
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.1,
                },
              },
            }}
            className={styles.content}>
            Zero Max ELD Inc takes your privacy very seriously. This Privacy
            Policy applies to the Service (as defined in our Terms of Service).
            Any terms used but not defined in this Privacy Policy have the
            meanings assigned to them in our Terms of Service.
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.15,
                },
              },
            }}
            className={styles.head}>
            Information We Collect
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.2,
                },
              },
            }}
            className={styles.content}>
            The primary reason we collect information from you is in order to
            provide you with our Service and to facilitate your use of the
            Service. We may collect the following information about you, which
            may include non-public personal information which can be used to
            identify an individual Personal Information.
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.25,
                },
              },
            }}
            className={styles.head}>
            Account and Profile Information
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.3,
                },
              },
            }}
            className={styles.content}>
            When accessing the Service, you provide us with Your Data and
            Personal Information, including but not limited to your name, mobile
            phone number, email address, mailing address and driver’s license
            information. Personal Information that we collect may also include
            documentation uploaded to your account by you or third parties to
            whom you have granted access to your account (including but not
            limited to motor vehicle records, proof(s) of insurance, and your
            transportation worker identification credential).
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.35,
                },
              },
            }}
            className={styles.head}>
            Information Related to Your Use of the Service
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.4,
                },
              },
            }}
            className={styles.content}>
            We automatically collect, record and store certain information
            related to your use of the Service such as:
            <br />
            Your Data (as defined in our Terms of Service)
            <br />
            Vehicle information
            <br />
            Information related to your driving of such vehicle (including but
            not limited to driver performance data, driving time, on and off
            duty status, etc)
            <br />
            Information you send to third parties using the Service, such as any
            messages sent to third parties via the Service, or the transmission
            of Department of Transportation inspection reports
            <br />
            Information about your usage of the Service including duration of
            use, screens or webpages you visit, and other information about your
            activities within the Service
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.45,
                },
              },
            }}
            className={styles.head}>
            Information Sent by Your Mobile Device
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.5,
                },
              },
            }}
            className={styles.content}>
            We collect certain information indirectly from you while you use the
            Service such as information about the device you use, hardware and
            software you use when accessing the Service, and your IP address.
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.55,
                },
              },
            }}
            className={styles.head}>
            Location Information
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.6,
                },
              },
            }}
            className={styles.content}>
            We may collect and store information about your location by
            converting your IP address into a geo- location or by accessing your
            mobile device’s GPS coordinates via the location services on your
            device.
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.55,
                },
              },
            }}
            className={styles.head}>
            SMS Privacy Policy
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.6,
                },
              },
            }}
            className={styles.content}>
            At ZEROMAX ELD, we respect your privacy and are committed to
            protecting your personal information. When you provide your phone
            number and opt in to receive SMS messages from us, you agree to
            receive transactional alerts, service updates, and promotional
            messages related to our ELD platform. We collect your phone number
            and any information you provide when you opt in to SMS
            communications. Your number is used only to send relevant updates,
            alerts, and promotional messages related to ZEROMAX ELD services. We
            do not share, sell, or rent your SMS consent or phone number to
            third parties for marketing purposes. You can opt out at any time by
            replying STOP to any message. Standard messaging rates may apply.
          </MotionP>

          <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>
            How We Share Information with Others
          </MotionH1>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.65,
                },
              },
            }}
            className={styles.head}>
            To Provide the Service
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.7,
                },
              },
            }}
            className={styles.content}>
            We share information with others in order to provide you with the
            Service, including:
            <br />
            Motor carrier(s) with which you have an employer, contractor or
            other business relationship
            <br />
            Governmental agencies such as the Department of Transportation or
            FMCSA upon their request and in order to facilitate transmission of
            messages and reports by you to these agencies
            <br />
            Third parties with whom we have business relationships in order to
            provide you with the Service
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.75,
                },
              },
            }}
            className={styles.head}>
            Our Service Providers
          </MotionP>
          <MotionP
            variants={{
              ...fadeInUpScaleDown,
              visible: {
                ...fadeInUpScaleDown.visible,
                transition: {
                  ...fadeInUpScaleDown.visible.transition,
                  delay: 0.8,
                },
              },
            }}
            className={styles.content}>
            We also share information with third parties who provide services to
            us, including various analytics services, that help us monitor the
            performance of the Service and make improvements to the Service
            based on how you and other users are interacting with and using the
            Service.
          </MotionP>
          <MotionP variants={fadeInUpScaleDown} className={styles.head}>
            Compliance with Laws
          </MotionP>
          <MotionP variants={fadeInUpScaleDown} className={styles.content}>
            Law enforcement, government officials or other third parties (i) in
            connection with a formal request, subpoena, court order, or similar
            legal procedure; or (ii) when we believe in good faith that
            disclosure is necessary to comply with the law, prevent physical
            harm or financial loss, report suspected illegal activity, or to
            investigate violations of our Terms of Use.
          </MotionP>
          <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>
            Your Choices under this Privacy Policy
          </MotionH1>
          <MotionP variants={fadeInUpScaleDown} className={styles.head}>
            Choice to Opt-Out{" "}
          </MotionP>
          <MotionP variants={fadeInUpScaleDown} className={styles.content}>
            We offer you choices regarding the collection, use and sharing of
            your information including Your Data and Your Personal Information
            and we will respect the choices you make. Please note that if you
            decide not to provide us with certain information, you may not be
            able to access the Service or portions thereof.
          </MotionP>
          <MotionP variants={fadeInUpScaleDown} className={styles.head}>
            Opt-Out & Modification
          </MotionP>
          <MotionP variants={fadeInUpScaleDown} className={styles.content}>
            If you want to opt-out of providing us information that we collect
            from you as described in this Privacy Policy, contact us at:
            support@zeromaxeld.com. If you would like to modify information that
            you have provided us within the Service, including Personal
            Information, you are able to modify certain information by logging
            into your account.
          </MotionP>
          <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>
            Notices to You and Changes to this Policy
          </MotionH1>
          <MotionP variants={fadeInUpScaleDown} className={styles.content}>
            We may occasionally send you push notifications through our Service,
            including our mobile application, to send you Service-related
            notifications or notifications of changes to this Privacy Policy or
            our Terms of Service. You may at any time opt-out from receiving
            these types of communications by turning them off at the device
            level through your settings or through the mobile application
            settings.
          </MotionP>
          <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>
            Contact Us
          </MotionH1>
          <MotionP variants={fadeInUpScaleDown} className={styles.content}>
            For any questions regarding this Privacy Policy, please contact us
            at: support@zeromaxeld.com or in writing at: 222 Katie Dr
            Feasterville Trevose, PA 19053
          </MotionP>
        </div>
      </MotionSection>
      <Footer />
    </main>
  );
}
