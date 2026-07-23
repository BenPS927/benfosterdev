import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import ProgressReportsPageContent from './page-content';

export const metadata: Metadata = {
    title: 'BFshop Progress Reports | Ben Foster\'s Blog',
    description: 'Home of ongoing BFshop project update reports, documenting delivery progress and development milestones.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BFshop Progress Reports',
    description: 'Home of ongoing BFshop project update reports, documenting delivery progress and development milestones.',
    url: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports',
    isPartOf: {
        '@type': 'Blog',
        name: 'BFshop Blog',
        url: 'https://benfosterdev.com/blog/blog-bfshop',
    },
    author: {
        '@type': 'Person',
        name: 'Ben Foster',
        url: 'https://benfosterdev.com',
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'BFshop Blog',
                item: 'https://benfosterdev.com/blog/blog-bfshop',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Progress Reports',
                item: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports',
            },
        ],
    },
};

export default function ProgressReportsPage() {
    return (
        <div>
            <JsonLd schema={schema} />
            <ProgressReportsPageContent />
        </div>
    );
}
