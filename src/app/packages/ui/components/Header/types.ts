import { JsxElement } from '$common';
import { BaseIcon } from '$icons';

export interface HeaderProps {
  goBackIcon: BaseIcon;
  canGoBack?: boolean;
  goBack?: () => void;
  rightComponent?: JsxElement;
  title?: string;
}
