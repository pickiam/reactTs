import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors, userEntity, postConfEntity, siderEnitity } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';
import { userReducer } from './user';
import { postConfReducer } from './postConf';
import { siderReducer } from './sider';

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
  user: userEntity;
  postConfs: {tableData:postConfEntity[], detailData: postConfEntity};
  sider: siderEnitity
};

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  user: userReducer,
  memberErrors: memberErrorsReducer,
  postConfs: postConfReducer,
  sider: siderReducer
});
