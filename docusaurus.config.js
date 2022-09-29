// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
 title: '简疏志', //博客名字
 tagline: '常精进，勿懈怠', //博客标语
 url: 'https://wechat.weijiash.cn', //改成自己的域名
 baseUrl: '/',
 //...
 favicon: 'img/favicon.ico', 
 organizationName: 'anattaguo', // 更改为自己的名字或者 github 的用户名.
 projectName: 'myblog', // 改成这个项目的名字，可以写 github 上的仓库名字

 presets: [
   [
     'classic',
     /** @type {import('@docusaurus/preset-classic').Options} */
     ({
       // highlight-next-line  
       docs: false, //如果不想保留 docs 的功能就设置为 false; 如果想保留文档的功能就删除这一行
       
       blog: {
         routeBasePath: '/', // 将博客设置为网站的根页面
         blogTitle: '简疏志',
       },
       //...
     }),
   ],
 ],
 themeConfig:
  ({

    navbar: {
      title: '余欢', // 导航条左上角的名字
      logo: {
        alt: '图标',
        src: 'img/favicon.ico', // 导航条左上角的 logo
      },
      items: [
        {to: '/', label: '博客', position: 'left'}, 
   

      ],
    },


  })

};

module.exports = config;
