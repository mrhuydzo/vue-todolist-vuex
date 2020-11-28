export default {
    CHANGE_TASKS (state,newTasks){
        state.listTask = newTasks;
        //console.log('Mutation: CHANGE_TASKS',newTasks);
    },
    TOGGLE_FORM(state){
        if (state.isShowForm) {
            state.taskSelected = null;
        }
        state.isShowForm = !state.isShowForm;
        //console.log('Mutation: TOGGLE_FORM',state);
    },
    HANDLE_SEARCH (state,strSearch) {
        //console.log('Mutation: HANDLE_SEARCH',strSearch);
        state.strSearch = strSearch
    },
    HANDLE_SORT (state,{orderBy,orderDir}) {
        //console.log('Mutation: HANDLE_SORT',orderBy,orderDir);
        state.orderBy = orderBy
        state.orderDir = orderDir
    },
    ADD_NEW_TASK(state,task){
        state.listTask.push(task);
    },
    HANDLE_EDIT(state,taskEdit){
        state.isShowForm = true;
        state.taskSelected = taskEdit
    }
}