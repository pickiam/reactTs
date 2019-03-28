import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
// import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// export class Sider extends React.Component {
//   handleClick = (e) => {
//     console.log('click ', e);
//   }

//   render() {
//     return (
//       <Menu
//         onClick={this.handleClick}
//         defaultSelectedKeys={['1']}
//         mode="inline"
//       >
//         <Menu.Item key="1">图片配置</Menu.Item>
//         <Menu.Item key="2">图片配置</Menu.Item>
//         <Menu.Item key="3">图片配置</Menu.Item>
//       </Menu>
//     )
//   }
// }
type menuItemLabelType = {
  path: string,
  name: string
}

interface Props {
  onClick: (item: any) => void;
  defaultSelectedKeys: string[];
  menuItemLabel: menuItemLabelType[];
  getMenuItem: () => void;
  ownProps: any;
}
export class Sider extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  private onClick(item: any) {
    this.props.onClick(item.key)
  }
  public componentWillReceiveProps (nextProps) {
    if (nextProps.menuItemLabel.length !== this.props.menuItemLabel.length) {
      this.props.onClick(nextProps.ownProps.location.pathname)
    }
  }
  public componentWillMount() {
    this.props.getMenuItem()
  }
  
  public render() {
    return (
      <Menu
        onClick={this.onClick}
        defaultSelectedKeys={this.props.defaultSelectedKeys}
      >
        {
          this.props.menuItemLabel.map((item, index) => 
          <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>
        )
        }
      </Menu>
    )
  }
}

