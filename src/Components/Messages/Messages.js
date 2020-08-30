import React,{ forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css' 

const Messages= forwardRef(({message,username},ref) => {
    const isUser = username===message.username;
    console.log("[message]",message);

    return (
        <div ref={ref} className={`message__card ${isUser && 'message__user'}`}>
            <Card className={isUser?"mesage__userCard":"mesage__guestCard"}>
                <CardContent >
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                    >
                        {!isUser && `${message.username || "unknown user"}:`}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Messages
