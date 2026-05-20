export type Info = {
    monthly_listeners_current: number,
    albums_count_estimate: number,
    tracks_count_estimate: number,
    top_tracks: string[],
    brief_info: string,
}
export type Graph = {
    unit: string,
    period: string,
    data_points: {
        month: string,
        value: number,
        event: string | null}[]
}
export type Artist = {
    id: number,
    image: string;
    name: string;
    founded: number;
    city: string;
    country: string;
    genres: string[];
    info: Info;
    graph_data: Graph;
}


export const Data: Artist[] = [
    {
        "id" : 1,
        "name": "Король и Шут",
        "image": "/KoroliShut.jfif",
        "founded": 1988,
        "country": "Россия",
        "city": "Санкт-Петербург",
        "genres": ["панк-рок", "хоррор-панк", "фолк-панк"],
        "info": {
        "monthly_listeners_current": 6765300,
            "albums_count_estimate": 17,
            "tracks_count_estimate": 200,
            "top_tracks": ["Кукла колдуна", "Лесник", "Дурак и молния", "Прыгну со скалы", "Маска"],
            "brief_info": "Культовая российская панк-группа с мрачными сказочными сюжетами. Распущена в 2013, но наследие активно: в 2026 вышел фильм 'Король и Шут. Навсегда', вызвавший всплеск интереса."
    },
        "graph_data": {
        "period": "2025-12 to 2026-05",
            "unit": "monthly_listeners",
            "data_points": [
            {"month": "2025-12", "value": 4200000, "event": "Анонс фильма"},
            {"month": "2026-01", "value": 5100000, "event": null},
            {"month": "2026-02", "value": 8900000, "event": "Премьера фильма 'Навсегда'"},
            {"month": "2026-03", "value": 7800000, "event": null},
            {"month": "2026-04", "value": 7100000, "event": null},
            {"month": "2026-05", "value": 6765300, "event": "Текущее значение"}
            ]
        }
    },
    {
        "id" : 2,
        "name": "Кино",
        "image": "/Kino.jpg",
        "founded": 1981,
        "country": "СССР / Россия",
        "city": "Ленинград",
        "genres": ["рок", "новая волна", "пост-панк"],
        "info": {
        "monthly_listeners_current": 5200000,
            "albums_count_estimate": 8,
            "tracks_count_estimate": 120,
            "top_tracks": ["Группа крови", "Звезда по имени Солнце", "Кукушка", "Пачка сигарет", "Восьмиклассница"],
            "brief_info": "Легендарная советская рок-группа Виктора Цоя. После 1990 года не возобновлялась, но песни остаются культурным феноменом. В 2026 запланирован концерт с оцифрованным вокалом Цоя."
    },
        "graph_data": {
        "period": "2025-12 to 2026-05",
            "unit": "estimated_monthly_listeners",
            "data_points": [
            {"month": "2025-12", "value": 3800000, "event": null},
            {"month": "2026-01", "value": 4100000, "event": null},
            {"month": "2026-02", "value": 4500000, "event": "Упоминания в СМИ"},
            {"month": "2026-03", "value": 4300000, "event": null},
            {"month": "2026-04", "value": 4700000, "event": "Анонс концерта в Лужниках"},
            {"month": "2026-05", "value": 5200000, "event": "Рост интереса к концерту"}
        ]
    }
    },
    {
        "id" : 3,
        "name": "Дайте Танк(!)",
        "image": "/DayteTank.jpg",
        "founded": 2007,
        "country": "Россия",
        "city": "Коломна",
        "genres": ["инди-рок", "гаражный панк", "лоу-фай"],
        "info": {
            "monthly_listeners_current": 2395287,
            "albums_count_estimate": 9,
            "tracks_count_estimate": 85,
            "top_tracks": ["Утро", "Люди", "Маленький", "Конец", "Впереди"],
            "brief_info": "Инди-рок-группа с ироничными текстами. В 2025 победили в номинации 'Главные по концертам' по версии Яндекс Музыки. В 2026 выпустили альбом 'Радио Пепел'."
        },
        "graph_data": {
            "period": "2025-12 to 2026-05",
            "unit": "monthly_listeners",
            "data_points": [
                {"month": "2025-12", "value": 1850000, "event": null},
                {"month": "2026-01", "value": 1920000, "event": null},
                {"month": "2026-02", "value": 2100000, "event": "Релиз сингла"},
                {"month": "2026-03", "value": 2250000, "event": null},
                {"month": "2026-04", "value": 2410000, "event": "Альбом 'Радио Пепел'"},
                {"month": "2026-05", "value": 2395287, "event": "Текущее значение"}
            ]
        }
    },
    {
        "id" : 4,
        "name": "Low Roar",
        "image": "/LowRoar.jpg",
        "founded": 2011,
        "country": "Исландия / США",
        "city": "Рейкьявик",
        "genres": ["пост-рок", "эмбиент", "электроника"],
        "info": {
        "monthly_listeners_current": 345000,
            "albums_count_estimate": 6,
            "tracks_count_estimate": 50,
            "top_tracks": ["Don't Be So Serious", "I'll Keep Coming", "Bones", "Friends Make Garbage", "Poznań"],
            "brief_info": "Проект Райана Каразия, известный благодаря саундтреку к Death Stranding. После смерти основателя в 2022 проект завершён, но музыка остаётся востребованной."
    },
        "graph_data": {
        "period": "2025-12 to 2026-05",
            "unit": "estimated_monthly_listeners",
            "data_points": [
            {"month": "2025-12", "value": 320000, "event": null},
            {"month": "2026-01", "value": 340000, "event": null},
            {"month": "2026-02", "value": 380000, "event": "Упоминания в играх"},
            {"month": "2026-03", "value": 360000, "event": null},
            {"month": "2026-04", "value": 350000, "event": null},
            {"month": "2026-05", "value": 345000, "event": "Стабильный интерес"}
        ]
    }
    },
    {
        "id" : 5,
        "name": "Tame Impala",
        "image": "/TameImpala.jfif",
        "founded": 2007,
        "country": "Австралия",
        "city": "Перт",
        "genres": ["психоделический рок", "синт-поп", "нео-психоделия"],
        "info": {
        "monthly_listeners_current": 5409870,
            "albums_count_estimate": 5,
            "tracks_count_estimate": 70,
            "top_tracks": ["The Less I Know The Better", "Borderline", "Let It Happen", "Dracula", "New Person, Same Old Mistakes"],
            "brief_info": "Сольный проект Кевина Паркера. В 2026 ожидается альбом 'Deadbeat' и сингл 'Dracula (JENNIE Remix)'."
    },
        "graph_data": {
        "period": "2025-12 to 2026-05",
            "unit": "estimated_monthly_listeners",
            "data_points": [
            {"month": "2025-12", "value": 4200000, "event": null},
            {"month": "2026-01", "value": 4350000, "event": null},
            {"month": "2026-02", "value": 4500000, "event": null},
            {"month": "2026-03", "value": 4800000, "event": "Анонс сингла"},
            {"month": "2026-04", "value": 5200000, "event": "Релиз Dracula Remix"},
            {"month": "2026-05", "value": 5409870, "event": "Рост перед альбомом"}
        ]
    }
    },
    {
        "id" : 6,
        "name": "Gorillaz",
        "image": "/Gorillaz.jpg",
        "founded": 1998,
        "country": "Великобритания",
        "city": "Лондон",
        "genres": ["альтернативный рок", "электроника", "хип-хоп"],
        "info": {
        "monthly_listeners_current": 2063286,
            "albums_count_estimate": 9,
            "tracks_count_estimate": 150,
            "top_tracks": ["Clint Eastwood", "Feel Good Inc.", "On Melancholy Hill", "Dirty Harry", "Humility"],
            "brief_info": "Виртуальная группа Деймона Албарна. Известна анимированными персонажами и жанровыми экспериментами. В 2026 анонсированы выступления на фестивалях."
    },
        "graph_data": {
        "period": "2025-12 to 2026-05",
            "unit": "monthly_listeners",
            "data_points": [
            {"month": "2025-12", "value": 1850000, "event": null},
            {"month": "2026-01", "value": 1920000, "event": null},
            {"month": "2026-02", "value": 2010000, "event": null},
            {"month": "2026-03", "value": 2150000, "event": "Анонс тура"},
            {"month": "2026-04", "value": 2280000, "event": "Park Live Almaty"},
            {"month": "2026-05", "value": 2063286, "event": "Текущее значение"}
        ]
    }
    }
]