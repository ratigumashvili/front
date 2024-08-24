import Image from 'next/image';
import { getSinglePage } from '../lib/apiCalls';
import ContentHeader from './components/ContentHeader';
import MDContent from './components/MDContent';

export default async function HomePage({params: {locale}}) {
  
  const response = await getSinglePage('home', locale, 'populate[0]=banner')

  return (
    <div>

      {response?.data?.attributes?.banner?.data?.attributes?.url && (
      <Image src={response?.data?.attributes?.banner?.data?.attributes?.url} width={1000} height={1000} alt='Conference Banner' className='w-full' />
      )}

      <div className='my-8'>
        <ContentHeader title={response?.data?.attributes?.title} />
        <MDContent content={response?.data?.attributes?.content} />
      </div>
    </div>
  );
}