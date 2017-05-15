module.exports = {
    block: 'page',
    title: 'Страница проекта',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'project.min.css'}
    ],
    scripts: [{elem: 'js', url: 'project.min.js'}],
    mods: {theme: 'pinguin'},
    content: [
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'project'
                    },
                    content: [
                        {
                            block: 'project-banner',
                            mods: { position: 'top' },
                            content: {
                                block: 'image',
                                mods: { responsive: true },
                                mix: { block: 'project-banner', elem: 'image' },
                                url: '../../img/project-banner_top.jpg',
                                alt: 'Gark Rider',
                                title: 'Gark Rider'
                            }
                        },
                        {
                            block: 'row',
                            mix: [
                                {block: 'content', elem: 'line-in'}
                            ],
                            content: {
                                elem: 'col',
                                elemMods: { mw : 12 },
                                content: {
                                    block: 'project',
                                    content: [
                                        {
                                            elem: 'title',
                                            elemMods: { position: 'top' },
                                            content: 'Промо-сайт, разработка, дизайн',
                                        },
                                        {
                                            elem: 'content',
                                            mix: { block: 'row' },
                                            content: [
                                                {
                                                    elem: 'description',
                                                    mix: { block: 'row', elem: 'col', elemMods: { mw: 9 }},
                                                    content: {
                                                        block: 'project-description',
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                mix: { block: 'project', elem: 'title'},
                                                                content: 'О проекте:'
                                                            },
                                                            {
                                                                elem: 'list',
                                                                mix: { block: 'row' },
                                                                content: [
                                                                    {
                                                                        elem: 'item',
                                                                        mix: [
                                                                            { block: 'project', elem: 'text'},
                                                                            { block: 'row', elem: 'col', elemMods: { mw : 6 }}
                                                                        ],
                                                                        content: 'Gark Rider  — это, прежде всего, клуб по интересам, а потом уже цирюльня. Именно эта идея легла в основу позиционирования для нового киевского барбершопа, претендующего в будущем стать лидером украинского рынка. Взяв за основу строгую спокойную цветовую гамму, мы разработали для BRAZOR уникальный логотип и фирменный стиль. Создали имиджевый сайт, реализовав технологию адаптивного дизайна, чтобы ресурс одинаково хорошо отображался на всех устройствах.'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        mix: [
                                                                            { block: 'project', elem: 'text'},
                                                                            { block: 'row', elem: 'col', elemMods: { mw : 6 }}
                                                                        ],
                                                                        content: 'Gark Rider собрал лучших барберов Киева и предлагает широкий выбор процедур для мужчин. Поэтому мы с особым вниманием подошли к структуре сайта, наилучшим образом демонстрируя услуги заведения, его мастеров и привилегии. Сайт выполнен в фирменном стиле компании, имеет удобную форму записи онлайн и раскрывает основные направления философии BRAZOR.'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'team',
                                                    mix: { block: 'row', elem: 'col', elemMods: { mw: 3 }},
                                                    content: {
                                                        block: 'project-team',
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                mix: { block: 'project', elem: 'title'},
                                                                content: 'Над проектом работали:'
                                                            },
                                                            {
                                                                elem: 'list',
                                                                content: [
                                                                    {name: 'Александр Ткаченко'},
                                                                    {name: 'Богдан Барна'},
                                                                    {name: 'Андрей Бялонович'},
                                                                    {name: 'Давид Сывый'}
                                                                ].map(function(people) {
                                                                    return {
                                                                        elem: 'item',
                                                                        mix: { block: 'project', elem: 'text'},
                                                                        content: people.name
                                                                    }
                                                                })
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            } // project
                        },
                        {
                            block: 'project-banner',
                            mods: { position: 'bottom' },
                            content: {
                                block: 'image',
                                mods: { responsive: true },
                                mix: { block: 'project-banner', elem: 'image' },
                                url: '../../img/project-banner_bottom.png',
                                alt: 'Gark Rider',
                                title: 'Gark Rider'
                            }
                        }
                    ]
                }
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
