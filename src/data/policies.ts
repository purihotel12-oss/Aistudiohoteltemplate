/**
 * MASTER HOTEL WEBSITE TEMPLATE - POLICIES DATA
 * 
 * DEMO CONTENT — REQUIRES HOTEL LEGAL REVIEW BEFORE PRODUCTION
 * Note: These policies serve as a structural reference. Ensure client legal counsel reviews
 * specific state and country statutory requirements before launching.
 */

import { PoliciesData } from '../types';

export const policiesData: PoliciesData = {
  guestInformation: {
    title: 'Guest Information & Property Guidelines',
    lastUpdated: 'January 2026',
    introNotice: 'We look forward to welcoming you to The Samudra Heritage Resort & Spa, Goa. Please review our essential arrival guidelines and property amenities below to ensure a seamless and serene stay.',
    sections: [
      {
        heading: 'Check-In & Check-Out Timings',
        paragraphs: [
          'Standard check-in begins at 2:00 PM local time. If you anticipate arriving earlier, you are welcome to store your luggage with our royal concierge team and enjoy full access to our pools, dining venues, and spa facilities.',
          'Standard check-out is at 11:00 AM. Late check-out requests are subject to room availability on the day of departure and may incur additional charges depending on departure time.'
        ],
        bulletPoints: [
          'Guaranteed Check-in: 2:00 PM',
          'Standard Check-out: 11:00 AM',
          '24/7 Front Desk & Royal Concierge Operations',
          'Complimentary luggage storage prior to check-in and post check-out'
        ]
      },
      {
        heading: 'Mandatory Government Identification & Security Deposit',
        paragraphs: [
          'In compliance with Government of India statutory hospitality regulations, all adult Indian citizens must present an original valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License; PAN cards are not legally acceptable as identity/address proof) upon arrival.',
          'Foreign nationals and OCI cardholders must present an original valid Passport and valid Visa / OCI card to complete mandatory Form C registration upon check-in.',
          'A pre-authorization or security deposit hold of ₹8,000 per night of stay is placed at check-in on an active credit card or via UPI/cash deposit to cover incidental resort services. The hold is released upon departure inspection.'
        ]
      },
      {
        heading: 'Children & Extra Bedding Policies',
        paragraphs: [
          'Children of all ages are warmly welcomed. Children up to 11 years of age stay free of charge when utilizing existing bedding with parents.',
          'Complimentary baby cots and infant cribs are provided upon advance request (subject to availability). Rollaway beds for older children or third adults are available in select suite categories for ₹3,500 per night plus taxes.'
        ]
      },
      {
        heading: 'Quiet Hours & Property Decorum',
        paragraphs: [
          'To preserve the peaceful ambiance of our sanctuary, quiet hours are observed property-wide between 10:00 PM and 07:00 AM. We kindly request all guests to be mindful of sound levels on private balconies and outdoor corridors.',
          'Smoking and vaping are strictly prohibited inside all guest suites, balconies, and enclosed public areas. Designated open-air smoking pavilions are available on the resort perimeter.'
        ]
      }
    ]
  },

  privacyPolicy: {
    title: 'Privacy Policy',
    lastUpdated: 'January 2026',
    introNotice: 'The Samudra Heritage Resort & Spa respects your privacy and is dedicated to protecting your personal information. This Privacy Policy details how we collect, handle, and safeguard your data when you visit our website or interact with our services.',
    sections: [
      {
        heading: '1. Information We Collect',
        paragraphs: [
          'We collect information you directly provide when making a reservation enquiry, subscribing to our private journal, or contacting our concierge team.',
          'This may include your full name, email address, contact telephone number, arrival dates, room preferences, dietary requirements, and payment billing details.'
        ],
        bulletPoints: [
          'Direct contact information submitted via enquiry forms',
          'Reservation dates and room preference requests',
          'Technical device data and non-identifying browser information',
          'Direct communications sent via email, phone, or official WhatsApp'
        ]
      },
      {
        heading: '2. How We Use Your Information',
        paragraphs: [
          'We use the collected information exclusively to process reservations, respond to guest inquiries, personalize your stay experience, and maintain necessary operational records.',
          'We do not sell, rent, or trade your personal information to third-party advertisers or data brokers under any circumstances.'
        ]
      },
      {
        heading: '3. Third-Party Integrations & Booking Engines',
        paragraphs: [
          'When you click to complete an external reservation, you may be redirected to our certified central reservation system provider (such as SynXis or Cloudbeds). These platforms operate under strict enterprise security protocols and maintain their own privacy standards.',
          'Our website utilizes privacy-conscious analytics and embedded Google Maps for directions.'
        ]
      },
      {
        heading: '4. Contact for Privacy Inquiries',
        paragraphs: [
          'If you have questions regarding this Privacy Policy or wish to request data correction or deletion, please contact our Data Protection Officer at privacy@samudraheritage.com.'
        ]
      }
    ]
  },

  refundCancellationPolicy: {
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'January 2026',
    introNotice: 'Please review the cancellation and refund rules applicable to your reservation type. Terms may vary depending on flexible vs. promotional non-refundable rates.',
    sections: [
      {
        heading: 'Flexible Direct Booking Cancellation',
        paragraphs: [
          'For standard flexible reservations booked directly through our official channels, full refunds are granted when cancellation is submitted in writing at least 7 days prior to scheduled check-in (2:00 PM resort local time).',
          'Cancellations received between 3 and 6 days prior to arrival incur a charge equivalent to 50% of the total booking value. Cancellations within 48 hours of arrival or no-shows incur 100% forfeiture of the reservation deposit.'
        ]
      },
      {
        heading: 'Promotional & Special Package Bookings',
        paragraphs: [
          'Certain advance-purchase promotions, holiday festive period bookings (December 20 – January 5), and customized group buyout agreements may be designated as non-refundable or subject to custom cancellation terms stated clearly at the time of quotation.'
        ]
      },
      {
        heading: 'Refund Processing Timelines',
        paragraphs: [
          'Eligible refunds are processed back to the original method of payment (UPI, card, or bank transfer) within 5 to 7 business days following cancellation approval. Transaction processing conforms to Reserve Bank of India merchant regulations.'
        ]
      },
      {
        heading: 'Force Majeure & Exceptional Circumstances',
        paragraphs: [
          'In the unforeseen event of documented severe weather warnings, official travel bans, or flight cancellations, our management team will facilitate flexible date rescheduling without change penalties whenever possible.'
        ]
      }
    ]
  },

  termsAndConditions: {
    title: 'Terms & Conditions',
    lastUpdated: 'January 2026',
    introNotice: 'By accessing this website and booking accommodations at The Samudra Heritage Resort & Spa, you agree to comply with and be bound by the following terms of service.',
    sections: [
      {
        heading: '1. Website Usage & Intellectual Property',
        paragraphs: [
          'All text, visual imagery, logos, architectural photography, and branding displayed on this website are the intellectual property of Samudra Heritage Hospitality India Private Limited and protected by copyright laws.',
          'Unauthorized reproduction, scraping, or commercial exploitation of any site content is strictly prohibited.'
        ]
      },
      {
        heading: '2. Pricing, Rates & Taxes',
        paragraphs: [
          'All room rates are quoted in Indian National Rupees (INR / ₹) unless explicitly stated otherwise. Rates are subject to mandatory Government of India Goods and Services Tax (18% GST) and applicable resort service fees.',
          'We reserve the right to correct typographical rate errors prior to booking confirmation.'
        ]
      },
      {
        heading: '3. Guest Responsibility & Property Damage',
        paragraphs: [
          'Guests are responsible for maintaining reasonable care of their suites and resort facilities. Any intentional damage, loss of property, or excessive cleaning required beyond customary housekeeping will be billed to the guest account upon checkout.'
        ]
      },
      {
        heading: '4. Governing Law & Jurisdiction',
        paragraphs: [
          'These terms and all contractual agreements entered into with the resort shall be governed by and construed in accordance with the laws of India, under the jurisdiction of the courts of Goa, India.'
        ]
      }
    ]
  },

  cookiePolicy: {
    title: 'Cookie Policy',
    lastUpdated: 'January 2026',
    introNotice: 'This website utilizes minimal, essential cookies designed purely to deliver secure site navigation, remember language preferences, and ensure optimal loading speeds.',
    sections: [
      {
        heading: 'Essential Cookies Only',
        paragraphs: [
          'We do not employ intrusive tracking cookies or third-party behavioral advertising scripts.',
          'Essential session cookies are used solely to preserve navigation state, remember selected check-in dates while browsing rooms, and protect form submissions against cross-site scripting.'
        ]
      },
      {
        heading: 'Managing Browser Cookies',
        paragraphs: [
          'You may configure your web browser settings to reject or delete cookies at any time. Please note that disabling essential cookies may slightly alter the responsiveness of room availability searches.'
        ]
      }
    ]
  }
};
