# sass使用说明

## 写法
```
1、父选择器  &
2、属性嵌套    font{ size: 16px;family: 黑体}
3、占位符选择器   %foo   %类似于id和class
4、变量 $ 声明：$width:5em   使用 width:$width
    将局部变量变为全局变量，需要 !global声明    如：$width: 5em !global;
```

### 数据类型
```
数字
字符串
    使用#{}时，有引号字符串将被编译为无引号字符串，这样便于在mixin中引用选择器名
    例如：@mixin fn($selector) {
                body $selector:before{
                    color: red;
                }
          }
        @include fn(".header")
        等价于   body .header:before{color:red;}
布尔
颜色
数组  用空格或逗号分割
空值null
maps (key1:value1,key2:value2)
```
### 运算符
```
1、除法运算符
如果 / 不做除法 ，则使用#{}【插值语句】将其括起来
width: #{$font-size}/#{$line-height}
2、字符串运算符
    + 作为连接符
    "foo " + bar    结果是 "foo bar"
    seri- + 'self'  结果是 seri-self
    注：运算符与其他连接时，使用空格作为连接符 

```
### @import
```
1、允许将Sass和SCSS文件导入，导入多个文件使用逗号隔开
@import 'font.scss','style.scss'

```
