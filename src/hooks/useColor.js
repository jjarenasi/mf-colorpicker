import React, { useEffect, useState } from 'react'
import { getColorList, getLastColor } from '../helpers/GetColors'

export const useColors = () => {
    const [color, setColor] = useState(getLastColor())
    const [colorList, setColorList] = useState(getColorList())

    const handlerChangeColor = (e) => {
        setColor(e.target.value)
    }

    const HandleSubmitSaveColor = (e) =>{
        e.preventDefault()
        const copyColors = [color, ...colorList]
        setColorList(copyColors)
    }
    useEffect(()=>{
        localStorage.setItem("colors", JSON.stringify(colorList))
    },
    [colorList])
    return {color, colorList, handlerChangeColor, HandleSubmitSaveColor}
}