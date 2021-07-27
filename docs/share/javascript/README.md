---
sidebar: auto
---

# JavaScript

## 树形操作

### 平铺树

```js
export function treeToList(tree) {
  var queen = []
  var out = []
  queen = queen.concat(tree)
  while (queen.length) {
    var first = queen.shift()
    if (first.children) {
      queen = queen.concat(first.children)
      delete first['children']
    }

    out.push(first)
  }
  return out
}
```

### 设置层级

```js
export const arrayTreeSetLevel = (array, levelName = 'level', childrenName = 'children') => {
  if (!Array.isArray(array)) return []
  const recursive = (array, level = 0) => {
    level++
    return array.map(v => {
      v[levelName] = level
      const child = v[childrenName]
      if (child && child.length) recursive(child, level)
      return v
    })
  }
  return recursive(array)
}
```

## 二进制流文件下载

### 业务场景

在业务开发过程中，经常会遇到文件下载的场景，通常有两种方式，一种是接口返回下载的地址，另一种是接口返回`二进制`文件流，目前我们业务当中，使用的是`文件流`的形式，前端通过`Blob`来实现`excel`文件的下载

### 技术实现

1. axios请求接口

**get方式：**

```js
export function exportExcel(params) {
  const url = '/export'  
  return axios.get(url, { params, responseType: "blob" })
}
```

**post方式：**

```js
export function exportExcel(params) {
  const url = '/export'  
  return axios.post(url, param, { responseType: "blob" })
}
```

::: tip 说明
1. `responseType: "blob"`的作用是：设置服务器返回的数据类型，将流文件转化为二进制数据的`Blob 对象`
2. 必须设置，否则下载的文件打不开
:::

2. 处理返回的**二进制文件流**，并下载

```js
// 接口请求
async caseListExport() {
    try {
        this.loading = true;
        let params = {}
        let result = await caseListExport(params);
        if (result) {
            this.loading = false;
        }
        this.downFile(result, '文件名');
    } catch (err) {
        this.loading = false;
    }
},
// 下载方法,可封装在一个工具函数中
downFile(result, name) {
    // 通过Blob构造函数，创建Blob对象
    const blob = new Blob([result], { type: "application/vnd.ms-excel,charset=UTF-8"});
    // 定义文件名+后缀
    let fileName = `${name}.xlsx`;

    if (window.navigator.msSaveOrOpenBlob) {
        // IE以及IE内核的浏览器
        navigator.msSaveBlob(blob, fileName);
    } else {
        // 创建a标签
        var link = document.createElement("a");
        // createObjectURL(blob)会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL
        // a标签的 href 赋值 url
        link.href = window.URL.createObjectURL(blob);
        // a标签的 download 属性指向 fileName
        link.download = fileName;
        // a标签自动触发click事件
        link.click();
        // 用来释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象
        window.URL.revokeObjectURL(link.href);
    }
},
```

### 遇到的坑

由于项目用到了`mockjs`，mockjs初始化的时候，拦截响应设置了`responseType: ''`,导致下载的文件无法打开，最简单的方法就是注释掉`mockjs`

## 根据图片url，下载图片

```js
function urlDownloadIamge(imgsrc, name) { //要下载图片地址和图片名
    let image = new Image();
    // 解决跨域 Canvas 污染问题
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = function() {
      let canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      let context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
      let a = document.createElement("a"); // 生成一个a元素
      let event = new MouseEvent("click"); // 创建一个单击事件
      a.download = name || "photo"; // 设置图片名称
      a.href = url; // 将生成的URL设置为a.href属性
      a.dispatchEvent(event); // 触发a的单击事件
    };
    image.src = imgsrc;
  }
  
```

## 获取某年某个月的最后一天

### 业务场景

- 父组件有一个日期选择器，只能选择到月，不可以选择具体的天
- 子组件接收父组件传入的日期，回显出本月的开始天和结束天

### 技术实现

```js
// 年
let year = new Date(this.date).getFullYear()
// 月
let month = new Date(this.date).getMonth() + 1

// 开始天
let startDay = new Date(year, month, 1).getDate()
// 结束天
let endDay = new Date(year, month, 0).getDate()
```

## 自动部署

### 业务场景

- 在公司没有Jenkins等部署工具的时候
- 需要我们自己每次手动去部署，打包，压缩，上传，解压等工作很繁琐
- 因此需要一个自动发布的来帮助我们解决这些繁琐的工作

### 准备工作

