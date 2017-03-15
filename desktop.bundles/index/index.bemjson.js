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
                                                {
                                                    elem: 'item',
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
                                                            url: '/'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
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
                                            url: '#',
                                            title: 'Оставить заявку',
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
                                                    content: 'Оставить заявку'
                                                }
                                            ] // element-content
                                        }, // element
                                        {
                                            elem: 'element',
                                            mix: {block: 'link'},
                                            url: '#',
                                            title: 'Заказать обратный звонок',
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
            ]
        },
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
                                                                        type: 'dote'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        type: 'dote'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        type: 'dote'
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
                                                                type: 'dote'
                                                            }
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote'
                                                            }
                                                        },
                                                        {
                                                            block: 'icon',
                                                            mods: {
                                                                type: 'dote'
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
                }
            ] // content-content
        },
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
    ]
};
