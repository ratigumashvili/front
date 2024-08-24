import { getCollection } from "@/app/lib/apiCalls"

import Image from "next/image"

import { useTranslations } from "next-intl"

import Pagination from "../components/Pagination"
import ContentHeader from "../components/ContentHeader"
import MDContent from "../components/MDContent"

import { PER_PAGE } from "@/app/lib/constants"

const Heading = () => {
  const t = useTranslations("shared")
  return (
    <ContentHeader title={t('speakers')} />
  )
}


async function Speakers({ params: { locale }, searchParams }) {

  const currentPage = Number(searchParams.page || 1)

  const response = await getCollection('speakers', locale, 'populate[0]=photo', `pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`)

  return (
    <div>
      <Heading />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {response?.data.length !== 0 && response?.data?.map((speaker) => (
          <div key={speaker.id}>
            <Image
              src={speaker.attributes.photo.data.attributes.url}
              width={300}
              height={300}
              alt={speaker.attributes.name}
              className="w-full h-96 object-cover"
            />
            <h3 className="my-2 text-xl">{speaker.attributes.name}</h3>
            <MDContent content={speaker.attributes.leading} />
          </div>
        ))}
      </div>


      <Pagination
        path={`/speakers?page=`}
        currentPage={currentPage}
        response={response}
      />

    </div>
  )
}

export default Speakers