import { ProLayoutProps } from '@ant-design/pro-components';

export const layout: ProLayoutProps = {
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  menu: {
    locale: true,
  },
  childrenRender: (children) => {
    return <>{children}</>;
  },
};

export const qiankun = {
  apps: [],
  routes: [],
};

