import { useState, FC, createElement } from "react";

import { XYSliderContainerProps } from "../typings/XYSliderProps";
import Slider from "react-input-slider";
import { Big } from "big.js";

import "./ui/XYSlider.css";

interface OnChangeProps {
    x: number;
    y: number;
}

interface SliderStyle {
    track?: Record<string, string>;
    active?: Record<string, string>;
    thumb?: Record<string, string>;
    disabled?: Record<string, string>;
}

const XYSlider: FC<XYSliderContainerProps> = ({
    name,
    style,
    axis,
    customStyle,
    onValueChange,
    onDragEnd,
    onDragStart,
    bgImage,
    xchange,
    xvalue,
    xmax,
    xmin,
    xstep,
    ychange,
    yvalue,
    ymax,
    ymin,
    ystep,
    ...props
}) => {
    const [state, setState] = useState({ x: xvalue, y: yvalue });

    const jsonCustomStyle: SliderStyle = customStyle && customStyle.value && JSON.parse(customStyle.value);

    const resultStyle = {
        track: {
            ...(bgImage && bgImage.value
                ? {
                      backgroundImage: `url("${bgImage.value.uri}")`,
                      backgroundSize: "cover"
                  }
                : {
                      backgroundImage: "blue"
                  }),
            ...jsonCustomStyle.track
        },
        active: {
            ...(bgImage && bgImage.value
                ? {
                      backgroundImage: `url("${bgImage.value.uri}")`,
                      backgroundSize: "cover"
                  }
                : {
                      backgroundImage: "blue"
                  }),
            ...jsonCustomStyle.active
        },
        thumb: {
            width: 20,
            height: 20,
            ...jsonCustomStyle.thumb
        },
        disabled: {
            opacity: 0.5,
            ...jsonCustomStyle.disabled
        }
    };

    const onChangeValue = (change: OnChangeProps): void => {
        const x = change.x;
        const y = change.y;
        xchange.setValue(new Big(x));
        ychange.setValue(new Big(y));
        setState(change);
    };
    return (
        <div className={props.class}>
            <Slider
                axis={axis}
                styles={resultStyle}
                x={state.x}
                y={state.y}
                xmax={xmax}
                xmin={xmin}
                xstep={xstep}
                ymax={ymax}
                ymin={ymin}
                ystep={ystep}
                onChange={onChangeValue}
                onDragStart={() => {
                    onDragStart?.execute();
                }}
                onDragEnd={() => {
                    onDragEnd?.execute();
                }}
            >
                {bgImage?.value}
            </Slider>
        </div>
    );
};

export default XYSlider;
