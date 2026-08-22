export const taxiDancerFormUrl = 'https://forms.gle/ncntzuV8LCTGvn8z6';
export const whatsappUrl = 'https://wa.me/5491155284015';
export const taxiDancerInquiryMessage = 'Estoy interesado en el servicio de taxidancers.';

/** @param {string} message */
export function getWhatsAppHref(message) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

// Removing an entry hides it everywhere.
export const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/dandydancers/',
    external: true
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:contact.dandydancers@gmail.com'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: whatsappUrl,
    external: true
  }
];
