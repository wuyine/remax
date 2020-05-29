import * as React from 'react';
import { BaseProps } from '../../types/component';
import { createHostComponent } from '@remax/shared';

export interface TextareaProps extends BaseProps {
  name?: string;
  value: any;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
  maxlength?: number;
  autoFocus?: boolean;
  focus?: boolean;
  /** 是否自动增高，设置auto-height时，style.height不生效 */
  autoHeight?: boolean;
  fixed?: boolean;
  /** 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing?: number;
  /** 指定focus时的光标位置 */
  cursor?: number;
  /** 是否显示键盘上方带有”完成“按钮那一栏 */
  showConfirmBar?: boolean;
  /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
  selectionStart?: number;
  /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用 */
  selectionEnd?: number;
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition?: boolean;
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard?: boolean;
  /** 是否去掉 iOS 下的默认内边距 2.10.0 */
  disableDefaultPadding?: boolean;

  onInput?: (...params: any) => void;
  onFocus?: (...params: any) => void;
  onBlur?: (...params: any) => void;
  onConfirm?: (event: any) => any;
  onKeyboardHeightChange?: (event: any) => any;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */
export const Textarea = createHostComponent<TextareaProps>('textarea');

Textarea.defaultProps = {
  placeholderClassName: 'textarea-placeholder',
  disabled: false,
  maxlength: 140,
  autoFocus: false,
  focus: false,
  autoHeight: false,
  fixed: false,
  cursorSpacing: 0,
  cursor: -1,
  showConfirmBar: true,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  holdKeyboard: false,
  disableDefaultPadding: false,
};
