import { showActionSheet } from 'remax/wechat';

export default (options: any) => {
  return showActionSheet({
    itemList: options.items,
  });
};
