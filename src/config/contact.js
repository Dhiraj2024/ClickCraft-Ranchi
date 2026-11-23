// Central configuration for all contact details.
// Replace the placeholders with your real numbers (country code, digits only).

export const PHONE_NUMBER = 'YOUR_PHONE_NUMBER'
export const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello ClickCraft Ranchi, mujhe website banwani hai. Please details share karein.'

export const callLink = `tel:${9092375766}`


export const whatsappLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${90923757}?text=${encodeURIComponent(message)}`

export const projectEnquiryLink = (projectName) =>
  whatsappLink(
    `Hello ClickCraft Ranchi, mujhe aapki "${projectName}" website ke baare mein details chahiye. Please share karein.`
  )

// Social profile links - replace with your real profiles.
export const socialLinks = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
}
