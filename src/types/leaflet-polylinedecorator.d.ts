import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Symbol {
    function arrowHead(options: any): any;
    function dash(options: any): any;
    function marker(options: any): any;
  }

  function polylineDecorator(
    polyline: L.Polyline | L.LatLngExpression[],
    options?: PolylineDecoratorOptions
  ): L.PolylineDecorator;

  interface PolylineDecoratorOptions {
    patterns: PatternOptions[];
  }

  interface PatternOptions {
    offset?: string | number;
    repeat?: string | number;
    endOffset?: string | number;
    symbol: any;
  }

  class PolylineDecorator extends L.Layer {
    constructor(polyline: L.Polyline | L.LatLngExpression[], options?: PolylineDecoratorOptions);
    setPatterns(patterns: PatternOptions[]): this;
    setPaths(polylines: L.Polyline | L.LatLngExpression[]): this;
  }
}
