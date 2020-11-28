export default  {
    listTaskSearchSort: state => {
        //Tìm kiếm - logic search
        const {strSearch} = state;
        //Cach 1
        // var newItems = [];
        // this.listTask.forEach(function (item,index) {
        //     let lowerName = item.taskName.toLowerCase();
        //     if(lowerName.includes(strSearch.toLowerCase())) {
        //         newItems.push(item);
        //     }
        //     console.log("item",item.taskName);
        // });

        //Cach 2
        var newItems = state.listTask.filter(item => {
            return item.taskName.toLowerCase().includes(strSearch.toLowerCase());
        });
        //console.log('getters ListTasksSearch');


        //SORT
        var listTask = [...newItems];
        listTask.sort(function (a,b) {
            var numberSort = state.orderDir === 'asc' ? -1 : 1;
            if (a[state.orderBy] < b[state.orderBy]) return numberSort  ;
            else if (a[state.orderBy] > b[state.orderBy]) return numberSort * (-1);
            return 0
        });

        return listTask

        // if (this.orderBy === 'name') {
        //     listTask.sort(this.compareName);
        // }else if (this.orderBy === 'level'){
        //     listTask.sort(this.compareLevel);
        // }


    }
}