
 const menuList = [
    {
        title:'Pty的主页',
        key : '/home'
    },
    {
        title:'JavaScript',
        key:'/test1',
        children:[
            {
                title:'ECMAscript',
                key:'/test1_1'
            },
            {
                title:'TypeScript',
                key:'/test1_2'
            }
        ]
    },
    {
        title:'CSS揭秘',
        key:'/test3',
        children:[
            {
                title:'CSS3',
                key:'css'
            },
            {
                title:'预处理器',
                key:'scss'
            }
        ]
    },
    {
        title:'HTML ',
        key:'/test4',
        children:[
            {
                title:'不同浏览器适配',
                key:'test4_1'
            },
            {
                title:'API',
                key:'test4_2'
            }
        ]
    },
    {
        title:'React',
        key:'/test5'
    },
    {
        title:'Vue',
        key:'/test6'
    }



]

export default menuList;