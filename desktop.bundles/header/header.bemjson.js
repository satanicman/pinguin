module.exports = ([
    {
        block: 'header',
        content: [
            {
                block: 'row',
                mix: {block: 'header', elem: 'content'},
                content: [
                    {
                        elem: 'col',
                        elemMods: {
                            m: true
                        },
                        mix: {block: 'header', elem: 'col', elemMods: {side: 'left'}},
                        content: [
                            {
                                block: 'link',
                                url: '/',
                                title: 'Pinguin studion',
                                content: [
                                    {
                                        block: 'image',
                                        mods: {responsive: true},
                                        mix: {block: 'header', elem: 'logo'},
                                        alt: 'Pinguin',
                                        url: '../../img/logo.png'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'col',
                        mix: {block: 'header', elem: 'col', elemMods: {side: 'right'}},
                        elemMods: {
                            mw: 8
                        },
                        content: [
                            {
                                block: 'main-menu',
                                content: [
                                    {
                                        elem: 'list',
                                        content: [
                                            {name: 'Главная', link: '/', active: true},
                                            {name: 'Услуги и цены', link: '#', active: false},
                                            {name: 'Портфолио', link: '#', active: false},
                                            {name: 'О нас', link: '#', active: false},
                                            {name: 'Отзывы', link: '#', active: false},
                                            {name: 'Блог', link: '#', active: false},
                                            {name: 'Контакты', link: '#', active: false}
                                        ].map(function(item) {
                                            return {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: {
                                                            block: 'main-menu',
                                                            elem: 'link',
                                                            elemMods: {active: item.active}
                                                        },
                                                        title: item.name,
                                                        content: item.name,
                                                        url: item.link
                                                    }
                                                ]
                                            };
                                        })
                                    }
                                ] // main-menu-content
                            }, // main-menu
                            {
                                block: 'contacts',
                                mix: {block: 'header', elem: 'contacts'},
                                content: [
                                    {
                                        block: 'button',
                                        mix: {
                                            block: 'contacts',
                                            elem: 'element'
                                        },
                                        mods: {
                                            type: 'link',
                                            size: 'sm',
                                            theme: 'pinguin'
                                        },
                                        url: '#',
                                        content: [
                                            {
                                                elem: 'text',
                                                content: 'Оставить заявку'
                                            },
                                            {
                                                block: 'icon',
                                                mods: {
                                                    glyph: 'paper-plane-o'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        block: 'button',
                                        mix: {
                                            block: 'contacts',
                                            elem: 'element'
                                        },
                                        mods: {
                                            type: 'link',
                                            size: 'sm',
                                            theme: 'pinguin'
                                        },
                                        url: '#',
                                        content: [
                                            {
                                                elem: 'text',
                                                content: 'Заказать  звонок',
                                            },
                                            {
                                                block: 'icon',
                                                mods: {
                                                    type: 'volume-phone'
                                                }
                                            }
                                        ]
                                    }
                                    // {
                                    //     elem: 'element',
                                    //     mix: {block: 'link'},
                                    //     url: '#',
                                    //     title: 'Оставить заявку',
                                    //     content: [
                                    //         {
                                    //             block: 'icon',
                                    //             mix: {block: 'contacts', elem: 'icon'},
                                    //             mods: {
                                    //                 type: 'cloud'
                                    //             }
                                    //         },
                                    //         {
                                    //             elem: 'text',
                                    //             content: 'Оставить заявку'
                                    //         }
                                    //     ] // element-content
                                    // }, // element
                                    // {
                                    //     elem: 'element',
                                    //     mix: {block: 'link'},
                                    //     url: '#',
                                    //     title: 'Заказать обратный звонок',
                                    //     content: [
                                    //         {
                                    //             block: 'icon',
                                    //             mix: {block: 'contacts', elem: 'icon'},
                                    //             mods: {
                                    //                 type: 'phone'
                                    //             }
                                    //         },
                                    //         {
                                    //             elem: 'text',
                                    //             content: 'Заказать обратный звонок'
                                    //         }
                                    //     ] // element-content
                                    // } // element
                                ] // contacts-content
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);