module.exports = {
    block: 'page',
    title: 'Портфолио',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'portfolio.min.css'}
    ],
    scripts: [{elem: 'js', url: 'portfolio.min.js'}],
    mods: {theme: 'pinguin'},
    content: [
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'projects'
                    },
                    content: {
                        block: 'projects',
                        content: [
                            {
                                elem: 'description',
                                mix: {block: 'row'},
                                content: 'Специально для вас мы отобрали самые интересные кейсы, демонстрирующие наш подход к проектам и их разработке'
                            },
                            {
                                block: 'projects-list',
                                mix: [
                                    {block: 'projects', elem: 'projects-list'},
                                    {block: 'row'}
                                ],
                                content: [
                                    {name: 'Мастерпрофи', description: 'Корпоративный сайт, интернет-магазин'},
                                    {name: 'Мастерпрофи', description: 'Корпоративный сайт, интернет-магазин'},
                                    {name: 'Мастерпрофи', description: 'Корпоративный сайт, интернет-магазин'},
                                    {name: 'Мастерпрофи', description: 'Корпоративный сайт, интернет-магазин'},
                                    {name: 'Мастерпрофи', description: 'Корпоративный сайт, интернет-магазин'},
                                    {name: 'Мастерпрофи', description: 'Корпоративный сайт, интернет-магазин'}
                                ].map(function(project, ids) {
                                    id = ids + 1;
                                    return {
                                        elem: 'project',
                                        mix: {block: 'row', elem: 'col', elemMods: {mw: 4}},
                                        js: true,
                                        content: {
                                            elem: 'link',
                                            url: '#',
                                            title: project.name,
                                            content: [
                                                {
                                                    block: 'image',
                                                    mix: {block: 'project', elem: 'image'},
                                                    mods: {responsive: true},
                                                    alt: project.name,
                                                    url: '../../common.blocks/projects-list/' + id + '.jpg'
                                                },
                                                {
                                                    elem: 'about',
                                                    content: [
                                                        {
                                                            elem: 'spacer'
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: project.name
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: project.description
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    };
                                })
                            }
                        ]
                    }
                }
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
