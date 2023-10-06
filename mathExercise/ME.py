from nicegui import ui

ui.label('Hello NiceGUI!')

# 加上reload后，关闭窗口，会自动结束进程
ui.run(native=True,reload=False)


