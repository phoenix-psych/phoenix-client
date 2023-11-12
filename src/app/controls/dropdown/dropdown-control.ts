import { ControlBase } from '../../models/control-base';

export interface DropDownControl extends ControlBase {
  options?: { key: string; value: string }[];
}
