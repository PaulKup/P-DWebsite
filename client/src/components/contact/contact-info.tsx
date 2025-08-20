export function ContactInfo() {
  return (
    <div className="text-ink-medium space-y-2 text-sm">
      <p className="text-ink-dark font-medium">Get in Touch</p>
      <p>
        Email:{' '}
        <a className="underline" href="mailto:pdwebdev.studio@gmail.com">
          pdwebdev.studio@gmail.com
        </a>
      </p>
      <p>
        Phone:{' '}
        <a className="underline" href="tel:+14078019652">
          (407) 801-9652
        </a>
      </p>
    </div>
  )
}
