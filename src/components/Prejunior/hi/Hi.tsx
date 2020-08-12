import React, {ChangeEvent, useState} from 'react';
import s from './Hi.module.css'
import {v1} from "uuid";
import {Container, Grid, Paper} from "@material-ui/core";
import {Checkbox} from "../../../common/checkbox";
import {ButtonNya} from "../../../common/buttonNya";
import {InputNya} from "../../../common/inputNya";

export function Hello() {

    let [title, setTitle] = useState<string>("");
    let [people, setPeople] = useState([] as Array<{ name: string, id: string }>);

    const sayHello = () => {
        if (title.trim() !== "") {
            alert('Hi ' + title);
        }
        setTitle("");
        let newArr = [...people, {name: title, id: v1()}];
        setPeople(newArr)
    };

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onKeyPressSayHello = (e: React.KeyboardEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    debugger
        sayHello()
    };


    return (
        <div className={s.wrapper}>
            <Container fixed>
                <Grid>
                    <div>
                        <Grid container xs={3}>
                            <Paper>
                                <div><InputNya
                                    onTitleChange={onTitleChange}
                                    onKeyPressSayHello={onKeyPressSayHello}
                                /></div>
                            </Paper>
                        </Grid>

                        <Grid container xs={3}>
                            <Paper>
                                <div><ButtonNya
                                    onKeyPressSayHello={onKeyPressSayHello}
                                /></div>
                            </Paper>
                        </Grid>

                        <Grid container xs={3}>
                            <Paper>
                                <div><span></span></div>
                                <div><Checkbox/></div>
                            </Paper>
                        </Grid>
                    </div>

                    <Grid container xs={3}>
                        <Paper>
                            <div>
                                {
                                    people.map(el => <div>{el.name}</div>)
                                }
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


