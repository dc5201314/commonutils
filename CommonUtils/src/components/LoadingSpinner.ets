@Component
export struct LoadingSpinner {
  @State message: string = '加载中...'
  @State si: number = 40
  @State color: Color = Color.Blue

  build() {
    Column({ space: 10 }) {
      Progress({ value: 0 })
        .width(this.size)
        .height(this.size)
        .color(this.color)

      if (this.message) {
        Text(this.message)
          .fontSize(14)
          .fontColor(Color.Gray)
      }
    }
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }
}
