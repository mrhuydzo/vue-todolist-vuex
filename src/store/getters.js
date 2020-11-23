export default  {
    listTaskSearch: state => {
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
        console.log('getters ListTasksSearch')
        return newItems;
    }
}