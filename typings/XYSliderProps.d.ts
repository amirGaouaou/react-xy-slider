/**
 * This file was generated from XYSlider.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, WebImage } from "mendix";
import { Big } from "big.js";

export type AxisEnum = "x" | "y" | "xy";

export interface XYSliderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    axis: AxisEnum;
    disabled: boolean;
    customStyle?: DynamicValue<string>;
    bgImage?: DynamicValue<WebImage>;
    xchange: EditableValue<Big>;
    ychange: EditableValue<Big>;
    onValueChange?: ActionValue;
    onDragStart?: ActionValue;
    onDragEnd?: ActionValue;
    xvalue: number;
    xmax: number;
    xmin: number;
    xstep: number;
    yvalue: number;
    ymax: number;
    ymin: number;
    ystep: number;
}

export interface XYSliderPreviewProps {
    class: string;
    style: string;
    axis: AxisEnum;
    disabled: boolean;
    customStyle: string;
    bgImage: string;
    xchange: string;
    ychange: string;
    onValueChange: {} | null;
    onDragStart: {} | null;
    onDragEnd: {} | null;
    xvalue: number | null;
    xmax: number | null;
    xmin: number | null;
    xstep: number | null;
    yvalue: number | null;
    ymax: number | null;
    ymin: number | null;
    ystep: number | null;
}
