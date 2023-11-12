import { ControlBase } from '../../models/control-base';

export interface LabelControl extends Omit<ControlBase, 'required' | 'key'> {
  text?: string;
}
