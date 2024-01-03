
import { clsx } from 'clsx';
import Link from 'next/link';
import { lusitana } from '@/app/ui/components/fonts';


interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}



export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (

    <nav aria-label="Breadcrumb" className="mb-8 block  ">
      <ol className={clsx(lusitana.className, 'flex my-1 font-semibold text-[20px]  dark:text-slate-200 mb-3')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
