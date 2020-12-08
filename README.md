This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## (1) 需要预装的软件

    外网机需要找运维安装的软件：
    1. yarn
    2. webp for windows， 加入到系统环境变量 [点击下载](https://developers.google.com/speed/webp/download)
    3. Node.js的最新稳定版即可


## (2) 相关命令
    1. 安装依赖： yarn install
    2. 打开开发环境： yarn start 
    3. 编译打包: yarn build 
    4. 关闭开发环境：不停的ctrl + C


## (3) 相关技术

| 技术 | 插件 | 备注 |
| :----- | :-----| :---- |
| js | Hook | 组件全部使用Hook |
| css | styled-components |  |
| 数据请求 | React-Query(主) + axios(辅) | Hook组件使用react-query + axios,  类组件直接使用axios |
| 图片处理 | svg + webp方案 | 小图使用svg， 大图使用webp方案 |
| 状态管理 | mobx |  |
| UI库 | ant design |  |
| 主题方案 | styled-components的主题方案 |  |
| WebSocket方案 | react-use-websocket | 此插件不支持class components |


## (4) 注意事项

1. 所有的js文件，全部以.js结尾，不要写.jsx ！

2. 之后与设计同事沟通，小图和icon全部找设计要svg，中大型图设计给jpg和png就可以了。

3. 判断相等，不要再使用 == ,  全部改成 ===。 不然控制台会出现大量警告。
   如果遇到这种情况： a = "1", b = 1; 只要 a == b, 就执行某种操作。
   那么久改成： +a === b, 就执行某种操作。 (a前面的+， 会将字符串"1" 变成 数字1)

4. 不要直接修改mobx store里面的值，要用action去修改，否则会有警告！

5. react-query cache-key 命名方式 按照API路由来命名 ex: '/api/user/getUserInfo' => 'user/getUserInfo'

## (5) 页面与代码

| 序号 | 页面 | 路由路径 | 代码路径 |
| :----- | :-----| :---- | :---- |
| 1 | 登录 | /login | /src/pages/login |
| 2 | 注册 | /register | /src/pages/register |
| 3 | 找回密码 | /forget | /src/pages/forgetPassword |
| 4 | 404 | /page404 | /src/pages/404 |
| 5 | 首页 | /home | /src/pages/home |
| 6 | 体育 | /sports | /src/pages/sports |
| 7 | 真人 | /live | /src/pages/live |
| 8 | 电竞 | /esports | /src/pages/esports |
| 9 | 捕鱼 | /fish | /src/pages/fish |
| 10 | 电子 | /slots | /src/pages/slots |
| 11 | 游戏 | /game | /src/pages/game |
| 12 | 彩票 | /lottery | /src/pages/lottery |
| 13 | 个人中心 | /userCenter | /src/pages/userCenter |
| 14 | 存款 | /userCenter/deposit | /src/pages/userCenter/deposit |
| 15 | 转账 | /userCenter/transfer | /src/pages/userCenter/transfer |
| 16 | 取款 | /userCenter/withdrawal | /src/pages/userCenter/withdrawal |
| 17 | 个人资料 | /userCenter/info | /src/pages/userCenter/info |
| 18 | 交易记录 | /userCenter/transactions | /src/pages/userCenter/transactions |
| 19 | 游戏记录 | /userCenter/gameRecords | /src/pages/userCenter/gameRecords |
| 20 | 消息记录 | /userCenter/messages | /src/pages/userCenter/messages |


## (6) 常见问题

### `如何配置多语言？`

在public/locales文件夹里面，配置语言包
之后语言包有更新，不用重新走发布流程，直接运维替换locales文件夹中的语言包即可。

### `如何全局做主题配置？ `

见theme文件夹

```js
// 在styled直接使用
styled.div`
    color: ${props => props.theme.fontColor}
`
// 在组件render上使用
// 方法1
import useTheme from '@/hooks/useTheme'
const theme = useTheme()
// 方法2
const theme = require('@/hooks/useTheme')()
///// ----Usage---- /////
function(props) {
    return (
        <div style={{color: theme.fontColor}}></div>
    )
}
```

### `如何对各个分页面做主题配置？`

见theme文件夹

### `如何在styled-components中写mixin? `

用styled-components的css关键字,  demo见components/header/index.js

```
const HeaderHeightMixn = css`
    height: ${props => props.theme.header.height}px;
`;

const Wrapper = styled.div`
    width: 100%;
    ${HeaderHeightMixn};
`;
```

### `可以在styled-components中写嵌套样式吗？`

可以，见/pages/home/index.js

```
const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .speakers {
        width: 200px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        .speaker-rotate {
            transform: rotate(-45deg);
        }
    }
`;
```

### `如何用styled-components改变antd组件的样式？`

demo见src/pages/login/index.js

```
import { Button, notification } from 'antd';

const Button2 =  styled(Button)`
    &.ant-btn-primary {
        color: black;
        background-color: green;
    }
`;
```

### `如何处理图片？`

1. 小图和Icon之类的全部由svg-monitor处理成svg， 之后使用就可以这样：
    ```
    <Icon name="transfer" size="40" />
    ```
    从此不再使用精灵图。
    
2. 大图让设计给png或者jpg， 由webp monitor处理成webp格式的，自动对浏览器做兼容，webp格式的图片不失真，size比tinypng和tinyjpg压缩后的更小


### `Hook的useState返回的setState是异步的，而且不能设置callback方法，那有什么解决方法吗？`

1. 另外写一个useEffect。
    ```
    const [counter, setCounter] = useState(0);

    const doSomething = () => {
    setCounter(123);
    }

    useEffect(() => {
    console.log('Do something after counter has changed', counter);
    }, [counter]);

    ```

2. 使用第三方库： use-state-with-callback
