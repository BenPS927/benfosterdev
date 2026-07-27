import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import VerticalSlicesPageContent from './vertical-slices-page-content';

export const metadata: Metadata = {
    title: 'BFshop Building Method | BFshop Project Portal',
    description: 'Description of how BFshop is being built using the slice method.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BFshop Building Method',
    description: 'Description of how BFshop is being built using the slice method.',
    url: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices',
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
                name: 'Vertical Slices',
                item: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices',
            },
        ],
    },
};

export default function VerticalSlicesPage() {
    return (
        <div>
            <JsonLd schema={schema} />
            <VerticalSlicesPageContent />
        </div>
    );
}
