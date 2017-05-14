module.exports = {
    block: 'page',
    title: 'Контакты',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'contacts.min.css'}
    ],
    scripts: [{elem: 'js', url: 'contacts.min.js'}],
    mods: {theme: 'pinguin'},
    content: [
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'contacts'
                    },
                    content: {
                        block: 'contacts',
                        mix: [
                            {block: 'row'},
                            {block: 'content', elem: 'line-in'}
                        ],
                        content: [
                            {
                                elem: 'col',
                                elemMods: {side: 'left'},
                                mix: {block: 'row', elem: 'col', elemMods: {mw: 5}},
                                content: [
                                    {
                                        elem: 'block',
                                        content: [
                                            {
                                                block: 'title',
                                                mods: {upper: true},
                                                mix: {block: 'contacts', elem: 'title'},
                                                tag: 'h6',
                                                content: 'Звоните:'
                                            },
                                            {
                                                block: 'text',
                                                mix: {block: 'contacts', elem: 'text'},
                                                content: 'тел.  (056) 786-17-17<br>моб. (096) 480-66-06<br>моб. (099) 652-13-48'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'block',
                                        content: [
                                            {
                                                block: 'title',
                                                mods: {upper: true},
                                                mix: {block: 'contacts', elem: 'title'},
                                                tag: 'h6',
                                                content: 'Пишите:'
                                            },
                                            {
                                                block: 'text',
                                                mix: {block: 'contacts', elem: 'text'},
                                                content: 'e-mail: zakaz@pinguin-studio.com.ua'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'block',
                                        content: [
                                            {
                                                block: 'title',
                                                mods: {upper: true},
                                                mix: {block: 'contacts', elem: 'title'},
                                                tag: 'h6',
                                                content: 'Приходите в гости:'
                                            },
                                            {
                                                block: 'text',
                                                mix: {block: 'contacts', elem: 'text'},
                                                content: 'Украина. г. Днепр:<br>ул. Набережная им. Ленина 15А'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'contacts-socials',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    url: '#',
                                                    title: 'fb',
                                                    content: {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'fb'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    url: '#',
                                                    title: 'tw',
                                                    content: {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'tw'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    url: '#',
                                                    title: 'in',
                                                    content: {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'in'
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'col',
                                elemMods: {side: 'right'},
                                mix: {block: 'row', elem: 'col', elemMods: {mw: 7}},
                                content: {
                                    block: 'image',
                                    mix: {block: 'contacts', elem: 'image'},
                                    mods: {responsive: true},
                                    alt: 'Карта',
                                    url: '../../img/contacts.jpg'
                                }
                            }
                        ]
                    }
                } // contacts
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
