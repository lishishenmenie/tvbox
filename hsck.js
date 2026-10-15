var rule = {
    title: 'Hsck',
    host: 'https://hsck3.u0u0.cc',
    homeUrl: '/',
    url: '/?type=fyclass&p=fypage',
    searchUrl: '/?search2=ndafeoafa&search=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36',
        'Referer': 'https://hsck3.u0u0.cc/'
    },
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.stui-vodlist__thumb;a&&title;img&&data-original;.pic-text&&Text;a&&href',
    一级: '.stui-vodlist__thumb;a&&title;img&&data-original;.pic-text&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": "#video_img&&alt",
        "desc": "body&&Text",
        "content": "body&&Text",
        "tabs": "",
        "lists": "#video_img&&src"
    },
    搜索: '.stui-vodlist__thumb;a&&title;img&&data-original;.pic-text&&Text;a&&href'
};
