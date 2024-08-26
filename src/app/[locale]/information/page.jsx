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
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1489.1818609627526!2d44.74808929832448!3d41.712669638585254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIlia%20State%20University%20building%20F!5e0!3m2!1sen!2sge!4v1724662901919!5m2!1sen!2sge"
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