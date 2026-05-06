using GrapeCity.Forguncy.Plugin;
using System;
using System.Windows;

namespace MyPlugin
{
    // [Icon("pack://application:,,,/MyPlugin;component/Resources/Icon.png")]
    public class MyPluginCellType : CellType
    {
        [DisplayName("按钮文本")]
        public string ButtonText { get; set; } = "点击我";

        [DisplayName("背景颜色")]
        public string BackgroundColor { get; set; } = "#1890ff";

        [DisplayName("单击命令")]
        [CustomCommandObject]
        public object ClickCommand { get; set; }

        public override string ToString()
        {
            return "Hello按钮";
        }
    }
}
