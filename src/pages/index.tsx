import Link from 'next/link';
import { useRouter } from 'next/router';

interface IPageIndexProps {}
const PageIndex: React.FC<IPageIndexProps> = ({}) => {
  const router = useRouter();
  const { name, age } = router.query;
  console.log({ name, age });
  return (
    <div>
      <p>PageIndex</p>
      <p>
        <Link href="/practice">Practice</Link>
      </p>
    </div>
  );
};
export default PageIndex;
