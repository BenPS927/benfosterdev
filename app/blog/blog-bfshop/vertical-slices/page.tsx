import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import VerticalSlicesPageContent from './vertical-slices-page-content';

export const metadata: Metadata = {
    title: 'BFshop building method | Ben Foster\'s Blog',
    description: 'Description of how BFshop is being built using the slice method.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BFshop Building Method',
    description: 'Description of how BFshop is being built using the slice method.',
    url: 'https://benfosterdev.com/blog/blog-bfshop/vertical-slices',
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
                name: 'Vertical Slices',
                item: 'https://benfosterdev.com/blog/blog-bfshop/vertical-slices',
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
