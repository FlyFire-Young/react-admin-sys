# manage-system #
基于react v16.3.0 + antd + antv 的后台管理系统解决方案。
## 前言 ##
react + antd + antv组件库的后台管理系统。

## 功能 ##
- [x] 首页
- [x] UI
- [x] 表单
- [x] 表格
- [x] 国际化
- [x] 动画
- [x] 图表
- [x] 页面

## 目录结构介绍 ##

	|-- config                                                            // webpack配置文件
	|-- public                                                            // 公共目录
	|   |-- favicon.ico                                                   // ico
	|   |-- index.html                                                    // index.html
	|   |-- manifest.json                                                 // json信息
	|-- src                                                               // 源码目录
	|   |-- action                                                        // 状态
	|       |-- index.js                                                  // 请求接口
	|       |-- type.js                                                   // 请求类型
	|   |-- axios                                                         // axios
	|       |-- config.js                                                 // 跨域请求配置
	|       |-- type.js                                                   // 跨域请求类型
	|       |-- index.js                                                  // 跨域请求接口
	|   |-- components                                                    // 组件
	|       |-- animation                                                 // 动画
	|           |-- BasicAnimations.jsx                                   // 基本动画
	|           |-- ExampleAnimations.jsx          	                      // 动画实例
	|		|-- charts                   	                              // 图表
	|           |-- antvkeyword.js                                        // 图表json信息
	|           |-- relationship-with-weight.js                           // 图表json信息
	|           |-- stock-2.js                                            // 图表实例
	|           |-- ViserCharts.jsx          	                          // 图表实例
	|           |-- ViserChartsBasePieChart.jsx                           // 图表实例
	|           |-- ViserChartsBaseStock.jsx                              // 图表实例
	|           |-- ViserChartsBlockTree.jsx                              // 图表实例
	|           |-- ViserChartsBoxChart.jsx                               // 图表实例
	|           |-- ViserChartsDashboard.jsx                              // 图表实例
	|           |-- ViserChartsRelattions.jsx                             // 图表实例
	|           |-- ViserChartsStackingArea.jsx                           // 图表实例
	|           |-- ViserChartsWordCloud.jsx                              // 图表实例
	|           |-- world-population.js                                   // 图表实例
	|		|-- form                   	                                  // 表单
	|           |-- AssemblyBasicForm.jsx                                 // 表单实例
	|           |-- LayoutBasicForm.jsx                                   // 表单实例
	|           |-- LoginBasicForm.jsx                                    // 表单实例
	|           |-- PopupBasicForm.jsx                               	  // 表单实例
	|           |-- RealBasicForm.jsx                                     // 表单实例
	|           |-- RegistrationForm.jsx                                  // 表单实例
	|		|-- Internationalization                   	                  // 国际化
	|           |-- LocaleProviders.jsx                                   // 国际化实例
	|		|-- pages                   	                              // 页面
	|           |-- login.jsx                                             // 登录页
	|           |-- NotFound.jsx                                          // 404
	|		|-- tables                   	                              // 表格
	|           |-- BasicTable.jsx                                        // 表格实例
	|           |-- BasicTables.jsx                                       // 表格实例
	|           |-- ControllableCustomScreeningAndSortingTable.jsx        // 表格实例
	|           |-- ControllableScreeningAndSortingTable.jsx          	  // 表格实例
	|           |-- DeployableTable.jsx                                   // 表格实例
	|           |-- DynamicControlTable.jsx                               // 表格实例
	|           |-- EditorialLineTable.jsx                                // 表格实例
	|           |-- EditTable.jsx                                         // 表格实例
	|           |-- NestingTable.jsx                                      // 表格实例
	|           |-- SampleTables.jsx                                      // 表格实例
	|           |-- SelectAndCustomOperationTable.jsx                     // 表格实例
	|           |-- SelectAndOperationTable.jsx                           // 表格实例
	|           |-- SelectTable.jsx                                       // 表格实例
	|           |-- TreeTable.jsx                                         // 表格实例
	|		|-- ui                                                        // ui组件
	|           |-- AddTabType.jsx                                        // ui实例
	|           |-- Buttons.jsx                                           // ui实例
	|           |-- CalendarTypes.jsx                                     // ui实例
	|           |-- CarouselTypes.jsx          	                          // ui实例
	|           |-- DividerTypes.jsx                                      // ui实例
	|           |-- GlobalMsgBasicType.jsx                                // ui实例
	|           |-- GlobalMsgCustomButtonType.jsx                         // ui实例
	|           |-- GlobalMsgCustomIconType.jsx                           // ui实例
	|           |-- GlobalMsgCustomPositionType.jsx                       // ui实例
	|           |-- GlobalMsgCustomStyleType.jsx                          // ui实例
	|           |-- Icons.jsx                                             // ui实例
	|           |-- InputTypes.jsx                                        // ui实例
	|           |-- ListTypes.jsx                                         // ui实例
	|           |-- ModalAsynchronousTypes.jsx                            // ui实例
	|           |-- ModalConfirmTypes.jsx                                 // ui实例
	|           |-- ModalMsgTypes.jsx                                     // ui实例
	|           |-- ModalPositionTypes.jsx                                // ui实例
	|           |-- ModalTypes.jsx          	                          // ui实例
	|           |-- OverallSituationMsgBasicType.jsx                      // ui实例
	|           |-- OverallSituationMsgOtherType.jsx                      // ui实例
	|           |-- paginations.jsx                                       // ui实例
	|           |-- PopconfirmMsgBasicType.jsx                            // ui实例
	|           |-- PopconfirmMsgPositionType.jsx                         // ui实例
	|           |-- PositionsTabType.jsx                                  // ui实例
	|           |-- ProgressTypes.jsx                                     // ui实例
	|           |-- PromptBoxTypes.jsx                                    // ui实例
	|           |-- SpinTypes.jsx                                         // ui实例
	|           |-- StepsBar.jsx                                          // ui实例
	|           |-- TabTypes.jsx                                          // ui实例
	|           |-- TagTypes.jsx                                          // ui实例
	|           |-- UploadTypes.jsx                                       // ui实例
	|		|-- BreadcrumbCustom.jsx                   	                  // 面包屑
	|		|-- HeaderCustom.jsx                   	                      // 布局顶部
	|		|-- RealHome.jsx                   	                          // 首页
	|		|-- SiderCustom.jsx                   	                      // 布局左侧边栏
	|		|-- SiderMenu.js                   	                          // 布局左侧边栏
	|   |-- constants                                                     // 内容
	|       |-- menus.js                                                  // 布局左侧边栏json信息
	|   |-- reducer                                                       // redux
	|       |-- index.js                                                  // redux工具
	|   |-- routes                                                        // 路由
	|       |-- index.js                                                  // 路由详情
	|   |-- style                                                         // 样式
	|       |-- imgs                                                      // 图片
	|	        |-- 404.png                                               // 404图片
	|       |-- animate.css                                               // 动画样式
	|       |-- calendars.less                                            // 基本样式
	|       |-- carousels.less                                            // 基本样式
	|       |-- form.less                                                 // 基本样式
	|       |-- icons.less                                                // 基本样式
	|       |-- index.less                                                // 基本样式
	|       |-- inputTypes.less                                           // 基本样式
	|       |-- localeproviders.less                                      // 基本样式
	|       |-- login.less                                                // 基本样式
	|       |-- menu.less                                                 // 基本样式
	|       |-- tables.less                                               // 基本样式
	|   |-- App.css                                                       // 源文件
	|   |-- App.js                                                        // 程序入口文件，加载各种公共组件
	|   |-- App.test.js                                                   // 源文件
	|   |-- index.css                                                     // 源文件
	|   |-- index.js                                                      // 页面入口文件
	|   |-- logo.svg                                                      // 源文件
	|   |-- Page.js                                                       // 程序入口路由
	|   |-- registerServiceWorker.js                                      // 源文件
	|-- .eslintrc                                                         // ES6语法编译配置
	|-- .gitignore                                                        // 忽略的文件
	|-- package.json                                                      // 依赖
	|-- package-lock.json                                                 // 依赖
	|-- README.md                                                         // 说明


## 安装步骤 ##

	git clone git@github.com:FlyFire-Young/react-admin-sys.git      // 把模板下载到本地
	cd react-admin-sys    // 进入模板目录
	npm install           // 在安装依赖之前保证node及npm已经安装成功，之后安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:3005
	npm run start

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

