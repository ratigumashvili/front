import { getSinglePage } from "@/app/lib/apiCalls"

import ContentHeader from "../components/ContentHeader"
import MDContent from "../components/MDContent"

async function PracticalInformation({ params: { locale } }) {

  const response = await getSinglePage('information', locale)
  return (
    <div>

      <ContentHeader title={response?.data?.attributes?.title} />

      <MDContent content={response?.data?.attributes?.content} />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5341948649416!2d44.76830807535206!3d41.70899037598625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447332cec3b2d9%3A0xcf4f8584f7256685!2sLigamus!5e0!3m2!1sen!2sge!4v1724695526124!5m2!1sen!2sge"
        width="100%"
        height="450"
        style={{border: "0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  )
}

export default PracticalInformation