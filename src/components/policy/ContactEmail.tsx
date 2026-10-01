import React from 'react'
import { PENDING_TEXT, isPending, mailtoHref, siteConfig } from '@/lib/site.config'

/**
 * The organization's contact email as a `mailto:` link, for policy and error
 * pages.
 *
 * While the email is pending (listed in `siteConfig.pending`, value empty) it
 * renders the visible "awaiting information" text instead: plain text, never
 * a `mailto:` link with no recipient, and never another organization's
 * address standing in for the charity's.
 */
export default function ContactEmail({ className }: { className?: string }) {
  if (!siteConfig.contactEmail.trim()) {
    return isPending('email') ? <em>[{PENDING_TEXT}]</em> : null
  }
  return (
    <a href={mailtoHref()} className={className}>
      {siteConfig.contactEmail}
    </a>
  )
}
