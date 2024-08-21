import { Box } from "@mui/material";
import React, { useEffect } from "react";


type AspectRatioProps = {
    children: React.ReactNode
    ratio: number
}


const AspectRatio = (props: AspectRatioProps) => {
    const { children, ratio } = props
    // const [calculatedRatio, setCa]


    // useEffect(()=>{


    // },[ratio])




    return (

        <Box
            component={"div"}
            sx={{
                position:"relative",
                background:"yellow",
                paddingBottom: `${1/ratio*100}%`
            }}
        >
            <Box
                component={"div"}
                sx={{
                    position:"absolute",
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    background:"red",
                }}
            >
                {children}
            </Box>
        </Box>
    )
}


export { AspectRatio }