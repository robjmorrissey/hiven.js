import { Mention } from './Mention';
import { House } from '../Collections/House';

export interface APIBaseRoom {
  house_id: string;
  id: string;
  name: string;
  type?: number;
  position?: number;
  description?: string;
  last_message_id?: string;
  permission_overwrites?: any;
  recipients?: Mention[];
  typing?: boolean;
  emoji?: { type: number; data: string };
}

export interface BaseRoom {
  id: string;
  house?: House;
  name: string;
  type?: number;
  typing?: boolean;
  position?: number;
  description?: string;
  recipients?: Mention[];
  last_message_id?: string;
  permission_overwrites?: any;
  emoji?: { type: number; data: string };
}

export interface MessageRoom extends BaseRoom {
  last_message_id: string;
  permission_overwrites: any;
  recipients: Mention[];
  send?: (content: string) => void;
  typing: boolean;
  emoji?: { type: number; data: string };
}
