import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors, userEntity, postConfEntity, siderEnitity, customerEntity, introductionEntity,recruitmentEntity } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';
import { userReducer } from './user';
import { postConfReducer } from './postConf';
import { siderReducer } from './sider';
import { customerReducer } from './customer';
import { introductionReducer } from './introduction'
import { recruitmentReducer } from './recruitment'

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
  user: userEntity;
  postConfs: {tableData:postConfEntity[], detailData: postConfEntity};
  sider: siderEnitity;
  customer: {tableData:customerEntity[], detailData: customerEntity};
  introduction: {tableData:introductionEntity[], detailData: introductionEntity};
  recruitment: {tableData: recruitmentEntity[], detailData: recruitmentEntity}
};

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  user: userReducer,
  memberErrors: memberErrorsReducer,
  postConfs: postConfReducer,
  sider: siderReducer,
  customer: customerReducer,
  introduction: introductionReducer,
  recruitment: recruitmentReducer
});
