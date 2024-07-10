import { useEffect, useState } from "react"
import { Calendar } from "../model/Calendar"
import "../styles/main.css"

const calendar = new Calendar()

export function Main () {

    const [currentDate, setCurrentDate] = useState({
        day: {},
        days: [],
        month: 0,
        year: 0,
        weekOrden: []
    })
    const [tableStructure, setTableStructure] = useState([])

    const nextMonth = () => {
        calendar.nextMonth()
        setCurrentDate(calendar.getDate())
        setTableStructure(calendar.getForTableStructure())
    }

    const prevMonth = () => {
        calendar.prevMonth()
        setCurrentDate(calendar.getDate())
        setTableStructure(calendar.getForTableStructure())
    }

    const resetDate = () => {
        calendar.resetDate()
        setCurrentDate(calendar.getDate())
        setTableStructure(calendar.getForTableStructure())
    }

    useEffect(() => {
        setCurrentDate(calendar.getDate())
        setTableStructure(calendar.getForTableStructure())
    }, [])

    return (
        <main id="main">
            <header>Calendario</header>
            <div className="body">
                <div className="buttonList">
                    <button onClick={prevMonth}>{"<"}</button>
                    <button onClick={resetDate}>reset</button>
                    <button onClick={nextMonth}>{">"}</button>                    
                </div>

                <table>
                    <thead>
                        {
                           currentDate.weekOrden.map(weekday => {
                            return (
                                <th key={weekday}>{weekday}</th>
                            )
                           })
                        }
                    </thead>
                    <tbody>
                        {
                            tableStructure.map(tableRow => {
                                return (
                                    <tr key={tableRow}>
                                        {
                                            tableRow.map(tableColumn => {
                                                return (
                                                    <td id={tableColumn.weekDayName.toLowerCase()} key={tableColumn.number}><p>{tableColumn.number}</p></td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}