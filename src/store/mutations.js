export default {
    CHANGE_TASKS (state,newTasks){
        state.listTask = newTasks;
        //console.log('Mutation: CHANGE_TASKS',newTasks);
    },
    TOGGLE_FORM(state){
        // if (this.isShowForm) {
        //     this.taskSelected = null;
        // }

        //console.log('Mutation: TOGGLE_FORM',state);
        state.isShowForm = !state.isShowForm;
    },
    HANDLE_SEARCH (state,strSearch) {
        console.log('Mutation: HANDLE_SEARCH',strSearch);
        state.strSearch = strSearch
    }
}