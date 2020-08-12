import React, {useState} from 'react';





export function MyHobby (){
    let [hobby, setHobby]= useState( [
        {id: 1, n: "работа :", p: "hight"},
        {id: 2, n: "аниме :", p: "low"},
        {id: 3, n: "игры :", p: "middle"},
        {id: 4, n: "реакт :", p: "hight"},
        {id: 5, n: "хтмл :", p: "low"}
    ]);

    function DeleteHobby (id:number) {
        let filteredHobby = hobby.filter(t => t.id !== id);
        setHobby(filteredHobby)
    }


    type filterValueType = "hight" | "middle" | "low" | "all"


    let [filter, setFilter] = useState<filterValueType>("all");

    let tasksForTodoList = hobby;

    if (filter === "hight") {
        tasksForTodoList = hobby.filter(t => t.p === "hight");
    }
    if (filter === "middle") {
        tasksForTodoList = hobby.filter(t => t.p === "middle");
    }
    if (filter === "low") {
        tasksForTodoList = hobby.filter(t => t.p === "low");
    }

    function changeFilter(value:filterValueType) {
        setFilter(value);
    }


    let myHobby = tasksForTodoList.map((t) => {
        return (
            <li key={t.id}>
                <span>{t.n}</span>
                <span>{t.p}</span>
                <button onClick={() => {DeleteHobby(t.id)}}>X</button>
            </li>
        )
    });
    return (
        <div>
            <div>
                <h3>
                    My Hobbies
                </h3>
            </div>
            <ul>
                {myHobby}
            </ul>
            <div>
                <div>
                    <button onClick={()=>{changeFilter("hight")}}>hight</button>
                    <button onClick={()=>{changeFilter("middle")}}>middle</button>
                    <button onClick={()=>{changeFilter("low")}}>low</button>
                    <button onClick={()=>{changeFilter("all")}}>all</button>
                </div>
            </div>
        </div>
    )
}

