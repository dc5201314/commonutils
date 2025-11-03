@Component
export struct ToastMessage {
  @State message: string = ''
  @State type: 'success' | 'error' | 'warning' | 'info' = 'info'
  @State duration: number = 3000
  @State isVisible: boolean = false

  private getBackgroundColor(): Color {
    switch (this.type) {
      case 'success': return Color.Green;
      case 'error': return Color.Red;
      case 'warning': return Color.Orange;
      default: return Color.Blue;
    }
  }

  build() {
    if (this.isVisible) {
      Stack({ alignContent: Alignment.Top }) {
        Text(this.message)
          .fontSize(16)
          .fontColor(Color.White)
          .backgroundColor(this.getBackgroundColor())
          .borderRadius(8)
          .padding({ left: 16, right: 16, top: 8, bottom: 8 })
          .margin({ top: 50 })
      }
      .width('100%')
      .height('100%')
      .onAppear(() => {
        setTimeout(() => {
          this.isVisible = false;
        }, this.duration);
      })
    }
  }

  show(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
    this.message = message;
    this.type = type;
    this.isVisible = true;
  }
}
