/// <reference path="../Declarations/forguncy.d.ts" />
/// <reference path="../Declarations/forguncy.Plugin.d.ts" />

class MyPluginCellType extends Forguncy.Plugin.CellTypeBase {
    createContent() {
        const btn = $("<button style='border:none;border-radius:4px;cursor:pointer;'>" 
            + this.CellElement.CellType.ButtonText + "</button>");
        return btn[0];
    }

    onRender() {
        const cellType = this.CellElement.CellType;
        const btn = $(this.ObjectContext);
        
        btn.css({
            "background-color": cellType.BackgroundColor,
            "color": "white",
            "padding": "8px 16px",
            "font-size": "14px",
            "transition": "opacity 0.3s"
        });

        btn.on("click", () => {
            if (cellType.ClickCommand) {
                Forguncy.CommandHelper.executeCommand(cellType.ClickCommand, {});
            }
        });
    }

    updateData(value) {
        // 值变化时更新按钮文本
    }
}

Forguncy.Plugin.CellTypeHelper.registerCellType("MyPlugin.MyPluginCellType, MyPlugin", MyPluginCellType);
