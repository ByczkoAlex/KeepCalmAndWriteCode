import React from 'react';
import s from './message.module.css'

function Message() {
    return (
        <div id="reviews">
            <div className={s.comment}>
                <div className={s.comment_bubble}>
                    <p className={s.author}>Lourens S.</p>
                    <p className={s.comment_text}>Porro officia cumque sint deleniti nemo facere rem vitae odit inventore
                        cum odio, iste quia doloribus autem aperiam nulla ea neque reprehenderit. Libero doloribus,
                        possimus officiis sapiente necessitatibus commodi consectetur?</p>
                    <p className={s.time}>12:43</p>
                </div>
            </div>
        </div>
    );
}

export default Message
