import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import ProgressReportsPageContent from './page-content';

export const metadata: Metadata = {
    title: 'Progress Reports | BFshop Project Portal',
    description: 'Chronological BFshop delivery updates, documenting milestones, blockers, and implementation decisions.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BFshop Progress Reports',
    description: 'Chronological BFshop delivery updates, documenting milestones, blockers, and implementation decisions.',
    url: 'https://benfosterdev.com/projects/bfshop/updates',
    isPartOf: {
        '@type': 'WebPage',
        name: 'BFshop Project Portal',
        url: 'https://benfosterdev.com/projects/bfshop',
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
                name: 'BFshop Project Portal',
                item: 'https://benfosterdev.com/projects/bfshop',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Progress Reports',
                item: 'https://benfosterdev.com/projects/bfshop/updates',
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
