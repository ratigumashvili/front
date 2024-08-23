import { Link } from '@/navigation';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('homepage');
  return <div>
    <h1>{t('title')}</h1>
    <Link href={'/comitee'}>comitee</Link>
  </div>;
}