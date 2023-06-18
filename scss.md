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
2、@extend 通用样式，延伸给需要包含这个样式的特殊样式，额外样式的添加调用，写法.seriousError{@extend .error; border-width:3px;}
3、混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的class
    @mixin large-text{
        font: {
            family: Arial;
            size: 20px;
            weight: bold;
        }
    }
4、引用混合样式
@include 名字   
.page-title {
    @include large-text;
}
5、参数
用于给混合指令中的样式设定变量，并且赋值使用。引用指令时，按照参数的顺序，再将所赋的值对应写进括号
@mixin sexy-border($color,$width:1in){
    border: {
        color: $color;
        width: $width;
        style: dashed;
    }
}
p{@include sexy-border(blue,1in)}

参数变量
使用参数变量...声明（写在参数的最后方），用于不能确定混合指令需要使用多少个参数
@mixin box-shadow($shadow...){}

在引入混合样式的时候，可以先将一段代码导入混合指令中，然后输出混合样式，额外导入的部分，将出现在$content标志的地方
@mixin appli-to-ie6-only{
    * html{@content;}
}
@include apply-to-ie6-only{
    #logo {
        background-image: url(/logo.gif);
    }
}
编译为 *html #logo{background-image:url(/logo.gif);}

6、为了便于书写，@mixin 可以用=表示，而 @include可以用+表示
7、函数指令的使用
@function grid-width($n) {
    @return $n*4;
}
#sidebar {width: grid-width(5);}

控制指令
@if @each  @for @while 

8、输出格式
Sass默认的css输出格式很美观也能清晰反应文档结构。
Sass提供了4中输出格式，通过:style option选项设定，或者在命令行中使用--style 选项
A、:nested 默认输出，每行的缩进反应了其在嵌套规则内的层数
B、:expanded 更像时手写的样式
C、:compact 占用空间 比上面2个少，每条css规则只占一行，包含其下的所有属性。嵌套过的没有空行，不嵌套的选择器会输出空白作为分隔符
D、:compressed 删除所有无意义的空格、空白行、以及注释
```
