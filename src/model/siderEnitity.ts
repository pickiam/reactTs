export interface siderEnitity {
    siderItem: menuItemLabelType[],
    activeMenuItem: string
}
type menuItemLabelType = {
    path: string,
    name: string
  }