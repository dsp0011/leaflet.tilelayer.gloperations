import REGL from 'regl';
import { DrawCommon, DrawTile, DrawTileHsSimple, DrawTileHsPregen, DrawTileInterpolateColor, DrawTileInterpolateColorOnly, DrawTileInterpolateValue, CalcTileMultiAnalyze1, DrawTileMultiAnalyze1, CalcTileMultiAnalyze2, DrawTileMultiAnalyze2, CalcTileMultiAnalyze3, DrawTileMultiAnalyze3, CalcTileMultiAnalyze4, DrawTileMultiAnalyze4, CalcTileMultiAnalyze5, DrawTileMultiAnalyze5, CalcTileMultiAnalyze6, DrawTileMultiAnalyze6, CalcTileDiff, DrawTileDiff, ConvolutionSmooth } from './types';
export declare function getCommonDrawConfiguration(tileSize: number, nodataValue: number): REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>;
export declare function createDrawTileCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTile.Props>;
export declare function createDrawTileHsSimpleCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileHsSimple.Props>;
export declare function createDrawTileHsPregenCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileHsPregen.Props>;
export declare function createDrawTileInterpolateValueCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileInterpolateValue.Props>;
export declare function createDrawTileMultiAnalyze1Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileMultiAnalyze1.Props>;
export declare function createCalcTileMultiAnalyze1Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileMultiAnalyze1.Props>;
export declare function createDrawTileMultiAnalyze2Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileMultiAnalyze2.Props>;
export declare function createCalcTileMultiAnalyze2Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileMultiAnalyze2.Props>;
export declare function createDrawTileMultiAnalyze3Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileMultiAnalyze3.Props>;
export declare function createCalcTileMultiAnalyze3Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileMultiAnalyze3.Props>;
export declare function createDrawTileMultiAnalyze4Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileMultiAnalyze4.Props>;
export declare function createCalcTileMultiAnalyze4Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileMultiAnalyze4.Props>;
export declare function createDrawTileMultiAnalyze5Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileMultiAnalyze5.Props>;
export declare function createCalcTileMultiAnalyze5Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileMultiAnalyze5.Props>;
export declare function createDrawTileMultiAnalyze6Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileMultiAnalyze6.Props>;
export declare function createCalcTileMultiAnalyze6Command(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileMultiAnalyze6.Props>;
export declare function createCalcTileDiffCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, CalcTileDiff.Props>;
export declare function createDrawTileDiffCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileDiff.Props>;
export declare function createDrawTileInterpolateColorCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileInterpolateColor.Props>;
export declare function createDrawTileInterpolateColorOnlyCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, DrawTileInterpolateColorOnly.Props>;
export declare function createConvolutionSmoothCommand(regl: REGL.Regl, commonConfig: REGL.DrawConfig<DrawCommon.Uniforms, DrawCommon.Attributes, DrawCommon.Props>): REGL.DrawCommand<REGL.DefaultContext, ConvolutionSmooth.Props>;
