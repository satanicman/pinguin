module.exports = {
    block: 'page',
    title: 'Главная страница',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: '../../css/reset.css'},
        {elem: 'css', url: '../../css/normalize.css'},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    mods: {theme: 'pinguin'},
    content: [
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'slider'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'slider',
                            mix: {block: 'row', elem: 'col', elemMods: {mw: 12}},
                            content: [
                                {
                                    block: 'slide',
                                    content: [
                                        {
                                            block: 'image',
                                            mods: {responsive: true},
                                            mix: {block: 'slide', elem: 'image'},
                                            alt: 'Slider 1',
                                            url: '../../common.blocks/slide/slide__1.png'
                                        },
                                        {
                                            block: 'slide-text',
                                            mix: {block: 'slide', elem: 'description'},
                                            content: [
                                                {
                                                    block: 'title',
                                                    tag: 'h1',
                                                    mix: {
                                                        block: 'slide',
                                                        elem: 'title'
                                                    },
                                                    content: 'Создаем сайты с индивидуальным премиум-дизайном'
                                                },
                                                {
                                                    block: 'text',
                                                    mix: {
                                                        block: 'slide',
                                                        elem: 'text'
                                                    },
                                                    content: 'Эффективные и удобные, которые работают на любых устройствах'
                                                },
                                                {
                                                    block: 'button',
                                                    mix: {
                                                        block: 'slide',
                                                        elem: 'button'
                                                    },
                                                    mods: {
                                                        type: 'link',
                                                        size: 'xl',
                                                        theme: 'pinguin'
                                                    },
                                                    url: '#',
                                                    text: 'Узнать почему студия Пингвин вам подходит'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        } // slider
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        color: 'white',
                        theme: 'numbers'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'numbers',
                            mix: {block: 'row', elem: 'col', elemMods: {mw: 12}},
                            content: [
                                {
                                    block: "title",
                                    tag: 'h3',
                                    content: "Цифры и Факты"
                                },
                                {
                                    block: "title",
                                    mods: {
                                        under: true
                                    },
                                    tag: 'h3',
                                    content: "Цифры и Факты"
                                },
                                {
                                    block: 'lamp',
                                    content: [
                                        {
                                            elem: 'image'
                                        },
                                        {
                                            elem: 'light'
                                        }
                                    ]
                                },
                                {
                                    block: 'numbers-list',
                                    mix: [
                                        {block: 'numbers', elem: 'list'},
                                        {block: 'row'}
                                    ],
                                    content: [
                                        {
                                            title: '<span class="number__num">7</span><br/>лет на рынке',
                                            text: '- Работаем по договору;<br/>- Наличный/безналичный расчет;<br/>- Уникальный дизайн;<br/>- Личный менеджер проекта для каждого клиента;<br/>- В любом проекте работаем по техническому заданию, при необходимости составляем его самостоятельно.'
                                        },
                                        {
                                            title: '<span class="number__num">134</span><br/>выполненых проекта',
                                            text: '- Программируем на современных системах управления контентом и фреймворках.<br/>- Сайты разрабатываем как с нуля “под ключ”, так и модернизируем уже существующие.'
                                        },
                                        {
                                            title: 'В топ <span class="number__num">10</span><br/>лучших веб-студий Днипра',
                                            text: '- Используем ряд своих собственных разработок, предлагаем различные решения;<br/>- Обеспечиваем полный цикл работ, от разработки дизайна <br/>до рекламы, продвижения и аудита'
                                        }
                                    ].map(function (item) {
                                        return {
                                            elem: 'item',
                                            mix: {block: 'row', elem: 'col', elemMods: {mw: 4}},
                                            content: {
                                                block: 'number',
                                                content: [
                                                    {
                                                        elem: 'title',
                                                        content: item.title
                                                    },
                                                    {
                                                        elem: 'description',
                                                        content: item.text
                                                    }
                                                ]
                                            }
                                        }
                                    })
                                }
                            ]
                        } // numbers
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'capabilities'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'capabilities',
                            mix: {block: 'row', elem: 'col', elemMods: {mw: 12}},
                            content: [
                                {
                                    block: 'image',
                                    mix: {block: 'content', elem: 'image', elemMods: {block: 'capabilities'}},
                                    url: "../../img/capabilities.png"
                                },
                                {
                                    block: 'title',
                                    tag: 'h3',
                                    content: "Возможности"
                                },
                                {
                                    block: 'title',
                                    mods: {
                                        under: true
                                    },
                                    tag: 'h3',
                                    content: "Профессионально разрабатываем под ключ:"
                                },
                                {
                                    block: 'capabilities-list',
                                    mix: [
                                        {block: 'row'},
                                        {block: 'capabilities', elem: 'list'}
                                    ],
                                    content: [
                                        {title: "Интернет-магазины", image: "../../common.blocks/opportunity/1.png", description: "Лучшее решение для продажи широкого ассортимента товаров. Именно интернет-магазины превращают разовых покупателей в постоянных, а намерение найти какую-то мелочь - в полную корзину покупок"},
                                        {title: "Корпоративные сайты", image: "../../common.blocks/opportunity/2.png", description: "Корпоративный сайт - лицо Вашего бизнеса. Работает как продающий, когда для принятия решения клиенту нужно понять с какой компанией он имеет дело."},
                                        {title: "Информационные сайты", image: "../../common.blocks/opportunity/3.png", description: "Информационный сайт содержит самые  общие данные о владельце сайта (организации или индивидуального предпринимателя): вид деятельности, историю, прайс-лист, контактные данные, реквизиты, схему проездаи так далее."},
                                        {title: "Индивидуальные проекты", image: "../../common.blocks/opportunity/4.png", description: "Под индвидуальной разработкой понимается проект, который отличается от стандратных сайтов, это может быть портал или система управления предприятием, а возможно Вы просто хотите написанную индивидуально под Вас систему управления сайтом."}
                                    ].map(function (item) {
                                        return {
                                            elem: 'item',
                                            mix: [
                                                {block: 'row', elem: 'col', elemMods: {m: true}}
                                            ],
                                            content: {
                                                block: 'opportunity',
                                                content: [
                                                    {
                                                        elem: 'title',
                                                        content: item.title
                                                    },
                                                    {
                                                        elem: 'image',
                                                        content: {
                                                            block: 'image',
                                                            mods: {responsive: true},
                                                            url: item.image,
                                                            title: item.title
                                                        }
                                                    },
                                                    {
                                                        elem: 'description',
                                                        content: item.description
                                                    },
                                                    {
                                                        elem: 'button',
                                                        content: {
                                                            block: 'button',
                                                            mix: {
                                                                block: 'opportunity',
                                                                elem: 'button'
                                                            },
                                                            mods: {
                                                                type: 'link',
                                                                size: 's',
                                                                theme: 'pinguin',
                                                                round: true
                                                            },
                                                            url: '#',
                                                            content: [
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        type: 'dote',
                                                                        size: 's'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        type: 'dote',
                                                                        size: 's'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        type: 'dote',
                                                                        size: 's'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        };
                                    })
                                }
                            ]
                        } // capabilities
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        color: 'white',
                        theme: 'works'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'works',
                            mix: {block: 'row', elem: 'col', elemMods: {mw: 12}},
                            content: [
                                {
                                    block: 'image',
                                    mix: {block: 'content', elem: 'image', elemMods: {block: 'works'}},
                                    url: "../../img/works.png"
                                },
                                {
                                    block: 'title',
                                    tag: 'h3',
                                    content: 'Как мы работаем'
                                },
                                {
                                    block: 'title',
                                    tag: 'h3',
                                    mods: {
                                        under: true
                                    },
                                    content: 'Процесс разработки и сопровождения  сайта:'
                                },
                                {
                                    block: 'works-list',
                                    mix: [
                                        {block: 'works', elem: 'list'}
                                    ],
                                    content: [
                                        {title: '/Знакомимся', description: '- Изучаем и анализируем требования к проекту; - Оцениваем стоимость и сроки проекта; - Формируем договор и техническое задание.', icon: 'meet'},
                                        {title: '/Переходим к действиям', description: '- Разрабатываем прототип; - Последовательно прорисовываем макеты дизайна на основе утвержденных прототипов.', icon: 'actions'},
                                        {title: '/Программируем', description: '- Верстаем утвержденные макеты; - Программируем требуемый функционал сайта; - Производим проверку работоспособности, согласно технического задания.', icon: 'programming'},
                                        {title: '/Продвигаем и поддерживаем', description: '- Обучаем работе с административной частью; - Отправляем сайт на индексацию, устанавливаем счетчики посещаемости; - Разрабатываем рекламную кампанию; - Продвигаем сайт в поисковых системах.', icon: 'support'}
                                    ].map(function(item, ids) {
                                        var id = ids + 1;
                                        return {
                                            elem: 'item',
                                            mix: [
                                                {block: 'row', elem: 'col', elemMods: {mw: 4}}
                                            ],
                                            content: {
                                                block: 'work',
                                                mods: {
                                                    step: id
                                                },
                                                content: [
                                                    {
                                                        elem: 'title',
                                                        content: item.title
                                                    },
                                                    {
                                                        elem: 'description',
                                                        content: item.description
                                                    },
                                                    {
                                                        elem: 'icon',
                                                        content: {
                                                            block: 'icon',
                                                            mods: {
                                                                type: item.icon
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        };
                                    })
                                }
                            ]
                        } // works
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'portfolio'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'portfolio',
                            mix: { block: 'row', elem: 'col', elemMods: { mw: 12 }},
                            content: [
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            block: 'title',
                                            content: 'Портфолио'
                                        },
                                        {
                                            block: 'title',
                                            mods: {
                                                under: true
                                            },
                                            content: 'Работы, которыми гордимся:'
                                        },
                                        {
                                            block: 'portfolio-slider',
                                            content: [
                                                {
                                                    block: 'portfolio-slide',
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            mods: {responsive: true},
                                                            alt: 'Portfolio slide 1',
                                                            url: '../../common.blocks/portfolio-slide/portfolio-slide.png'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: [
                                                                {
                                                                    elem: 'text',
                                                                    content: 'Промо-сайт велосипедной подвески'
                                                                },
                                                                {
                                                                    elem: 'name',
                                                                    content: '"GARK"'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'nav',
                                                    elemMods: {
                                                        side: 'right'
                                                    },
                                                    content: {
                                                        block: 'button',
                                                        mods: {
                                                            type: 'button',
                                                            size: 'm',
                                                            theme: 'pinguin',
                                                            round: true
                                                        },
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'icon',
                                                                mods: {
                                                                    type: 'portfolio-next'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'nav',
                                                    elemMods: {
                                                        side: 'left'
                                                    },
                                                    content: {
                                                        block: 'button',
                                                        mods: {
                                                            type: 'button',
                                                            size: 'm',
                                                            theme: 'pinguin',
                                                            round: true
                                                        },
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'icon',
                                                                mods: {
                                                                    type: 'portfolio-prev'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }, // slider
                                        {
                                            elem: 'more',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    content: "Смотреть все"
                                                },
                                                {
                                                    block: 'button',
                                                    mods: {
                                                        type: 'link',
                                                        size: 's',
                                                        theme: 'pinguin',
                                                        round: true
                                                    },
                                                    url: '#',
                                                    content: [
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 's'
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        } // portfolio
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        color: 'white',
                        theme: 'reviews'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'reviews',
                            mix: { block: 'row', elem: 'col', elemMods: { mw: 12 }},
                            content: [
                                {
                                    block: 'image',
                                    mix: {block: 'content', elem: 'image', elemMods: {block: 'reviews'}},
                                    url: "../../img/reviews.png"
                                },
                                {
                                    block: 'title',
                                    tag: 'h3',
                                    content: 'Клиенты и отзывы'
                                },
                                {
                                    block: 'title',
                                    mods: {
                                        under: true
                                    },
                                    tag: 'h6',
                                    content: 'Коротко о позитивном опыте работы с нами:'
                                },
                                {
                                    block: 'reviews-slider',
                                    mix: {
                                        block: 'reviews',
                                        elem: 'slider'
                                    },
                                    content: [
                                        {
                                            elem: 'slide',
                                            mix: { block: 'row' },
                                            content: [
                                                {
                                                    block: 'review',
                                                    mix: {
                                                        block: 'row',
                                                        elem: 'col',
                                                        elemMods: {mw: 5}
                                                    },
                                                    content: [
                                                        {
                                                            elem: 'avatar',
                                                            content:{
                                                                block: 'image',
                                                                mix: {block: 'review', elem: 'avatar'},
                                                                alt: 'Евгения Коптеева',
                                                                url: '../../common.blocks/review/__avatar/review__avatar.png'
                                                            }
                                                        },
                                                        {
                                                            elem: 'name',
                                                            content: 'Евгения Коптеева'
                                                        },
                                                        {
                                                            elem: 'position',
                                                            content: 'Руководитель Салона проката игрушек и детских товаров "ПРОКАТИК"'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Благодарю весь коллектив студии за слаженную и профессиональную работу. Много раз обращалась и всегда все вопросы поддержки сайта решались результативно, и в кратчайшие сроки.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'image',
                                                    mix: {
                                                        block: 'row',
                                                        elem: 'col',
                                                        elemMods: {mw: 7}
                                                    },
                                                    content: {
                                                        block: 'image',
                                                        mods: {
                                                            responsive: true
                                                        },
                                                        alt: 'review',
                                                        url: '../../common.blocks/reviews-slider/__image/reviews-slider__image.png'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'nav',
                                            elemMods: {side: 'left'},
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    type: 'reviews-prev'
                                                }
                                            }
                                        },
                                        {
                                            elem: 'nav',
                                            elemMods: {side: 'right'},
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    type: 'reviews-next'
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'clients',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: 'Уже сработались'
                                        },
                                        {
                                            elem: 'slider',
                                            content: [
                                                {
                                                    elem: 'slide',
                                                    mix: {block: 'row'},
                                                    content: [
                                                        {active: true, url: '../../common.blocks/clients/__client/clients__client_1.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_2.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_3.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_4.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_5.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_6.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_7.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_8.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_9.png'},
                                                        {active: false, url: '../../common.blocks/clients/__client/clients__client_10.png'}
                                                    ].map(function(item, id) {
                                                        var ids = id + 1;
                                                        return {
                                                            elem: 'client',
                                                            mix: {block: 'row', elem: 'col', elemMods: {m: true}},
                                                            elemMods: {
                                                                hovered: true
                                                            },
                                                            content: {
                                                                block: 'image',
                                                                mix: {block: 'clients', elem: 'image'},
                                                                mods: {
                                                                    responsive: true
                                                                },
                                                                title: 'Slide ' + ids,
                                                                url: item.url
                                                            }
                                                        }
                                                    }),
                                                },
                                                {
                                                    elem: 'dotes',
                                                    content: [
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 'm'
                                                            },
                                                            cls: 'active'
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 'm'
                                                            },
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 'm'
                                                            },
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote',
                                                                size: 'm'
                                                            },
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        } // reviews
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        theme: 'team'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'team',
                            mix: { block: 'row', elem: 'col', elemMods: { mw: 12 }},
                            content: [
                                {
                                    block: 'title',
                                    tag: 'h3',
                                    content: 'Наша Команда:'
                                },
                                {
                                    block: 'title',
                                    mods: {
                                        under: true
                                    },
                                    tag: 'h6',
                                    content: 'В среднем в разработке Вашего проекта<br>будет задействовано от трех профильных специалистов'
                                },
                                {
                                    block: 'team-list',
                                    mix: [
                                        {block: 'team', elem: 'list'},
                                        {block: 'row'}
                                    ],
                                    content: [
                                        {name: 'Александр Ткаченко', position: 'Директор'},
                                        {name: 'Барна Богдан', position: 'Менеджер проектов'},
                                        {name: 'Павел Тополь', position: 'Программист'},
                                        {name: 'Вася Пупкин', position: 'ПРограммист'},
                                        {name: 'АНдрей Бялонович', position: 'ПРограммист'},
                                        {name: 'Светлана Синега', position: 'КОПИРАЙТер'},
                                        {name: 'Давид сывый', position: 'Веб-дизайнер'},
                                        {name: 'Николай Скоропадский', position: 'Сео-специалист'}
                                    ].map(function(item, id) {
                                        var ids = id + 1;
                                        return {
                                            elem: 'item',
                                            mix: {block: 'row', elem: 'col', elemMods: {mw: 3}},
                                            content: {
                                                block: 'member',
                                                content: [
                                                    {
                                                        elem: 'avatar',
                                                        content: {
                                                            block: 'image',
                                                            mix: {block: 'member', elem: 'image'},
                                                            mods: {
                                                                responsive: true
                                                            },
                                                            title: item.name,
                                                            url: '../../common.blocks/member/__image/' + ids + '.png'
                                                        }
                                                    },
                                                    {
                                                        elem: 'name',
                                                        content: item.name
                                                    },
                                                    {
                                                        elem: 'position',
                                                        content: item.position
                                                    }
                                                ]
                                            }
                                        }
                                    })
                                }
                            ]
                        } // team
                    }
                },
                {
                    elem: 'line',
                    elemMods: {
                        color: 'white',
                        theme: 'feedback'
                    },
                    content: {
                        block: 'row',
                        mix: {block: 'content', elem: 'line-in'},
                        content: {
                            block: 'feedback',
                            mix: { block: 'row', elem: 'col', elemMods: { mw: 12 }},
                            content: [
                                {
                                    block: 'title',
                                    tag: 'h3',
                                    content: 'Переходим к действиям'
                                },
                                {
                                    block: 'title',
                                    mods: {
                                        under: true
                                    },
                                    tag: 'h6',
                                    content: 'Если мы успели заинтересовать вас,<br>давайте начинать работать.<br>Связаться с нами можно любым удобным<br>способом:'
                                },
                                {
                                    block: 'feedback-list',
                                    mix: [
                                        {block: 'feedback', elem: 'list'},
                                        {block: 'row'}
                                    ],
                                    content: [
                                        {
                                            elem: 'item',
                                            mix: {block: 'row', elem: 'col', elemMods: {mw: 4}},
                                            content: [
                                                {
                                                    elem: 'image',
                                                    content: {
                                                        block: 'image',
                                                        mods: {
                                                            responsive: true
                                                        },
                                                        title: 'phone',
                                                        url: '../../common.blocks/feedback-list/__image/feedback-list__image_phone.png'
                                                    }
                                                },
                                                {
                                                    elem: 'information',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            content: 'Позвонить нам'
                                                        },
                                                        {
                                                            elem: 'phones',
                                                            content: '(056) 786-17-17<br>(096) 480-66-06<br>(099) 652-13-48'
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: [
                                                                {
                                                                    elem: 'first-word',
                                                                    content: 'Skype:'
                                                                },
                                                                '&nbsp;akvadon'
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mix: {block: 'row', elem: 'col', elemMods: {mw: 4}},
                                            content: [
                                                {
                                                    elem: 'image',
                                                    content: {
                                                        block: 'image',
                                                        mods: {
                                                            responsive: true
                                                        },
                                                        title: 'feather',
                                                        url: '../../common.blocks/feedback-list/__image/feedback-list__image_feather.png'
                                                    }
                                                },
                                                {
                                                    elem: 'information',
                                                    elemMods: {center: true},
                                                    content: {
                                                        block: 'button',
                                                        mix: {
                                                            block: 'feedback-list',
                                                            elem: 'button'
                                                        },
                                                        mods: {
                                                            size: 'm',
                                                            type: 'link',
                                                            theme: 'pinguin'
                                                        },
                                                        type: 'link',
                                                        text: 'оформить заявку'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mix: {block: 'row', elem: 'col', elemMods: {mw: 4}},
                                            content: [
                                                {
                                                    elem: 'image',
                                                    content: {
                                                        block: 'image',
                                                        mods: {
                                                            responsive: true
                                                        },
                                                        title: 'nodepad',
                                                        url: '../../common.blocks/feedback-list/__image/feedback-list__image_nodepad.png'
                                                    }
                                                },
                                                {
                                                    elem: 'information',
                                                    elemMods: {center: true},
                                                    content: {
                                                        block: 'button',
                                                        mix: {
                                                            block: 'feedback-list',
                                                            elem: 'button'
                                                        },
                                                        mods: {
                                                            size: 'm',
                                                            type: 'link',
                                                            theme: 'pinguin'
                                                        },
                                                        type: 'link',
                                                        text: 'Заполнить бриф'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        } // feedback
                    }
                }
            ] // content-content
        },
        require('../footer/footer.bemjson.js')
    ]
};
