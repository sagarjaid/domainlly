import React from 'react';
import SEOMeta from '@/components/SEOMeta';

const GDPR = () => {
  return (
    <>
      <SEOMeta
        title='GDPR Policy — Hashtaglly'
        description='Hashtags for Instagram, Tiktok, Twitter, & more. Best Hashtag Generator in 2023'
        slug='gdrp'
      />
      <HelloBar />
      <main className='m-auto flex h-screen max-w-5xl flex-col'>
        <Nav />
        <div className='flex flex-col items-start justify-center gap-6 px-4 py-10 '>
          <div className='flex flex-col gap-2 text-2xl font-medium'>
            GDPR Policy
            <div className='text-sm'>Updated on 1 April, 2023</div>
          </div>
          <p>
            At Hashtaglly, accessible from https://Hashtaglly.com/, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Hashtaglly and how we use it.
          </p>
          <h2>General Data Protection Regulation (GDPR)</h2>
          <p>We are a Data Controller of your information.</p>
          <p>
            Hashtaglly legal basis for collecting and using the personal
            information described in this Privacy Policy depends on the Personal
            Information we collect and the specific context in which we collect
            the information:
          </p>
          <ul>
            <li>Hashtaglly needs to perform a contract with you</li>
            <li>You have given Hashtaglly permission to do so</li>
            <li>
              Processing your personal information is in Hashtaglly legitimate
              interests
            </li>
            <li>Hashtaglly needs to comply with the law</li>
          </ul>
          <p>
            Hashtaglly will retain your personal information only for as long as
            is necessary for the purposes set out in this Privacy Policy. We
            will retain and use your information to the extent necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            policies.
          </p>
          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. If you wish to be informed what
            Personal Information we hold about you and if you want it to be
            removed from our systems, please contact us.
          </p>
          <p>
            In certain circumstances, you have the following data protection
            rights:
          </p>
          <ul>
            <li>
              The right to access, update or to delete the information we have
              on you.
            </li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <h2>Cookies and Web Beacons</h2>
          <p>
            Like any other website, Hashtaglly uses "cookies". These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>
          <h2>Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –{' '}
            <a href='https://policies.google.com/technologies/ads'>
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <h2>Our Advertising Partners</h2>
          <p>
            Some of advertisers on our site may use cookies and web beacons. Our
            advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below.
          </p>
          <ul>
            <li>
              <p>Google</p>
              <p>
                <a href='https://policies.google.com/technologies/ads'>
                  https://policies.google.com/technologies/ads
                </a>
              </p>
            </li>
          </ul>
          <h2>Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Hashtaglly.
          </p>
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Hashtaglly, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>
          <p>
            Note that Hashtaglly has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
          <h2>Third Party Privacy Policies</h2>
          <p>
            Hashtaglly's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{' '}
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
          <h2>Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            Hashtaglly does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
          <h2>Online Privacy Policy Only</h2>
          <p>
            Our Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Hashtaglly. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
};

export default GDPR;
