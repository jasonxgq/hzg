# Hello按钮插件

一个简单的活字格单元格插件。

## 自动构建

每次 push 到 main 分支会自动编译，下载 Artifact 中的 `MyPlugin.zip` 即可安装。

## 本地开发

1. 复制 `lib/` 中的 DLL 到 `src/MyPlugin/bin/`
2. 用 Visual Studio 打开 `src/MyPlugin/MyPlugin.csproj`
3. 编译后取 `bin/MyPlugin.dll`
