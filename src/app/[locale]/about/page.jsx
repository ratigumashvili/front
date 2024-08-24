import { getSinglePage } from "@/app/lib/apiCalls"
import ContentHeader from "../components/ContentHeader"
import MDContent from "../components/MDContent"

async function About({params: {locale}}) {

  const response = await getSinglePage('about', locale)
  return (
    <div>
      <ContentHeader title={response?.data?.attributes?.title} />

      <MDContent content={response?.data?.attributes?.content} />
      
    </div>
  )
}

export default About