查阅资料，参考：[ssh2实现vue项目自动化打包发布](https://www.jianshu.com/p/d78e4898824f)这篇文章

1. linux服务器解压文件到指定的文件夹：

```bash
unzip update.zip -d update
```

2. 相关插件

- [ssh2](https://github.com/mscdex/ssh2)：连接客户端和服务端的工具
- [archier](https://github.com/archiverjs/node-archiver)：用于生成文档的流接口
- [chalk](https://github.com/chalk/chalk)：node终端样式库

### 技术实现

package.json 

```bash
scripts: {
    deploy: "node deploy/deploy.js"
}
```

参数配置：

```js
// config.js
var config = {
  host: "***", // 服务器ip
  username: "***", // 用户名
  password: "***", // 密码
  port: 22, // 端口号（默认22）
  remotePath: "/web" // 服务存放前端资源的目录
};
module.exports = config;
```

部署工作：
```js
// deploy.js
const fs = require("fs");
const archiver = require("archiver");
const chalk = require("chalk");
const Client = require("ssh2").Client;
const conn = new Client();
const config = require("./config");

const { host, username, password, port, remotePath } = config;

const fileName = "dist"; // 本地文以及服务服务器文件,可根据环境变量进行配置
const localFilePath = `./${fileName}.zip`; // 本地压缩后的文件

// 压缩文件
function compress() {
  const output = fs.createWriteStream(localFilePath); // 创建一个可写流 **.zip
  const archive = archiver("zip"); // 生成archiver对象，打包类型为zip
  archive.pipe(output); // 将存档数据管道化到文件
  archive.glob(`./${fileName}/**`); // 追加与匹配到的文件
  archive.finalize(); // 完成打包,“close”、“end”或“finish”可能在调用此方法后立即被激发
  output.on("close", () => {
    console.log(chalk.green("compress finished, waiting for upload..."));
    ready(); // 上传
  });
}

const cmdList = [
  `cd ${remotePath}\n`,
  `rm -rf ${fileName}.copy\n`,
  `mv ${fileName} ${fileName}.copy\n`,
  `unzip ${fileName}.zip\n`,
  `rm -rf ${fileName}.zip\n`,
  `exit\n`
];

/**
 * 上传文件
 * @param conn
 */
function uploadFile(conn) {
  const remoteFilePath = `${remotePath}/${fileName}.zip`; // 远程文件路径
  conn.sftp((err, sftp) => {
    if (err) throw err;
    sftp.fastPut(localFilePath, remoteFilePath, {}, (err, result) => {
      if (err) {
        console.log(chalk.red(err.message));
        throw err;
      }
      shell(conn);
    });
  });
}

/**
 * 上传完成后服务器需要执行的内容
 * 删除本地压缩文件
 * @param conn
 * @constructor
 */
function shell(conn) {
  conn.shell((err, stream) => {
    if (err) throw err;
    stream
      .on("close", function() {
        console.log("Stream :: close");
        conn.end();
        fs.unlinkSync(localFilePath);
      })
      .on("data", function(data) {
        console.log("OUTPUT: " + data);
      });
    stream.end(cmdList.join(""));
  });
}

function ready() {
  conn
    .on("ready", () => {
      console.log("Client :: ready");
      uploadFile(conn);
    })
    .connect({ host, username, password, port });
}

compress();

```

### 缺点

- 暴露了服务器的密码，有安全隐患
- 需要先本地打包，然后在执行`npm run deploy`，部署完成之后需要手动删除本地的包

## scrollIntoView

### 业务场景

- 页面底部有两个tab页面
- 进入页面中时，要求tab切换到某一个tab，并且tab页面自动吸顶

### 技术实现

```js
Element.scrollIntoView()
```

### 说明
[scrollIntoView()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)

- 让当前的元素滚动到浏览器窗口的可视区域内
- el.scrollIntoView()
- el.scrollIntoView(alignToTop)
    - true: 元素的顶端将和其所在滚动区的可视区域的顶端对齐
    - false: 元素的底端将和其所在滚动区的可视区域的底端对齐
- el.scrollIntoView(scrollIntoViewOptions)
    - behavior: 定义动画过渡效果， "auto"或 "smooth" 之一
    - block: 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
    - inline: 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"

## parseInt的正确使用

[parseInt(string, radix)](http://www.w3school.com.cn/jsref/jsref_parseInt.asp)

### 作用

解析一个字符串，并返回一个整数

### 参数解析

* string

    被解析的字符串
    
* radix

    1、要解析的数字的基数（理解为进制），该值介于 2 ~ 36 之间
    
    2、该参数可以不写，默认是10进制
    
    3、如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN
    
### 案例

```js
parseInt("10")=1 \* 10<sup>1</sup>+0 \* 10<sup>0</sup> = 10

parseInt("19",10)=1 \* 10<sup>1</sup>+9 \* 10<sup>0</sup> = 19


parseInt("11",2)=1 \* 2<sup>1</sup>+1 \* 2<sup>0</sup> = 3


parseInt("17",8)=1 \* 8<sup>1</sup>+7 \* 8<sup>0</sup> = 15


parseInt("1f",16)=1 \* 16<sup>1</sup>+15 \* 16<sup>0</sup> = 31

parseInt("0x1f")=1 \* 16<sup>1</sup>+15 \* 16<sup>0</sup> = 31

parseInt("010"); //未定：返回 10 或 8（2013 年以前的 JavaScript 实现结果是8）

parseInt('11.abc'); // 返回 11
parseInt('abc11'); // 返回 NaN
```
:::tip 说明
1. 从左至右解析字符串
2. 如果字符串中包含非数字，解析到非数字的位置即停止解析
:::

### parseFloat

[parseFloat(string)](http://www.w3school.com.cn/jsref/jsref_parseFloat.asp)

内置函数 parseFloat()，用以解析浮点数字符串，与parseInt()不同的地方是，parseFloat()只应用于解析十进制数字。
