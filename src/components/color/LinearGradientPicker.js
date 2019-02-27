import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {SketchPicker} from 'react-color';
import styled from 'styled-components'
import ColorButton from "./ColorButton";

const Wrapper = styled.div`
    display:grid;
    height:24px;
    width:100px;
    grid-template-columns: 50px 50px 50px;
`

const LinearGradientPicker = (props) => {
    const [colors, setColors] = useState(extractColors(props.color))
    const [rotation, setRotation] = useState(extractRotation(props.color))

    useEffect(() => {
        let n = `linear-gradient(${rotation}deg,${colors[0]},${colors[1]})`;
        console.log('effect ' + n);
        props.onChange(n)
    }, [colors, rotation]);

    function extractColors(color) {
        // let groups = color.match(/linear-gradient\((([a-z0-9]{1,3})deg)?,?([#a-fA-F0-9]{3,6}),?([#a-fA-F0-9]{3,6})\)/)
        // let groups = color.match(/(#[0-9a-fA-F]{3,6})/)
        let groups = /(#[0-9a-fA-F]{3,6})/g.exec(color)
        if (groups === null || groups.length < 2)
        // return null;
            if (colors != null)
                return colors
            else
                return ['#a00', '#e00']
        return groups.slice(-2);
    }

    function extractRotation(color) {
        let groups = color.match(/([0-9]{1,3})deg/)
        if (groups == null)
        // return null;
            if (rotation != null)
                return rotation
            else
                return 0
        return groups.slice(-1)
    }

    return (
        <Wrapper>
            <ColorButton color={colors[0]}>
                <SketchPicker color={colors[0]} onChangeComplete={c => setColors(prev => {
                    return {...prev, 0: c.hex}
                })}/>
            </ColorButton>
            <ColorButton color={colors[1]}>
                <SketchPicker color={colors[1]} onChangeComplete={c => setColors(prev => {
                    return {...prev, 1: c.hex}
                })}/>
            </ColorButton>
            <input
                value={rotation}
                onChange={(i) => setRotation(i.target.value)}
            />
        </Wrapper>
    );
}

LinearGradientPicker.propTypes = {};

export default LinearGradientPicker;