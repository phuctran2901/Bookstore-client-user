import * as types from '../../constants/actionsType';

var initialState = [];

export const comment = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COMMENT:
            return [...action.comments];
        case types.ADD_CMT_POST:
            state.unshift({ _id: { ...action.cmt, reply: [], createdAt: Date.now(), _id: action.id } });
            return [...state];
        case types.REPLY_COMMENT:
            const cmt = state.filter(t => t._id._id === action.id);
            cmt[0]._id.reply.unshift({ ...action.cmt, _id: Math.random().toString(36) })
            return [...state];
        case types.DELETE_CMT:
            state = state.filter(cmt => cmt._id._id !== action.idCmt);
            return [...state];
        default: return [...state];
    }
}
