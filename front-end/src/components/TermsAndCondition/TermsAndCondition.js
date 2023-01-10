import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import ScrollTop from "../../Service/ScrollTop";

const TermsAndCondition = () => {
  useEffect(() => {
    ScrollTop.scrollUp();
  }, []);
  return (
    <section style={{ fontFamily: "Signika", padding: "10px" }}>
      <h1 className="text-center mb-4">Terms And Conditions</h1>
      <div className="container">
        <p className="lead">
          Last updated: January 3, 2023 Please read these terms and conditions
          carefully before using Mirchi Meals.
        </p>
      </div>

      <div className="container my-5">
        <h2>Interpretation</h2>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
      </div>

      <div className="container my-5">
        <h2>Definition</h2>
        <h6>For the purposes of these Terms and Conditions:</h6>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Affiliate
            </strong>
            : means an entity that controls, is controlled by or is under common
            control with a party, where "control" means ownership of 50% or more
            of the shares, equity interest or other securities entitled to vote
            for election of directors or other managing authority.
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Country
            </strong>
            : refers to: New Jersey, United States
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Company
            </strong>
            : (referred to as either "the Company", "We", "Us" or "Our" in this
            Agreement) refers to Mirchi Meals.
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Device
            </strong>
            : means any device that can access the Service such as a computer, a
            cellphone or a digital tablet.
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Service
            </strong>
            : refers to the Website.
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Terms and Conditions
            </strong>
            : (also referred as "Terms") mean these Terms and Conditions that
            form the entire agreement between You and the Company regarding the
            use of the Service. This Terms and Conditions agreement has been
            created with the help of the Terms and Conditions Generator.
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Third-party Social Media Service
            </strong>
            : means any services or content (including data, information,
            products or services) provided by a third-party that may be
            displayed, included or made available by the Service.
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              Website
            </strong>
            : refers to Mirchi Meals, accessible from
            https://www.mirchimeals.com
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <strong className="text-dark" style={{ fontSize: "large" }}>
              You
            </strong>
            : means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the Service, as applicable.
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2>Acknowledgment</h2>
        <p className="mb-3">
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p className="mb-3">
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </p>
        <p className="mb-3">
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </p>
        <p className="mb-3">
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </p>
        <p className="mb-3">
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>
      </div>
      <div className="container my-5">
        <h2>Links to Other Websites</h2>
        <p className="mb-2">
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company.
        </p>
        <p className="mb-2">
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party web
          sites or services. You further acknowledge and agree that the Company
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          the use of or reliance on any such content, goods or services
          available on or through any such web sites or services.
        </p>
        <p className="mb-2">
          We strongly advise You to read the terms and conditions and privacy
          policies of any third-party web sites or services that You visit.
        </p>
      </div>
      <div className="container my-5">
        <h2>Termination</h2>
        <p className="mb-3">
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions.
        </p>
        <p className="mb-3">
          Upon termination, Your right to use the Service will cease
          immediately.
        </p>
      </div>
      <div className="container my-5">
        <h2>Limitation of Liability</h2>
        <p className="mb-3">
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.
        </p>
        <p className="mb-3">
          To the maximum extent permitted by applicable law, in no event shall
          the Company or its suppliers be liable for any special, incidental,
          indirect, or consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose.
        </p>
        <p className="mb-3">
          Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party's liability will be limited to the greatest extent
          permitted by law.
        </p>
        <p className="mb-3">"AS IS" and "AS AVAILABLE" Disclaimer</p>
        <p className="mb-3">
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
          faults and defects without warranty of any kind. To the maximum extent
          permitted under applicable law, the Company, on its own behalf and on
          behalf of its Affiliates and its and their respective licensors and
          service providers, expressly disclaims all warranties, whether
          express, implied, statutory or otherwise, with respect to the Service,
          including all implied warranties of merchantability, fitness for a
          particular purpose, title and non-infringement, and warranties that
          may arise out of course of dealing, course of performance, usage or
          trade practice. Without limitation to the foregoing, the Company
          provides no warranty or undertaking, and makes no representation of
          any kind that the Service will meet Your requirements, achieve any
          intended results, be compatible or work with any other software,
          applications, systems or services, operate without interruption, meet
          any performance or reliability standards or be error free or that any
          errors or defects can or will be corrected.
        </p>
        <p className="mb-3">
          Without limiting the foregoing, neither the Company nor any of the
          company's provider makes any representation or warranty of any kind,
          express or implied: (i) as to the operation or availability of the
          Service, or the information, content, and materials or products
          included thereon; (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability, or currency of any
          information or content provided through the Service; or (iv) that the
          Service, its servers, the content, or e-mails sent from or on behalf
          of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.
        </p>
        <p className="mb-3">
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
        </p>
      </div>
      <div className="container my-5">
        <h2>Governing Law</h2>
        <p>
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this Terms and Your use of the Service. Your use of the
          Application may also be subject to other local, state, national, or
          international laws.
        </p>
      </div>
      <div className="container my-5">
        <h2>Disputes Resolution</h2>
        <p>
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </p>
      </div>
      <div className="container my-5">
        <h2>Severability</h2>
        <p>
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to accomplish
          the objectives of such provision to the greatest extent possible under
          applicable law and the remaining provisions will continue in full
          force and effect.
        </p>
      </div>
      <div className="container my-5">
        <h2>Waiver</h2>
        <p>
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation under these Terms shall not
          effect a party's ability to exercise such right or require such
          performance at any time thereafter nor shall the waiver of a breach
          constitute a waiver of any subsequent breach.
        </p>
      </div>
      <div className="container my-5">
        <h2>Delivery Policy</h2>
        <p>
          Deliveries are Sunday between 5pm – 8:30pm a later delivery may occur
          due to traffic, bad weather or unforeseen conditions. Our delivery
          team will reach out to you via text the previous day before delivery
          to remind you of your upcoming delivery. You will also receive a
          delivery reminder via text about 1 hour from the delivery location.
          Our deliveries are contact-less, meaning our driver will leave your
          order outside your location.
        </p>
      </div>
      <div className="container my-5">
        <h2>Order Processing Policy</h2>
        <p>
          All orders for the week must be placed by 12 PM EST the day prior to
          delivery.
        </p>
      </div>
      <div className="container my-5">
        <h2>Special Diet Conditions</h2>
        <p>
          Mirchi Meals are not dietitians or doctors, if you have a condition
          that requires a special diet or special nutritional needs, please
          consult with your physician or specialist before ordering.
        </p>
      </div>
      <div className="container my-5">
        <h2>Nutritional Values</h2>
        <p>No nutritional values are provided.</p>
      </div>
      <div className="container my-5">
        <h2>Changes to These Terms and Conditions</h2>
        <p className="mb-3">
          We reserve the right, at Our sole discretion, to modify or replace
          these Terms at any time. If a revision is material We will make
          reasonable efforts to provide at least 30 days' notice prior to any
          new terms taking effect. What constitutes a material change will be
          determined at Our sole discretion.
        </p>
        <p className="mb-3">
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or in part, please stop using
          the website and the Service.
        </p>
      </div>
      <div className="container my-5">
        <h2>Contact Us</h2>
        <p className="mb-3">
          If you have any questions about these Terms and Conditions, You can
          contact us by email at support@mirchimeals.com
        </p>
        <p className="mb-3">
          Generated using TermsFeed Privacy Policy Generator
        </p>
      </div>
      <div className="container">
        <h2 className="mb-4">Try Mirchi Meals!</h2>
        <div className="d-flex align-items-left justify-content-left mb-3">
          <Link to="/order">
            <Button
              variant="secondary"
              className="text-primary"
              style={{
                height: "40px",
                width: "107px",
                borderRadius: "9px",
                fontSize: "25px",
                padding: "1px",
              }}
            >
              Order
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsAndCondition;
