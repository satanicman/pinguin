module.exports = {
    block: 'page',
    title: 'Главная страница',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'reset.css'},
        {elem: 'css', url: '../../node_modules/normalize.css/normalize.css'},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    mods: {theme: 'base'},
    content: [
        {
            block: 'header',
            content: {
                block: 'row',
                mix: {block: 'header', elem: 'content'},
                content: [
                    {
                        elem: 'col',
                        elemMods: {
                            mw: 3
                        },
                        content: [
                            {
                                block: 'image',
                                mods: {responsive: true},
                                mix: {block: 'header', elem: 'logo'},
                                alt: 'Pinguin',
                                url: '../../img/logo.png'
                            }
                        ]
                    },
                    {
                        elem: 'col',
                        elemMods: {
                            mw: 9
                        },
                        content: [
                            {
                                block: 'main-menu',
                                tag: 'nav',
                                content: [
                                    {
                                        elem: 'list',
                                        tag: 'ul',
                                        content: [
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {
                                                            block: 'main-menu',
                                                            elem: 'link',
                                                            elemMods: {active: true}
                                                        },
                                                        title: 'Главная',
                                                        content: 'Главная',
                                                        url: '#'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {block: 'main-menu', elem: 'link'},
                                                        title: 'Услуги и цены',
                                                        content: 'Услуги и цены',
                                                        url: '#'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {block: 'main-menu', elem: 'link'},
                                                        title: 'Портфолио',
                                                        content: 'Портфолио',
                                                        url: '#'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {block: 'main-menu', elem: 'link'},
                                                        title: 'О нас',
                                                        content: 'О нас',
                                                        url: '#'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {block: 'main-menu', elem: 'link'},
                                                        title: 'Отзывы',
                                                        content: 'Отзывы',
                                                        url: '#'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {block: 'main-menu', elem: 'link'},
                                                        title: 'Блог',
                                                        content: 'Блог',
                                                        url: '#'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {block: 'main-menu', elem: 'link'},
                                                        title: 'Контакты',
                                                        content: 'Контакты',
                                                        url: '#'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ] // main-menu-content
                            }, // main-menu
                            {
                                block: 'contacts',
                                mix: {block: 'header', elem: 'contacts'},
                                content: [
                                    {
                                        elem: 'element',
                                        mix: {block: 'link'},
                                        tag: 'a',
                                        attrs: {
                                            title: 'Оставить заявку',
                                            href: '#'
                                        },
                                        content: [
                                            {
                                                block: 'icon',
                                                mix: {block: 'contacts', elem: 'icon'},
                                                mods: {
                                                    type: 'cloud'
                                                }
                                            },
                                            {
                                                elem: 'text',
                                                tag: 'span',
                                                content: 'Оставить заявку'
                                            }
                                        ] // element-content
                                    }, // element
                                    {
                                        elem: 'element',
                                        mix: {block: 'link'},
                                        tag: 'a',
                                        attrs: {
                                            title: 'Заказать обратный звонок',
                                            href: '#'
                                        },
                                        content: [
                                            {
                                                block: 'icon',
                                                mix: {block: 'contacts', elem: 'icon'},
                                                mods: {
                                                    type: 'phone'
                                                }
                                            },
                                            {
                                                elem: 'text',
                                                tag: 'span',
                                                content: 'Заказать обратный звонок'
                                            }
                                        ] // element-content
                                    } // element
                                ] // contacts-content
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'content',
            content: {
                block: 'row',
                content: [
                    {
                        elem: 'col',
                        elemMods: {
                            mw: 3,
                            type: 'left'
                        },
                        content: 'left column'
                    },
                    {
                        elem: 'col',
                        elemMods: {
                            mw: 6,
                            type: 'center'
                        },
                        content: [
                            'center column'
                        ]
                    },
                    {
                        elem: 'col',
                        elemMods: {
                            mw: 3,
                            type: 'right'
                        },
                        content: 'right column'
                    }
                ]
            }
        },
        {
            block: 'footer',
            content: {
                block: 'row',
                mix: { block: 'footer', elem: 'content' },
                content: [
                    {
                        elem: 'col',
                        mix: { block: 'footer', elem: 'col', elemMods: { side: 'left' } },
                        elemMods: {
                            mw: 5
                        },
                        content: [
                            {
                                block: 'footer-menu',
                                tag: 'nav',
                                content: [
                                    {
                                        elem: 'list',
                                        tag: 'ul',
                                        content: [
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'Главная',
                                                        content: 'Главная'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'О нас',
                                                        content: 'О нас'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'Блог',
                                                        content: 'Блог'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'Услуги и цены',
                                                        content: 'Услуги и цены'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'Отзывы',
                                                        content: 'Отзывы'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'Контакты',
                                                        content: 'Контакты'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                tag: 'li',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'footer-menu',  elem: 'link' },
                                                        url: '#',
                                                        title: 'Портфолио',
                                                        content: 'Портфолио'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'col',
                        mix: { block: 'footer', elem: 'col', elemMods: { side: 'right' } },
                        elemMods: {
                            mw: 5
                        },
                        content: 'Pinguin-Studio.com.ua - Создание сайтов в Днепропетровске. Разработка интернет-магазинов<br>Pinguin Studio. Cоздание сайтов в Днепропетровске, разработка интернет-магазинов в Днепропетровске. Разработка сайтов, раскрутка, продвижение.<br>© Pinguin Studio, 2016'
                    }
                ]
            }
        }
    ]
};
