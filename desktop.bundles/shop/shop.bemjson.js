module.exports = {
    block: 'page',
    title: 'Интернет магазин',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'shop.min.css'}
    ],
    scripts: [{elem: 'js', url: 'shop.min.js'}],
    mods: {theme: 'pinguin'},
    content: [
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'shop-top'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'shop-top',
                            mix: [
                                {block: 'row', elem: 'col', elemMods: {mw: 12}},
                                {block: 'row'}
                            ],
                            content: [
                                {
                                    elem: 'col',
                                    mix: {block: 'row', elem: 'col', elemMods: {mw: 6}},
                                    elemMods: {side: 'left'},
                                    content: [
                                        {
                                            block: 'image',
                                            mods: {responsive: true},
                                            mix: {block: 'shop-top', elem: 'image'},
                                            alt: 'shop-top image',
                                            url: '../../img/shop-top__image.png'
                                        }
                                    ]
                                },
                                {
                                    elem: 'col',
                                    mix: {block: 'row', elem: 'col', elemMods: {mw: 6}},
                                    elemModes: {side: 'right'},
                                    content: [
                                        {
                                            elem: 'title',
                                            content: 'Интернет магазин —'
                                        },
                                        {
                                            elem: 'under-title',
                                            content: 'отличное решение для тех, кто готов продавать'
                                        },
                                        {
                                            elem: 'text',
                                            content: 'Люди любят совершать покупки онлайн. Это удобно и не отнимает много времени. С каждым днем количество пользователей, приобретающих товары в Интернете, только увеличивается. Возможно, вашей компании также стоит задуматься о создании собственного интернет-магазина либо модицифировать существующий. Аудитория пользователей практически безгранична, вы обязательно найдете своих клиентов на просторах сети.'
                                        },
                                        {
                                            block: 'button',
                                            mix: {
                                                block: 'shop-top',
                                                elem: 'button'
                                            },
                                            mods: {
                                                type: 'link',
                                                size: 'xl',
                                                theme: 'pinguin'
                                            },
                                            url: '#',
                                            text: 'Заказать'
                                        }
                                    ]
                                }
                            ]
                        } // shop-top
                    }
                }, // shop-top
                {
                    elem: 'line',
                    elemMods: {
                        color: 'white',
                        theme: 'shop-services'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'shop-services',
                            mix: [
                                {block: 'row', elem: 'col', elemMods: {mw: 12}},
                                {block: 'row'}
                            ],
                            content: [
                                {
                                    elem: 'col',
                                    mix: {block: 'row', elem: 'col', elemMods: {mw: 6}},
                                    elemMods: {side: 'left'},
                                    content: [
                                        {
                                            block: 'title',
                                            content: 'Что предлагаем',
                                            tag: 'h3'
                                        },
                                        {
                                            block: 'title',
                                            mods: {
                                                under: true
                                            },
                                            tag: 'h6',
                                            content: 'В базовую стоимость<br>интернет-магазина входит:'
                                        },
                                        {
                                            block: 'icon-list',
                                            mix: {block: 'shop-services', elem: 'icon-list'},
                                            content: [
                                                {text: '<b>Дизайн</b>. Современный, уникальный  и эффективный. Следим и воплощаем последние тенденции, внедряем новые технологии, ориентируемся на Вашего конечного потребителя.', icon: 'design'},
                                                {text: 'Удобный <b>каталог</b> продукции с возможностью выбора товаров и помещения их в виртуальную корзину, многофункциональное оформление заказа.', icon: 'catalog'},
                                                {text: '<b>Информация об</b> условиях работы <b>интернет-магазина</b>: способы оплаты и доставки, акции и скидки, предложения для оптовых заказчиков.', icon: 'certificate'},
                                                {text: 'Удобная и понятная <b>система управления</b>, при помощи которой вы сможете самостоятельно менять информацию на сайте, добавлять и удалять категории и позиции в каталоге, иметь доступ к подробной статистике по новым  пользователям и  заказам. Мобильное и нативное приложение для управления интернет-магазином.', icon: 'cms'},
                                                {text: '<b>Оптимизированный</b> для продвижения <b>код</b> делает Ваш магазин привлекательным для поисковых систем, минимизурует затраты на продвижение, максимизирует приток клиентов из поисковых систем.', icon: 'code'}
                                            ].map(function(element, ids) {
                                                var id = ids + 1;
                                                return {
                                                    elem: 'item',
                                                    mix: {block: 'row', mods: {mvam: true}},
                                                    content: [
                                                        {
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'icon',
                                                                mods: {
                                                                    type: element.icon
                                                                }
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            mix: {block: 'icon-list', elem: 'text'},
                                                            content: id + '. ' + element.text
                                                        }
                                                    ]
                                                };
                                            })
                                        }
                                    ]
                                },
                                {
                                    elem: 'col',
                                    mix: {block: 'row', elem: 'col', elemMods: {mw: 6}},
                                    elemModes: {side: 'right'},
                                    content: [
                                        {
                                            block: 'image',
                                            mods: {responsive: true},
                                            mix: {block: 'shop-services', elem: 'image'},
                                            alt: 'shop-services image',
                                            url: '../../img/shop-services.png'
                                        }
                                    ]
                                }
                            ]
                        } // shop-top
                    }
                }, // shop-services
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'shop-advantages'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: [
                            {
                                block: 'image',
                                mix: {block: 'content', elem: 'image', elemMods: {block: 'advantages'}},
                                url: "../../img/advantages.png"
                            },
                            {
                                block: 'shop-advantages',
                                mix: [
                                    {block: 'row', elem: 'col', elemMods: {mw: 12}},
                                    {block: 'row'}
                                ],
                                content: [
                                    {
                                        elem: 'col',
                                        mix: {block: 'row', elem: 'col', elemMods: {mw: 6}},
                                        elemModes: {side: 'right'},
                                        content: [
                                            {
                                                block: 'image',
                                                mods: {responsive: true},
                                                mix: {block: 'shop-advantages', elem: 'image'},
                                                alt: 'shop-advantages image',
                                                url: '../../img/shop-advantages.png'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'col',
                                        mix: {block: 'row', elem: 'col', elemMods: {mw: 6}},
                                        elemMods: {side: 'right'},
                                        content: [
                                            {
                                                block: 'title',
                                                content: 'Почему стоит<br>заказать у нас',
                                                tag: 'h3'
                                            },
                                            {
                                                block: 'icon-list',
                                                mix: {block: 'shop-advantages', elem: 'icon-list'},
                                                content: [
                                                    {text: 'Работаем по понятным правилам: Заключаем <b>договор</b>, составляем <b>техническое задание</b>, контролируем <b>качество</b>.', icon: 'tz'},
                                                    {text: '<b>7 лет опыта</b> создания интернет-магазинов , ряд своих собственных наработок и эффективных решений.', icon: 'experience'},
                                                    {text: 'Личный <b>менеджер</b> под Ваш проект, обучение работе с административной частью и поддержка после сдачи сайта.', icon: 'manager'},
                                                    {text: 'Внедряем <b>адаптивный дизайн</b> во все свои проекты. сайт отлично отображается на любых устройствах.', icon: 'adapt-design'},
                                                    {text: '<b>Хостинг</b> на год в подарок.', icon: 'hosting'},
                                                ].map(function(element, ids) {
                                                    var id = ids + 1;
                                                    return {
                                                        elem: 'item',
                                                        mix: {block: 'row', mods: {mvam: true}},
                                                        content: [
                                                            {
                                                                elem: 'icon',
                                                                content: {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        type: element.icon
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: {block: 'icon-list', elem: 'text'},
                                                                content: id + '. ' + element.text
                                                            }
                                                        ]
                                                    };
                                                })
                                            }
                                        ]
                                    }
                                ]
                            } // shop-top
                        ]
                    }
                } // shop-advantages
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
