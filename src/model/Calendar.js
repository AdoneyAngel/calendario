
export class Calendar {
    constructor() {
        this.currentDate = new Date()
        this.weekDays = ["Jueves", "Viernes", "Sabado", "Domingo", "Lunes", "Martes", "Miércoles"]

        console.log("New calendar")
    }

    getDate() {
        const currentYear = this.currentDate.getFullYear()
        const currentMonth = this.currentDate.getMonth()+1

        let nDays = new Date(
            currentYear,
            currentMonth,
            0
        ).getDate()

        let days = []
        let currentDay

        for (let a = 1; a<=nDays; a++) {
            const currentDayFor = new Date(currentYear, currentMonth, a)

            const dayData = {
                number: a,
                weekDay: currentDayFor.getDay(),
                weekDayName: this.weekDays[currentDayFor.getDay()]
            }

            if (a === this.currentDate.getDate()) {
                currentDay = dayData
            }

            days.push(dayData)
        }

        let date = {
            day: currentDay,
            days,
            month: currentMonth,
            year: currentYear,
            weekOrden: this.getWeekPosition()
        }

        return date
    }

    getWeekPosition() {
        let weekPosition = []

        const firstDay = new Date(
            this.currentDate.getFullYear(), 
            this.currentDate.getMonth()+1,
            1)

        for (let index = firstDay.getDay(); index<=this.weekDays.length-1; index++) {
            weekPosition.push(this.weekDays[index])
        }

        for (let index = 0; index<firstDay.getDay(); index++) {
            weekPosition.push(this.weekDays[index])
        }
        return weekPosition
    }

    getForTableStructure() {
        let tableStructure = []

        //Se calcula el número de lineas de la tabla
        let nRows = this.getDate().days.length / 7

        nRows = nRows > Math.floor(nRows) ? Math.floor(nRows)+1 : Math.floor(nRows)

        //se agrega {nRow} filas, cada una con 7 dias

        let dayIndex = 1
        for (let RowIndex = 0; RowIndex<nRows; RowIndex++) {
            let tableRow = []

            for (let columnIndex = 0; columnIndex<7; columnIndex++) {
                const currentDayFor = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()+1, dayIndex)

                const dayData = {
                    number: dayIndex,
                    weekDay: currentDayFor.getDay(),
                    weekDayName: this.weekDays[currentDayFor.getDay()]
                }
                tableRow.push(dayData)
                dayIndex++
            }

            tableStructure.push(tableRow)
        }

        //Se recorta los dias de tableStructure hasta this.getDate().days.length

        tableStructure[nRows-1] = tableStructure[nRows-1].splice(0, (7-((7*nRows) - this.getDate().days.length)))

        return tableStructure

    }

    nextMonth() {
        let newMonth
        let newYear = this.currentDate.getFullYear()

        if (this.currentDate.getMonth() < 11) {
            newMonth = this.currentDate.getMonth()+1

        } else {
            newMonth = 0
            newYear = this.currentDate.getFullYear()+1
        }

        this.currentDate = new Date(newYear, newMonth, 1)
        console.log(this.currentDate)
    }

    prevMonth() {
        let newMonth
        let newYear = this.currentDate.getFullYear()

        if (this.currentDate.getMonth() > 0) {
            newMonth = this.currentDate.getMonth()-1

        } else {
            newMonth = 11
            newYear = this.currentDate.getFullYear()-1
        }

        this.currentDate = new Date(newYear, newMonth, 1)

        console.log(this.currentDate)
    }

    resetDate() {
        this.currentDate = new Date()
    }
}