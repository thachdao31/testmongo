module.exports = {
    getTime: () =>{
        const date = new Date();
        return {
            hour : date.getHours(),
            minutes: date.getMinutes()
        }
    }, 
    getDateNow: () => {
        const date = new Date();
        return {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    }
}