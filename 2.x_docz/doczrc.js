import chonkyPackage from 'chonky/package.json';

export default {
    title: `Chonky v${chonkyPackage.version} Docs`,
    base: '/docs/2.x/',
    src: 'src/',
    dest: 'build/',
    public: 'static/',
    typescript: true,
    menu: [
        'Introduction',
        'Installation & usage',
        'File Browser demo',
        {
            name: 'Basics',
            menu: [
                'Immutability',
                'The files array',
                'Current folder',
                'File thumbnails',
            ],
        },
    ],
};
