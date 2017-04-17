module.exports =([
    {
        block: 'footer',
        content: [
            {
                block: 'row',
                mix: {block: 'footer', elem: 'content'},
                content: [
                    {
                        elem: 'col',
                        mix: {block: 'footer', elem: 'col', elemMods: {side: 'left'}},
                        elemMods: {
                            mw: 5
                        },
                        content: [
                            {
                                block: 'footer-menu',
                                content: [
                                    {
                                        elem: 'list',
                                        mix: {block: 'clearfix'},
                                        content: [
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'Главная',
                                                        content: 'Главная'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'О нас',
                                                        content: 'О нас'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'Блог',
                                                        content: 'Блог'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'Услуги и цены',
                                                        content: 'Услуги и цены'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'Отзывы',
                                                        content: 'Отзывы'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'Контакты',
                                                        content: 'Контакты'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: [
                                                            {block: 'text'},
                                                            {block: 'footer-menu', elem: 'link'}
                                                        ],
                                                        url: '#',
                                                        title: 'Портфолио',
                                                        content: 'Портфолио'
                                                    }
                                                ]
                                            }
                                        ]
                                    } // footer-menu__list
                                ]
                            }, // footer-menu
                            {
                                block: 'social',
                                mix: {block: 'footer', elem: 'social'},
                                content: [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'link',
                                                url: '#',
                                                title: 'youtube',
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'youtube',
                                                            social: true
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'link',
                                                url: '#',
                                                title: 'facebook',
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'facebook',
                                                            social: true
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'link',
                                                url: '#',
                                                title: 'twitter',
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'twitter',
                                                            social: true
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'link',
                                                url: '#',
                                                title: 'gp',
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'gp',
                                                            social: true
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'link',
                                                url: '#',
                                                title: 'rss',
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'rss',
                                                            social: true
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'link',
                                                url: '#',
                                                title: 'dribbble',
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: {
                                                            type: 'dribbble',
                                                            social: true
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            } // social
                        ]
                    },
                    {
                        elem: 'col',
                        mix: {block: 'footer', elem: 'col', elemMods: {side: 'right'}},
                        elemMods: {
                            mw: 5
                        },
                        content: [
                            {
                                block: 'text',
                                mix: {block: 'footer', elem: 'text'},
                                content: 'Pinguin-Studio.com.ua - Создание сайтов в Днепропетровске. Разработка интернет-магазинов<br>Pinguin Studio. Cоздание сайтов в Днепропетровске, разработка интернет-магазинов в Днепропетровске. Разработка сайтов, раскрутка, продвижение.<br>© Pinguin Studio, 2016'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);