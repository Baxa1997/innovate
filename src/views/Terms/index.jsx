import Header from "@/components/header";
import Footer from "@/components/Footer";
import styles from "./styles.module.scss";
import {MotionH1, MotionP, MotionSection} from "@/utils/animation";
import {fadeInUpScaleDown} from "@/utils/constants";

export default function TermsView() {
  return (
    <main className={styles.main}>
      <Header />
      <MotionSection className={styles.termsWrapper}>
        <div className={styles.container}>
          <MotionH1 variants={fadeInUpScaleDown} className={styles.title}>
            Terms of Service
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
            These terms of service (Agreement) constitute a contract between you
            and Zero Max ELD Inc, a Pennsylvania limited liability corporation,
            together with its employees, consultants, directors, successors,
            subsidiaries, affiliates, and assignees (Company, we or us) and
            governs the terms under which you may use services offered by us,
            whether on behalf of yourself or on behalf of a company or other
            entity for which you are authorized to act. If you are acting on
            behalf of an entity, this Agreement constitutes a contract between
            the Company and that entity, and you acknowledge that you have the
            authority to bind such entity and its affiliates to this Agreement.
            The terms you or your throughout this Agreement shall mean you
            personally and/or the entity on whose behalf you are acting.
            <br />
            Description of the Service. The service means the Companys
            electronic logging device and fleet management software and includes
            our websites, mobile websites, and mobile application and any
            updates or upgrades thereto (the Service).
            <br />
            Agreement to Terms. You acknowledge and agree that this Agreement is
            between you and the Company. Do not access or use the Service if you
            do not agree to be bound by this Agreement. By downloading, using,
            or accessing the Service, you are agreeing to this Agreement and any
            policies or other terms referenced in or incorporated within this
            Agreement (such as our Privacy Policy).
            <br />
            Access and Use of the Service. Any software, hardware or any other
            content that Company makes available to you in connection with the
            Service contains proprietary and confidential information that is
            protected by applicable intellectual property and other laws.
            Subject to the terms in this Agreement including your compliance
            with this Agreement, Company only grants you a limited, non-
            sublicensable, non-exclusive and revocable license to use the
            Service. Any rights not expressly granted herein are reserved.
            <br />
            You are solely responsible for all activity that occurs under your
            login or access credentials, whether or not you allow a third party
            to access your account.
            <br />
            You may allow other certain users, e.g. employees or independent
            contractors End Users` to access the Services in accordance with
            this Agreement. You may have the ability to create End User accounts
            with special permissions Administrator Accounts`. To the extent that
            you create any accounts for End Users, direct us to create any
            accounts for End Users, or allow End Users to access the Services,
            (including End Users with Administrative Accounts), you and your End
            Users are responsible for all End Users activity and ensuring that
            they are in compliance with this Agreement.
            <br />
            You acknowledge that if you have been given access to the Service by
            another user, including your employer, that such third party who
            granted you such access (e.g. by creating your account, directing us
            to create your account and/or providing you login credentials) to
            the Service may have the ability to access your account including
            but not limited to the ability to monitor, disclose, make changes,
            restrict or terminate your access to your account and/or the
            Service. You acknowledge that the Company is not responsible for
            such internal management or administration of the Services as
            between you and such other user. You further acknowledge that even
            if you have been given access to the Service by another user, you
            are bound by the terms of this Agreement.
            <br />
            To the extent that you allow End Users or any other third party
            (e.g. your employer) to access the Service or create, or direct us
            to create, any accounts for other users, you are responsible for (i)
            maintaining the confidentiality of login credentials (including
            usernames and passwords), (ii) managing access to End User accounts
            and other accounts which you create, and (iii) ensuring that all End
            Users and users of other accounts which you create are in compliance
            with this Agreement.
            <br />
            You shall promptly notify Company if you learn of a security breach
            related to the Service. You assume sole responsibility for your
            driving logs and for complying with all state and federal
            regulations including, but not limited to, FMCSA regulations and
            specifically regulations governing hours of service of drivers. You
            acknowledge that Company is not and will not be responsible for your
            compliance and will not be a party to any dispute that arises
            between you and any regulatory agency, including but not limited to
            the FMCSA. Please also refer to the Section entitled Disclaimer of
            Warranties in this Agreement.
            <br />
            You may use the Service only if you are 18 years or older and
            capable of forming a binding contract with Company and are not
            barred from using the Services under applicable law. If you want to
            access and use the Service, you will have to create, or be granted,
            an account. You can do this via the Service. Its important that you
            provide us with accurate, complete and up-to-date information for
            your account and you agree to update such information to keep it
            accurate, complete and up-to-date. If you dont, we might have to
            suspend or terminate your account. You agree that you will not
            disclose your login credentials or account password to anyone and
            you will notify us immediately of any unauthorized use of your
            account. You are responsible for all activities that occur under
            your account, whether or not you know about them. Your use of the
            Service is dependent on a variety of factors for which you are
            solely responsible including but not limited to operation of a
            vehicle that is capable of connection with and Zero Max ELD of
            information to the Service, use of a device which is capable of
            downloading and/or accessing the Service, and access to an internet
            or cellular connection with which to access the Service.
            <br />
            Unauthorized Use of the Service. You may access and use the Service
            only for lawful, authorized purposes and you shall not misuse the
            Service in any manner (as determined by Company in our sole
            discretion). You shall comply with any codes of conduct, policies,
            instruction manuals, user guides, storage limitations, or other
            notices Company provides you or publishes in connection with the
            Service from time to time.
            <br />
            You agree to prevent any unauthorized access or use by End Users or
            other users of accounts and to terminate any unauthorized use of or
            access to the Service. You may not sell, resell or lease the
            Services. Data, Privacy and Licenses. Company takes the privacy of
            its users very seriously. For our current Privacy Policy, please
            click here.
            <br />
            Your Data means any data and content you create, post, upload,
            transmit or otherwise make available via the Services (which may
            include data you elect to import from Non-Company products you use).
            Your Data includes logs you create, location coordinates that are
            collected, certain vehicle data, messages you send, documents you
            upload, profile information and anything else you enter or upload
            into the Service.
            <br />
            We will implement and maintain reasonable technical and
            organizational security and data storage policies and measures
            consistent with industry standards for facilities within our
            control. You acknowledge and agree that data may be stored or
            transmitted through third party facilities, third party services or
            common carriers, including without limitation the internet, in the
            course of using the Service.
            <br />
            Your acceptance of this Agreement does not grant us full ownership
            of all of Your Data. As between Company and you, you are only
            granting us the rights and licenses necessary to provide the Service
            to you and any other services for which you have signed up through
            any of our business partners and affiliated businesses. In order for
            us to provide the Service to you, we need to be able to transmit,
            store and copy Your Data in order to display it to you and to those
            with whom you share it.
            <br />
            For example, if you submit documents, send messages or otherwise
            share Your Data with another user or third party, or authorize a
            third party to receive Your Data, your acceptance of this Agreement
            gives us the permission to share Your Data and grants us any such
            rights and licenses necessary to provide the Service to you and such
            third party, and any other services or products for which you have
            signed up through any of our business partners and affiliated
            businesses. This permission includes allowing us to use third-party
            service providers in the operation and administration of the Service
            and the rights granted to us are extended to these third parties to
            the degree necessary in order to provide you the Service.
            <br />
            Data Shared Between Drivers and Carriers. The Services enable a
            commercial motor vehicle driver Driver to connect directly with a
            motor carrier (Carrier), allowing Drivers to send messages and
            automatically share their driving logs, documents, location
            information and other data Driver Data with the Carrier. When
            Drivers connect with a Carrier through the Services, the Carrier,
            its employees and other third parties who are also connected to that
            Carrier may access Driver Data for all Drivers who are connected to
            that same Carrier.
            <br />
            If a Driver connects with a Carrier, the Driver should be aware that
            the Drivers Driver Data will be automatically shared with that
            Carrier and with such other parties described above. Please consider
            carefully the parties with whom you choose to connect and what you
            choose to share. Companys role in this process is solely to provide
            the Service. You are responsible for anything you share, including
            but not limited to Driver Data, via your use of the Service. For
            clarification purposes, you grant us the necessary licenses to Your
            Data for us to create aggregated and/or de-identified data for our
            use in providing the Service and otherwise. Notwithstanding anything
            else in this Agreement, we may use and sell such aggregated and/or
            de- identified data, which does not directly identify you for any
            purpose we see fit.
            <br />
            Please see our Privacy Policy for further information on how we may
            use Your Data.
            <br />
            You are solely responsible for your conduct (including by and
            between all users), the content of Your Data, and all communications
            with others while using the Services. You represent and warrant that
            you own all Your Data or you have all rights that are necessary to
            grant us the license rights in Your Data under this Agreement. You
            also represent and warrant that neither Your Data, nor your use and
            provision of Your Data, nor any use of Your Data by Company on or
            through the Services will infringe, misappropriate or violate a
            third party s intellectual property rights, or rights of publicity
            or privacy, or result in the violation of any applicable law or
            regulation. We are not responsible for the accuracy,
            appropriateness, or legality of Your Data or any other information
            you or your End Users may be able to access using the Services.
            Should you be in violation of this Agreement, we have the right to
            remove any of Your Data causing such violation.
            <br />
            You understand and agree that any feedback, input, suggestions,
            recommendations, troubleshooting information or other similar
            information that you provide or may be used by us to modify,
            enhance, maintain and improve our Products and shall become our
            exclusive property without any obligation or payment to you or to
            any other third party whatsoever. Changes and Modifications. We may
            modify this Agreement from time to time without notice to you,
            except as may be required by law. You can review the most current
            version of this Agreement at any time by reviewing our websites. You
            may terminate your use of the Service if you do not agree with any
            modification or amendment. If you use the Service after the
            effective date of an amendment or modification, you shall be deemed
            to have accepted that amendment or modification. Limitations on
            Services and Third-Party Relationships. Company is not a party to
            any relationships or agreements between you and any third parties
            for the performance of any duties between the parties, and does not
            have control over and disclaims all liability for the quality,
            timing, legality, failure to provide, or any other aspect whatsoever
            of any professional duties performed by you or other users of the
            Service.
            <br />
            Terms Related to Hardware Devices. In the event that you have
            entered into an agreement with Company or one of its affiliates for
            the provision of hardware devices, the terms of any such agreement
            govern the terms related to such hardware devices including but not
            limited to terms governing your use of the hardware, payment
            obligations, and all other rights and obligations. General
            Prohibitions. You further agree not to do any of the following: Use
            any Company proprietary information, including Company name, logo,
            trademark and other intellectual property without Companys prior
            written consent; Attempt to breach any of the Companys or Companys
            providers or business partners security, technological or
            authentication measures intended to protect the Service; Attempt to
            access the Service other than through the software and/or search
            agents provided by Company; Send any unsolicited or unauthorized
            communications through the Service; Use the Services for the benefit
            of any third party or in any manner not permitted by this Agreement;
            Attempt to decipher, decompile, disassemble or reverse engineer any
            of the software used to provide the Service; Interfere with, or
            attempt to interfere with the data of any user of the Service or the
            access of any user to the Services in violation of this Agreement
            Collect or store any personally identifiable information from the
            Service from other users – including but not limited to all End
            Users and Drivers – of the Service without their express permission;
            Impersonate or misrepresent your affiliation with any person or
            entity; Violate any applicable law or regulation; or Encourage or
            enable any other individual to do any of the foregoing. Although we
            are not obligated to monitor access to or use of the Service or to
            review or edit the Service or Your Data, we have the right to do so
            for the purpose of operating the Service, to ensure compliance with
            this Agreement, or to comply with applicable law or other legal
            requirements. We reserve the right, but are not obligated, to
            disable your access at our sole discretion. If we suspect, in our
            reasonable opinion, fraudulent or unauthorized activity on your
            account, we reserve the right to terminate or suspend your access to
            our website or any applicable services or both. We have the right to
            investigate violations of this Agreement or conduct that affects the
            Service. We may also consult and cooperate with law enforcement
            authorities to prosecute users who violate the law.
            <br />
            Links to Third Party Websites or Resources. The Services may contain
            links to third-party websites or resources. We provide these links
            only as a convenience and are not responsible for the content,
            products or services on or available from those websites or
            resources or links displayed on such sites. You acknowledge sole
            responsibility for, and assume all risk arising from, your use of
            any third- party websites or resources.
            <br />
            Publicity. You hereby grant Company permission to use your company
            name and logo on our website, customer lists, and marketing
            materials to list you as our customer. However, Company will not use
            your name, trademarks, or logos in any other way without your prior
            consent. Termination. This Agreement will continue in full force and
            effect unless and until your account or this Agreement is terminated
            as described herein.
            <br />
            We may terminate your access to and use of the Service, at our sole
            discretion, at any time and without notice to you. You may cancel
            your account at any time by sending an email to us at
            support@zeromaxeld.com. Upon any termination, discontinuation or
            cancellation of the Service or your account, all provisions of this
            Agreement that should, by their nature, survive termination of this
            Agreement will survive termination. For the avoidance of doubt, all
            accrued rights to payment shall survive termination of this
            Agreement.
            <br />
            Once your account has been terminated, we no longer have any
            obligation to maintain or provide Your Data, and we may delete or
            destroy all copies of Your Data in our possession or control, unless
            legally prohibited.
            <br />
            Disclaimer of Warranties. TO THE MAXIMUM EXTENT ALLOWABLE BY LAW,
            THE SERVICE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND. WITHOUT
            LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            QUIET ENJOYMENT AND NONgINFRINGEMENT AND ANY WARRANTIES ARISING OUT
            OF COURSE OF DEALING OR USAGE OF TRADE. COMPANY EXPLICITLY DISCLAIMS
            ALL LIABILITY FOR ANY ACT OR OMISSION OF ANY DRIVER, USER, END USER,
            ENTITY OR OTHER THIRD PARTY. We make no warranty that the Service
            will meet your requirements or be available on an uninterrupted,
            secure, or error-free basis. We make no warranty regarding the
            quality, accuracy, timeliness, truthfulness, completeness or
            reliability of any the Service or anything shared by any users of
            the Service. Your use of the Service is at your sole risk and
            discretion and Company hereby disclaims any and all liability to you
            or any third party relating thereto.
            <br />
            Indemnity. You agree to indemnify and hold Company, its vendors, and
            their respective subsidiaries, officers, directors, agents,
            partners, employees, and consultants harmless from any claim or
            demand, including reasonable attorneys fees, made by any third party
            due to or arising out of your use of the Service, your connection to
            the Service, your violation of this Agreement or any law, or your
            violation of any rights of a third party.
            <br />
            Indemnity. You agree to indemnify and hold Company, its vendors, and
            their respective subsidiaries, officers, directors, agents,
            partners, employees, and consultants harmless from any claim or
            demand, including reasonable attorneys fees, made by any third party
            due to or arising out of your use of the Service, your connection to
            the Service, your violation of this Agreement or any law, or your
            violation of any rights of a third party. Additional Terms for Apple
            Applications. The terms in this section apply to your use of the
            Service, including the iPhone and iPad applications available via
            the Apple, Inc. Apple App Store (each an App Store App), but the
            following additional terms also apply to App Store Apps: Both you
            and Company acknowledge that this Agreement is concluded between you
            and Company only, and not with Apple, and that Apple is not
            responsible for App Store Apps or the Content; The App Store Apps
            are licensed to you on a limited, non-exclusive, non-transferable,
            non- sublicensable basis, solely to be used in connection with the
            Service for your private, personal, non- commercial use, subject to
            all the terms and conditions of this Agreement as they are
            applicable to the Service; You will only use the App Store Apps in
            connection with an Apple device that you own or control; You
            acknowledge and agree that Apple has no obligation whatsoever to
            furnish any maintenance and support services with respect to the App
            Store Apps; In the event of any failure of the App Store Apps to
            conform to any applicable warranty, including those implied by law,
            you may notify Apple of such failure; upon notification, Apples sole
            warranty obligation to you will be to refund to you the purchase
            price, if any, of the App Store App; You acknowledge and agree that
            Company, and not Apple, is responsible for addressing any claims you
            or any third party may have in relation to the App Store App; You
            acknowledge and agree that, in the event of any third party claim
            that the App Store App or your possession and use of the App Store
            App infringes that third party s intellectual property rights,
            Company, and not Apple, will be responsible for the investigation,
            defense, settlement and discharge of any such infringement claim;
            You represent and warrant that you are not located in a country
            subject to a U.S. Government embargo, or that has been designated by
            the U.S. Government as a terrorist supporting country, and that you
            are not listed on any U.S. Government list of prohibited or
            restricted parties; Both you and Company acknowledge and agree that,
            in your use of the App Store App, you will comply with any
            applicable third party terms of agreement which may affect or be
            affected by such use; and Both you and Company acknowledge and agree
            that Apple and Apples subsidiaries are third party beneficiaries of
            this Agreement, and that upon your acceptance of this Agreement,
            Apple will have the right (and will be deemed to have accepted the
            right) to enforce this Agreement against you as the third party
            beneficiary hereof.
            <br />
            General. Entire Agreement. This Agreement and the notices and
            documents referred to herein constitute the entire agreement between
            you and Company relating to the Service and governs your use of the
            Service, superseding any prior agreements between you and Company or
            any other party in connection with the Service. No Waiver. The
            failure of Company to exercise or enforce any right or provision of
            this Agreement shall not constitute a waiver of such right or
            provision and shall not guarantee that Company will repeat any such
            actions in the future. Severability. If any provision of this
            Agreement is found by an arbitrator or court of competent
            jurisdiction to be invalid, the parties nevertheless agree that the
            arbitrator or court should endeavor to give appropriately valid
            effect to the intention of this Agreement as reflected in the
            provision, and the other provisions of this Agreement shall remain
            in full force and effect. Assignment. This Agreement and any rights
            granted to you under this Agreement may not be transferred or
            assigned by you, in whole or in part, whether voluntarily, by
            operation of law, or otherwise, without our prior written consent
            and any such attempted assignment or transfer shall be null and
            void, except that you may assign this Agreement in its entirety to a
            purchaser of all or substantially all of your assets or business or
            in connection with a merger, amalgamation, reorganization or similar
            transaction without consent and upon written notice to us. Subject
            to the foregoing, this Agreement will enure to the benefit of and be
            binding upon the respective successors and permitted assigns of you
            and us. This Agreement may be assigned or novated by us in our sole
            discretion by way of written notice to you. Governing Law. This
            Agreement shall be governed by the laws of the State of
            Pennsylvania, and all activities performed in connection with the
            Service shall be deemed to have been performed in Pennsylvania. Any
            controversy, dispute, or claim arising out of or relating to the
            Service or this Agreement (a Claim) shall be governed by and
            construed in accordance with the laws of Pennsylvania, except that
            body of law governing conflicts of law. Dispute Resolution. If a
            dispute arises between you and Company, our goal is to learn about
            and address your concerns. If we are unable to address your concerns
            to your satisfaction, we will seek to provide you with a neutral and
            cost-effective means of resolving the dispute quickly. Complaints
            and disputes between you and Company regarding the Service may be
            reported to Attn: Legal Department, Zero Max ELD Inc, 222 Katie Dr
            Feasterville Trevose, PA 19053, Warminster, PA 18974 or via email
            to: support@zeromaxeld.com. Arbitration. For any Claim (excluding
            claims for injunctive or other equitable relief) where the total
            amount of the award sought is less than $10,000.00 USD, the party
            requesting relief may elect to resolve the dispute in a
            cost-effective manner through binding non- appearance-based
            arbitration. If a party elects arbitration, that party will initiate
            such arbitration through an established alternative dispute
            resolution ADR provider mutually agreed upon by the parties. The ADR
            provider and the parties must comply with the following rules: (i)
            the arbitration shall be conducted by telephone, online and/or be
            solely based on written submissions, with the specific manner to be
            chosen by the party initiating the arbitration; (ii) the arbitration
            shall not involve any personal appearance by the parties or
            witnesses unless otherwise mutually agreed by the parties; and (iii)
            any judgment on the award rendered by the arbitrator may be entered
            in any court of competent jurisdiction. Forum for Disputes. Except
            as otherwise agreed by the parties or as described above, you agree
            that any claim or dispute you may have against Company must be
            resolved by a court located in Philadelphia County , Pennsylvania.
            You agree to submit to the personal jurisdiction of the courts
            located within Philadelphia County, Pennsylvania for the purpose of
            litigating all such claims or disputes. Improperly Filed Litigation.
            All claims you bring against Company must be resolved in accordance
            with this Agreement. All claims filed or brought contrary to this
            Agreement shall be considered improperly filed, and a breach of this
            Agreement. Should you file a claim contrary to this Agreement,
            Company may recover attorneys fees and costs from you, provided that
            we have notified you in writing of the improperly filed claim, and
            you have failed to promptly withdraw the claim.
          </MotionP>
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
            SMS Terms & Conditions
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
            By opting into SMS communications from ZEROMAX ELD, you agree to
            receive text messages related to our ELD services, compliance
            updates, promotions, and customer support. These messages may be
            transactional or marketing-related and are intended to keep you
            informed about our services. By providing your phone number and
            opting in, you expressly consent to receive SMS messages from
            ZEROMAX ELD. Message frequency may vary based on account activity,
            promotions, or service updates. Standard message and data rates may
            apply based on your carriers plan. You can opt out at any time by
            replying STOP to any message. Once you opt out, you will no longer
            receive SMS communications from us. To re-subscribe, you may need to
            opt in again through our website or customer support. For help,
            reply HELP or contact us at support@zeromaxeld.com. Our SMS service
            is available on most major U.S. carriers. However, delivery is
            subject to your mobile carriers network availability and conditions.
            We are not responsible for delayed or undelivered messages due to
            carrier issues. ZEROMAX ELD reserves the right to update these SMS
            Terms & Conditions at any time. Changes will be effective upon
            posting to our website. Continued use of our SMS services
            constitutes acceptance of the revised terms.
          </MotionP>
        </div>
      </MotionSection>
      <Footer />
    </main>
  );
}
