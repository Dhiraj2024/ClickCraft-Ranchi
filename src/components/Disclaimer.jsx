/*
# Project Disclaimer / Terms (Hindi)

Yeh section Hero ke turant baad aata hai. Isme project ki shartein,
scope, bug-fixing policy, hosting, ownership, data safety, payment
wagairah client ko clearly bataye jaate hain.

Style: warm amber/orange cards on a soft amber background with
numbered terms and a highlighted "consent" callout at the end.
*/

import { FileText } from 'lucide-react'

const terms = [
  {
    title: 'काम का दायरा',
    body: 'यह प्रोजेक्ट सिर्फ़ उन्हीं सुविधाओं के साथ दिया जाएगा जो लिखित रूप में तय हुई हैं: [फीचर्स की सूची]। इसके अलावा कोई भी सुविधा इसमें शामिल नहीं है।',
  },
  {
    title: 'नए बदलाव',
    body: 'डिलीवरी के बाद कोई नया फीचर या डिज़ाइन बदलाव अलग से पेड काम होगा।',
  },
  {
    title: 'फ्री बग-फिक्सिंग',
    body: 'डिलीवरी की तारीख से [15/30] दिन तक, तय किए गए फीचर्स में आने वाली गलतियाँ (बग) मुफ़्त ठीक की जाएँगी।',
  },
  {
    title: 'बग-फिक्सिंग में शामिल नहीं',
    body: 'ग्राहक या उसके स्टाफ़ की गलती से डेटा डिलीट या खराब होना, बिना डेवलपर की जानकारी के कोड या सेटिंग बदलना, ग्राहक द्वारा पासवर्ड या लॉगिन किसी और को देना।',
  },
  {
    title: 'हॉस्टिंग और थर्ड-पार्टी सर्विस',
    body: 'प्रोजेक्ट Render, Vercel और MongoDB Atlas जैसी बाहरी सेवाओं पर चलता है। इनका आउटेज (बंद होना), धीमा चलना या नियम/कीमत बदलना डेवलपर की ज़िम्मेदारी नहीं है।',
  },
  {
    title: 'हॉस्टिंग का खर्च',
    body: 'हॉस्टिंग, डोमेन और डेटाबेस का खर्च [ग्राहक / डेवलपर] उठाएगा। फ्री प्लान की सीमाएँ (जैसे सर्वर का देर से खुलना, 512 MB डेटा लिमिट) ग्राहक को बता दी गई हैं।',
  },
  {
    title: 'अकाउंट का मालिकाना हक',
    body: 'सभी अकाउंट ग्राहक के नाम पर होंगे और डिलीवरी पर लॉगिन की जानकारी सौंप दी जाएगी। उसके बाद उनकी सुरक्षा ग्राहक की ज़िम्मेदारी है।',
  },
  {
    title: 'डेटा और सुरक्षा',
    body: 'डेवलपर सामान्य सुरक्षा मानकों का पालन करेगा (पासवर्ड एन्क्रिप्टेड रखना आदि), लेकिन 100% सुरक्षा की गारंटी नहीं दी जा सकती। ग्राहक का अपना यूज़र डेटा (फोन नंबर आदि) संभालने की कानूनी ज़िम्मेदारी ग्राहक की होगी।',
  },
  {
    title: 'बैकअप',
    body: 'डेटा का नियमित बैकअप ग्राहक की ज़िम्मेदारी है, जब तक अलग से मेंटेनेंस प्लान न लिया गया हो।',
  },
  {
    title: 'मेंटेनेंस (वैकल्पिक)',
    body: 'वारंटी के बाद सपोर्ट, अपडेट और मॉनिटरिंग के लिए ₹[राशि]/महीना का अलग प्लान उपलब्ध है। प्लान न लेने पर हर सपोर्ट पेड होगा।',
  },
  {
    title: 'सोर्स कोड',
    body: 'पूरा भुगतान मिलने के बाद सोर्स कोड का अधिकार [ग्राहक को / डेवलपर के पास] रहेगा।',
  },
  {
    title: 'बिज़नेस रिज़ल्ट की गारंटी नहीं',
    body: 'यह सॉफ़्टवेयर सिर्फ़ एक टूल है। इससे कितने ग्राहक या कितनी कमाई होगी, इसकी कोई गारंटी नहीं है।',
  },
  {
    title: 'भुगतान',
    body: 'कुल राशि ₹[10,000] है। [50%] एडवांस और बाकी डिलीवरी पर देना होगा। भुगतान के बाद राशि वापस नहीं होगी, सिवाय तब जब तय फीचर्स डिलीवर ही न हुए हों।',
  },
]

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="bg-gradient-to-b from-amber-50 via-white to-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 shadow-sm">
            <FileText className="h-7 w-7" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            प्रोजेक्ट डिस्क्लेमर / शर्तें
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            प्रोजेक्ट शुरू करने से पहले कृपया नीचे दी गई सभी शर्तें ध्यान से पढ़ें।
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {terms.map((term, index) => (
            <div
              key={term.title}
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-600/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-amber-100 text-sm font-bold text-amber-700">
                  {index + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-navy-900">{term.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{term.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-amber-900">सहमति</h3>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/90 sm:text-base">
            प्रोजेक्ट शुरू होने का मतलब है कि ग्राहक ने ऊपर की सभी शर्तें पढ़कर मान ली हैं।
          </p>
        </div>
      </div>
    </section>
  )
}
