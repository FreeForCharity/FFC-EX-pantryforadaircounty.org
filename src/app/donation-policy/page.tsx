import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site.config'
import ContactEmail from '@/components/policy/ContactEmail'
import { pageMetadata } from '@/lib/pageMetadata'

export const metadata: Metadata = pageMetadata({
  title: 'Donation Policy',
  description: `Donation Policy for ${siteConfig.name}`,
  path: '/donation-policy',
})

export default function DonationPolicy() {
  return (
    <main id="main-content" className="ffc-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">
          Donation Policy
        </h1>

        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p>
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Tax Deductibility
          </h2>
          {/* A legal claim, made only when siteConfig.taxStatusLabel says the
              organization holds IRS 501(c)(3) recognition. */}
          {/* The EIN is shown only once it is configured: while it is pending
              (see PendingField) the value is empty. */}
          {siteConfig.taxStatusLabel.trim() ? (
            <p>
              {siteConfig.name} is a qualified 501(c)(3) nonprofit organization
              {siteConfig.ein.trim() ? ` (EIN: ${siteConfig.ein})` : ''}. Donations are
              tax-deductible to the full extent allowed by law.
            </p>
          ) : (
            // No tax-status claim either way: '' means "make no claim", which
            // covers both an organization without IRS recognition and one whose
            // status this site has not yet confirmed.
            <p>
              This site makes no claim about the tax-deductibility of donations to {siteConfig.name}
              {siteConfig.ein.trim() ? ` (EIN: ${siteConfig.ein})` : ''}. Please confirm the
              organization&apos;s tax-exempt status, and consult a tax advisor, before claiming a
              deduction.
            </p>
          )}

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Use of Donations
          </h2>
          <p>
            Donations support {siteConfig.name}&apos;s mission and the administrative costs
            necessary to carry it out: {siteConfig.mission}
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Donation Processing
          </h2>
          <p>
            Donations are processed securely through our payment partners. You will receive a
            receipt for tax purposes via email after your donation is processed.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Refund Policy
          </h2>
          <p>
            We generally do not provide refunds for donations. However, if you believe an error has
            occurred, please contact us within 30 days of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Privacy
          </h2>
          <p>
            Donor information is kept confidential and will not be shared with third parties except
            as required by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Contact Us
          </h2>
          <p>For questions about donations or this policy, please contact us at:</p>
          <p>
            Email: <ContactEmail className="text-primary underline" />
            {/* Only a configured number is shown, matching the footer's phone guard. */}
            {siteConfig.phone.tel.trim() && siteConfig.phone.display.trim() && (
              <>
                <br />
                Phone: {siteConfig.phone.display}
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  )
}
