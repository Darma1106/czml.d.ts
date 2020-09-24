/**
 * @example 'id#billboard.scale'
 */
type ReferenceValue = string
type ReferenceListValue = string[]
type ReferenceListOfListsValue = string[]
type VelocityReferenceValue = string
type FontValue = string
type UriValue = string
/**
 *  ISO8601格式时间
 * @example "2020-09-23T13:41:00Z"
 */
type Time = string
/**
 *  ISO8601格式时间
 * @example "0000-00-00T00:00:00Z/9999-12-31T24:00:00Z"
 */
type TimeIntervalCollection = string
/**
 * @example
 * [x,y]
 * or
 * [ time,x,y,
 *   time,x,y, ]
 */
type Cartesian2Value = number[]
/**
 * @example
 * [x,y,z]
 * or
 * [ time,x,y,z,
 *   time,x,y,z, ]
 */
type Cartesian3Value = number[]
/**
 * @example
 * [x, y, z, x, y, z]
 */
type Cartesian3ListValue = number[]
type Cartesian3ListOfListsValue = number[]
type UnitCartesian3Value = number[]
type UnitSphericalListValue = number[]
/**
 * @example
 * [Longitude, Latitude, Height]
 * or
 * [Time, Longitude, Latitude, Height,
 * Time, Longitude, Latitude, Height, ]
 */
type CartographicRadiansValue = number[]
/**
 * @example
 * [ Longitude, Latitude, Height,
 *   Longitude, Latitude, Height, ]
 */
type CartographicRadiansListValue = number[]
type CartographicRadiansListOfListsValue = number[]
/**
 * @example
 * [Longitude, Latitude, Height]
 * or
 * [Time, Longitude, Latitude, Height,
 * Time, Longitude, Latitude, Height, ]
 */
type CartographicDegreesValue = number[]
/**
 * @example
 * [ Longitude, Latitude, Height,
 *   Longitude, Latitude, Height, ]
 */
type CartographicDegreesListValue = number[]
type CartographicDegreesListOfListsValue = number[]
/**
 * @example
 * [X, Y, Z, dX, dY, dZ]
 * or
 * [ Time, X, Y, Z, dX, dY, dZ,
 *   Time, X, Y, Z, dX, dY, dZ, ]
 */
type Cartesian3VelocityValue = number[]
type NearFarScalarValue = number[]
type DistanceDisplayConditionValue = number[]
type UnitSphericalValue = number[]
/**
 * @example
 * [X, Y, Width, Height]
 * or
 * [ Time, X, Y, Width, Height,
 *   Time, X, Y, Width, Height, ]
 */
type BoundingRectangleValue = number[]
/**
 * @example
 * [X, Y, Z, W]
 * or
 * [ Time, X, Y, Z, W,
 *   Time, X, Y, Z, W, ]
 */
type UnitQuaternionValue = number[]
/**
 * @example
 * [WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]
 * or
 * [ Time, WestLongitude, SouthLatitude, EastLongitude, NorthLatitude,
 *   Time, WestLongitude, SouthLatitude, EastLongitude, NorthLatitude, ]
 */
type CartographicRectangleRadiansValue = number[]
type CartographicRectangleDegreesValue = number[]
type SphericalValue = number[]
type SphericalListValue = number[]
type UnitCartesian3ListValue = number[]
/**
 * @example
 * [Red, Green, Blue, Alpha]
 * where each component is an integer in the range 0-255.
 */
type RgbaValue = number[]
/**
 * @example
 * [Red, Green, Blue, Alpha]
 *  where each component is a double in the range 0.0-1.0.
 */
type RgbafValue = number[]

type DoubleValue = number | number[]
type DoubleListValue = number[]
type IntegerValue = number | number[]

export const enum ArcTypeValue {
  none = 'NONE',
  geodesic = 'GEODESIC',
  rhumb = 'RHUMB',
}

export const enum ClassificationTypeValue {
  terrain = 'TERRAIN',
  cesium3dTile = 'CESIUM_3D_TILE',
  both = 'BOTH',
}

export const enum ClockRange {
  unbounded = 'UNBOUNDED',
  clamped = 'CLAMPED',
  loopStop = 'LOOP_STOP',
}

export const enum ClockStep {
  tickDependent = 'TICK_DEPENDENT',
  systemClockMultiplier = 'SYSTEM_CLOCK_MULTIPLIER',
  systemClock = 'SYSTEM_CLOCK',
}

export const enum ColorBlendModeValue {
  highlight = 'HIGHLIGHT',
  replace = 'REPLACE',
  mix = 'MIX',
}

export const enum CornerTypeValue {
  rounded = 'ROUNDED',
  mitered = 'MITERED',
  beveled = 'BEVELED',
}

export const enum LabelStyleValue {
  fill = 'FILL',
  outline = 'OUTLINE',
  fillAndOutline = 'FILL_AND_OUTLINE',
}

export const enum InterpolationAlgorithmValue {
  linear = 'LINEAR',
  lagrange = 'LAGRANGE',
  hermite = 'HERMITE',
}

export const enum ExtrapolationValue {
  none = 'NONE',
  hold = 'HOLD',
  extrapolate = 'EXTRAPOLATE',
}

export const enum HorizontalOriginValue {
  left = 'LEFT',
  center = 'CENTER',
  right = 'RIGHT',
}

export const enum VerticalOriginValue {
  baseline = 'BASELINE',
  bottom = 'BOTTOM',
  center = 'CENTER',
  top = 'TOP',
}

export const enum HeightReferenceValue {
  none = 'NONE',
  clampToGround = 'CLAMP_TO_GROUND',
  relativeToGround = 'RELATIVE_TO_GROUND',
}

export const enum referenceFrameValue {
  fixed = 'FIXED',
  inertial = 'INERTIAL',
}

export const enum StripeOrientationValue {
  horizontal = 'HORIZONTAL',
  vertical = 'VERTICAL',
}

export const enum SensorVolumePortionToDisplayValue {
  complete = 'COMPLETE',
  belowEllipsoidHorizon = 'BELOW_ELLIPSOID_HORIZON',
  aboveEllipsoidHorizon = 'ABOVE_ELLIPSOID_HORIZON',
}

export const enum ShadowModeValue {
  disabled = 'DISABLED',
  enabled = 'ENABLED',
  castOnly = 'CAST_ONLY',
  receiveOnly = 'RECEIVE_ONLY',
}

export interface DeletableProperty {
  delete?: boolean
}

export interface InterpolatableProperty {
  epoch?: string
  interpolationAlgorithm?: InterpolationAlgorithmValue
  interpolationDegree?: number
  forwardExtrapolationType?: ExtrapolationValue
  forwardExtrapolationDuration?: number
  backwardExtrapolationType?: ExtrapolationValue
  backwardExtrapolationDuration?: number
}

export interface TypeDouble extends DeletableProperty, InterpolatableProperty {
  number?: DoubleValue
  reference?: ReferenceValue
}

export interface TypeInteger extends DeletableProperty, InterpolatableProperty {
  number?: IntegerValue
  reference?: ReferenceValue
}

export interface TypeString extends DeletableProperty {
  string?: string
  reference?: ReferenceValue
}

export interface TypeBoolean extends DeletableProperty {
  boolean?: boolean
  reference?: ReferenceValue
}

export interface Font extends DeletableProperty {
  font?: FontValue
  reference?: ReferenceValue
}

export interface LabelStyle extends DeletableProperty {
  labelStyle?: LabelStyleValue
  reference?: ReferenceValue
}

export interface Color extends DeletableProperty, InterpolatableProperty {
  rgba?: RgbaValue
  rgbaf?: RgbafValue
  reference?: ReferenceValue
}

export interface CornerType extends DeletableProperty {
  cornerType?: CornerTypeValue
  reference?: ReferenceValue
}

export interface BackgroundPadding
  extends DeletableProperty,
    InterpolatableProperty {
  cartesian2?: Cartesian2Value
  reference?: ReferenceValue
}

export interface ColorBlendMode extends DeletableProperty {
  colorBlendMode?: ColorBlendMode
  reference?: ReferenceValue
}

export interface ClassificationType extends DeletableProperty {
  classificationType?: ClassificationTypeValue
  reference?: ReferenceValue
}

export interface DoubleList extends DeletableProperty {
  array?: DoubleListValue
  references?: ReferenceListValue
}

export interface PixelOffset extends DeletableProperty, InterpolatableProperty {
  cartesian2?: Cartesian2Value
  reference?: ReferenceValue
}

export interface EyeOffset extends DeletableProperty, InterpolatableProperty {
  cartesian?: Cartesian3Value
  reference?: ReferenceValue
}

export interface HorizontalOrigin extends DeletableProperty {
  horizontalOrigin?: HorizontalOriginValue
  reference?: ReferenceValue
}

export interface VerticalOrigin extends DeletableProperty {
  verticalOrigin?: VerticalOriginValue
  reference?: ReferenceValue
}

export interface HeightReference extends DeletableProperty {
  heightReference?: HeightReferenceValue
  reference?: ReferenceValue
}

export interface NearFarScalar
  extends DeletableProperty,
    InterpolatableProperty {
  nearFarScalar?: NearFarScalarValue
  reference?: ReferenceValue
}

export interface DistanceDisplayCondition
  extends DeletableProperty,
    InterpolatableProperty {
  distanceDisplayCondition?: DistanceDisplayConditionValue
  reference?: ReferenceValue
}

export interface SolidColorMaterial {
  color: Color
}

export interface Uri extends DeletableProperty {
  uri?: UriValue
  reference?: ReferenceValue
}

export interface Repeat extends DeletableProperty, InterpolatableProperty {
  cartesian2?: Cartesian2Value
  reference?: ReferenceValue
}

export interface ImageMaterial {
  image: Uri
  repeat?: Repeat
  color?: Color
  transparent?: TypeBoolean | boolean
}

export interface LineCount extends DeletableProperty, InterpolatableProperty {
  cartesian2?: Cartesian2Value
  reference?: ReferenceValue
}

export interface LineThickness
  extends DeletableProperty,
    InterpolatableProperty {
  cartesian2?: Cartesian2Value
  reference?: ReferenceValue
}

export interface LineOffset extends DeletableProperty, InterpolatableProperty {
  cartesian2?: Cartesian2Value
  reference?: ReferenceValue
}

export interface GridMaterial {
  color?: Color
  cellAlpha?: TypeDouble | DoubleValue
  lineCount?: LineCount
  lineThickness?: LineThickness
  lineOffset?: LineOffset
}

export interface Scale {
  cartesian?: Cartesian3Value
  reference?: ReferenceValue
}

export interface StripeOrientation extends DeletableProperty {
  stripeOrientation?: StripeOrientationValue
  reference?: ReferenceValue
}

export interface StripeMaterial {
  orientation?: StripeOrientation
  evenColor?: Color
  oddColor?: Color
  offset?: TypeDouble | DoubleValue
  repeat?: TypeDouble | DoubleValue
}

export interface CheckerboardMaterial {
  evenColor?: Color
  oddColor?: Color
  repeat?: Repeat
}

export interface PolylineOutlineMaterial {
  color?: Color
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
}

export interface PolylineArrowMaterial {
  color?: Color
}

export interface PolylineDashMaterial {
  color?: Color
  gapColor?: Color
  dashLength?: TypeDouble | DoubleValue
  dashPattern?: TypeInteger | IntegerValue
}

export interface PolylineGlowMaterial {
  color?: Color
  glowPower?: TypeDouble | DoubleValue
  taperPower?: TypeDouble | DoubleValue
}

export interface PolylineMaterial {
  solidColor?: SolidColorMaterial
  polylineOutline?: PolylineOutlineMaterial
  polylineArrow?: PolylineArrowMaterial
  polylineDash?: PolylineDashMaterial
  polylineGlow?: PolylineGlowMaterial
  image?: ImageMaterial
  grid?: GridMaterial
  stripe?: StripeMaterial
  checkerboard?: CheckerboardMaterial
}

export interface Path {
  show?: TypeBoolean | boolean
  leadTime?: TypeBoolean | boolean
  trailTime?: TypeBoolean | boolean
  width?: TypeDouble | DoubleValue
  resolution?: TypeDouble | DoubleValue
  material?: PolylineMaterial
  distanceDisplayCondition?: DistanceDisplayCondition
}

export interface Rotation extends DeletableProperty, InterpolatableProperty {
  unitQuaternion?: UnitQuaternionValue
  reference?: ReferenceValue
}

export interface Material {
  solidColor?: SolidColorMaterial
  image?: ImageMaterial
  grid?: GridMaterial
  stripe?: StripeMaterial
  checkerboard?: CheckerboardMaterial
}

export interface Model {
  show?: TypeBoolean | boolean
  gltf: Uri
  scale?: TypeDouble | DoubleValue
  minimumPixelSize?: TypeDouble | DoubleValue
  maximumScale?: TypeDouble | DoubleValue
  incrementallyLoadTextures?: TypeBoolean | boolean
  runAnimations?: TypeBoolean | boolean
  shadows?: ShadowMode
  heightReference?: HeightReference
  silhouetteColor?: Color
  silhouetteSize?: TypeDouble | DoubleValue
  color?: Color
  colorBlendMode?: ColorBlendMode
  colorBlendAmount?: TypeDouble | DoubleValue
  distanceDisplayCondition?: DistanceDisplayCondition
  nodeTransformations?: NodeTransformations
  articulations?: Articulations
  path?: Path
}

export interface Articulations {
  [key: string]: Articulation
}

export interface Articulation
  extends DeletableProperty,
    InterpolatableProperty {
  number?: DoubleValue
  reference?: ReferenceValue
}

export interface Direction extends DeletableProperty, InterpolatableProperty {
  spherical?: SphericalValue
  unitSpherical?: UnitSphericalValue
  cartesian?: Cartesian3Value
  unitCartesian?: UnitCartesian3Value
  reference?: ReferenceValue
}

export interface DirectionList extends DeletableProperty {
  spherical?: SphericalListValue
  unitSpherical?: UnitSphericalListValue
  cartesian?: Cartesian3ListValue
  unitCartesian?: UnitCartesian3ListValue
}

export interface NodeTransformations {
  [key: string]: NodeTransformation
}

export interface NodeTransformation {
  translation?: Translation
  rotation?: Rotation
  scale?: Scale
}

export interface Translation extends DeletableProperty, InterpolatableProperty {
  cartesian?: Cartesian3Value
  reference?: ReferenceValue
}

export interface AlignedAxis extends DeletableProperty, InterpolatableProperty {
  unitCartesian?: UnitCartesian3Value
  unitSpherical?: UnitSphericalValue
  reference?: ReferenceValue
  velocityReference?: VelocityReferenceValue
}

export interface ArcType extends DeletableProperty {
  arcType?: ArcTypeValue
  reference?: ReferenceValue
}

export interface Articulation
  extends DeletableProperty,
    InterpolatableProperty {
  number?: DoubleValue
  reference?: ReferenceValue
}

export interface BoundingRectangle
  extends DeletableProperty,
    InterpolatableProperty {
  boundingRectangle?: BoundingRectangleValue
  reference?: ReferenceValue
}

export interface BoxDimensions {
  cartesian?: Cartesian3Value
  reference?: ReferenceValue
}

export interface ViewFrom extends DeletableProperty, InterpolatableProperty {
  cartesian?: Cartesian3Value
  reference?: ReferenceValue
}

export interface ShadowMode extends DeletableProperty {
  shadowMode?: ShadowModeValue
  reference?: ReferenceValue
}

export interface SensorVolumePortionToDisplay extends DeletableProperty {
  portionToDisplay?: SensorVolumePortionToDisplayValue
  reference?: ReferenceValue
}

export interface PositionList extends DeletableProperty {
  referenceFrame?: referenceFrameValue
  cartesian?: Cartesian3ListValue
  cartographicRadians?: CartographicRadiansListValue
  cartographicDegrees?: CartographicDegreesListValue
  references?: ReferenceListValue
}

export interface PositionListOfLists extends DeletableProperty {
  cartesian?: Cartesian3ListOfListsValue
  cartographicRadians?: CartographicRadiansListOfListsValue
  cartographicDegrees?: CartographicDegreesListOfListsValue
  references?: ReferenceListOfListsValue
}

export interface RectangleCoordinates
  extends DeletableProperty,
    InterpolatableProperty {
  wsen?: CartographicRectangleRadiansValue
  wsenDegrees?: CartographicRectangleDegreesValue
  reference?: ReferenceValue
}

export interface Sensor {
  show?: TypeBoolean | boolean
  radius?: TypeDouble | DoubleValue
  showIntersection?: TypeBoolean | boolean
  intersectionColor?: Color
  intersectionWidth?: TypeDouble | DoubleValue
  showLateralSurfaces?: TypeBoolean | boolean
  lateralSurfaceMaterial?: Material
  showEllipsoidSurfaces?: TypeBoolean | boolean
  ellipsoidSurfaceMaterial?: Material
  showEllipsoidHorizonSurfaces?: TypeBoolean | boolean
  ellipsoidHorizonSurfaceMaterial?: Material
  showDomeSurfaces?: TypeBoolean | boolean
  domeSurfaceMaterial?: Material
  portionToDisplay?: SensorVolumePortionToDisplay
  environmentConstraint?: TypeBoolean | boolean
  showEnvironmentOcclusion?: TypeBoolean | boolean
  environmentOcclusionMaterial?: Material
  showEnvironmentIntersection?: TypeBoolean | boolean
  environmentIntersectionColor?: Color
  environmentIntersectionWidth?: TypeDouble | DoubleValue
  showThroughEllipsoid?: TypeBoolean | boolean
}

export interface Billboard {
  show?: TypeBoolean | boolean
  image: Uri
  scale?: TypeDouble | DoubleValue
  pixelOffset?: PixelOffset
  eyeOffset?: EyeOffset
  horizontalOrigin?: HorizontalOrigin
  verticalOrigin?: VerticalOrigin
  heightReference?: HeightReference
  color?: Color
  rotation?: TypeDouble | DoubleValue
  alignedAxis?: AlignedAxis
  sizeInMeters?: TypeBoolean | boolean
  width: TypeDouble | DoubleValue
  height: TypeDouble | DoubleValue
  scaleByDistance?: NearFarScalar
  translucencyByDistance?: NearFarScalar
  pixelOffsetScaleByDistance?: NearFarScalar
  imageSubRegion: BoundingRectangle
  distanceDisplayCondition?: DistanceDisplayCondition
  disableDepthTestDistance?: TypeDouble | DoubleValue
}

export interface Box {
  show?: TypeBoolean | boolean
  dimensions: BoxDimensions
  heightReference?: HeightReference
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
}

export interface Corridor {
  show?: TypeBoolean | boolean
  positions: PositionList
  width: TypeDouble | DoubleValue
  height?: TypeDouble | DoubleValue
  heightReference?: HeightReference
  extrudedHeight?: TypeDouble | DoubleValue
  extrudedHeightReference?: HeightReference
  cornerType?: CornerType
  granularity?: TypeDouble | DoubleValue
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
  classificationType: ClassificationType
  zIndex?: TypeInteger | IntegerValue
}

export interface Cylinder {
  show?: TypeBoolean | boolean
  length: TypeDouble | DoubleValue
  topRadius: TypeDouble | DoubleValue
  bottomRadius: TypeDouble | DoubleValue
  heightReference?: HeightReference
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  numberOfVerticalLines?: TypeInteger | IntegerValue
  slices?: TypeInteger | IntegerValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
}

export interface Clock {
  currentTime: Time
  multiplier?: number
  range?: ClockRange
  step?: ClockStep
}

export interface ConicSensor extends Sensor {
  innerHalfAngle?: TypeDouble | DoubleValue
  outerHalfAngle?: TypeDouble | DoubleValue
  minimumClockAngle?: TypeDouble | DoubleValue
  maximumClockAngle?: TypeDouble | DoubleValue
}

export interface CustomPatternSensor extends Sensor {
  directions: DirectionList
}

export interface CustomProperty
  extends DeletableProperty,
    InterpolatableProperty {
  boolean?: boolean
  boundingRectangle?: BoundingRectangleValue
  cartesian?: Cartesian3Value
  cartographicRadians?: CartographicRadiansValue
  cartographicDegrees?: CartographicDegreesValue
  cartesian2?: Cartesian2Value
  unitCartesian?: UnitCartesian3Value
  spherical?: SphericalValue
  unitSpherical?: UnitSphericalValue
  rgba?: RgbaValue
  rgbaf?: RgbafValue
  colorBlendMode?: ColorBlendModeValue
  cornerType?: CornerTypeValue
  heightReference?: HeightReferenceValue
  horizontalOrigin?: HorizontalOriginValue
  labelStyle?: LabelStyleValue
  number?: DoubleValue
  nearFarScalar?: NearFarScalarValue
  unitQuaternion?: UnitQuaternionValue
  shadowMode?: ShadowModeValue
  string?: string
  stripeOrientation?: StripeOrientationValue
  wsen?: CartographicRectangleRadiansValue
  wsenDegrees?: CartographicRectangleDegreesValue
  uri?: UriValue
  verticalOrigin?: VerticalOriginValue
}

export interface Ellipse {
  show?: TypeBoolean | boolean
  semiMajorAxis: TypeDouble | DoubleValue
  semiMinorAxis: TypeDouble | DoubleValue
  height: TypeDouble | DoubleValue
  heightReference?: HeightReference
  extrudedHeight?: TypeDouble | DoubleValue
  extrudedHeightReference?: HeightReference
  rotation?: TypeDouble | DoubleValue
  stRotation?: TypeDouble | DoubleValue
  granularity?: TypeDouble | DoubleValue
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  numberOfVerticalLines?: TypeInteger | IntegerValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
  classificationType?: ClassificationType
  zIndex?: TypeInteger | IntegerValue
}

export interface EllipsoidRadii
  extends DeletableProperty,
    InterpolatableProperty {
  cartesian?: Cartesian3Value
  reference?: ReferenceValue
}

export interface Ellipsoid {
  show?: TypeBoolean | boolean
  radii: EllipsoidRadii
  innerRadii?: EllipsoidRadii
  minimumClock?: TypeDouble | DoubleValue
  maximumClock?: TypeDouble | DoubleValue
  minimumCone?: TypeDouble | DoubleValue
  maximumCone?: TypeDouble | DoubleValue
  heightReference?: HeightReference
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  stackPartitions?: TypeInteger | IntegerValue
  slicePartitions?: TypeInteger | IntegerValue
  subdivisions?: TypeInteger | IntegerValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
}

export interface Fan {
  show?: TypeBoolean | boolean
  directions: DirectionList
  radius?: TypeDouble | DoubleValue
  perDirectionRadius?: TypeBoolean | boolean
  material?: Material
  fill?: TypeBoolean | boolean
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  numberOfRings?: TypeInteger | IntegerValue
}

export interface RectangularSensor extends Sensor {
  xHalfAngle?: TypeDouble | DoubleValue
  yHalfAngle?: TypeDouble | DoubleValue
}

export interface Orientation extends DeletableProperty, InterpolatableProperty {
  unitQuaternion?: UnitQuaternionValue
  reference?: ReferenceValue
  velocityReference?: VelocityReferenceValue
}

export interface Point {
  show?: TypeBoolean | boolean
  pixelSize?: TypeDouble | DoubleValue
  heightReference?: HeightReference
  color?: Color
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  scaleByDistance?: NearFarScalar
  translucencyByDistance?: NearFarScalar
  distanceDisplayCondition?: DistanceDisplayCondition
  disableDepthTestDistance?: TypeDouble | DoubleValue
}

export interface Polyline {
  show?: TypeBoolean | boolean
  positions: PositionList
  arcType?: ArcType
  width?: TypeDouble | DoubleValue
  granularity?: TypeDouble | DoubleValue
  material?: PolylineMaterial
  followSurface?: TypeBoolean | boolean
  shadows?: ShadowMode
  depthFailMaterial: PolylineMaterial
  distanceDisplayCondition?: DistanceDisplayCondition
  clampToGround?: TypeBoolean | boolean
  classificationType?: ClassificationType
  zIndex?: TypeInteger | IntegerValue
}

export interface Polygon {
  show?: TypeBoolean | boolean
  positions?: PositionList
  holes?: PositionListOfLists
  arcType?: ArcType
  height?: TypeDouble | DoubleValue
  heightReference?: HeightReference
  extrudedHeight?: TypeDouble | DoubleValue
  extrudedHeightReference?: HeightReference
  stRotation?: TypeDouble | DoubleValue
  granularity?: TypeDouble | DoubleValue
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  perPositionHeight?: TypeBoolean | boolean
  closeTop?: TypeBoolean | boolean
  closeBottom?: TypeBoolean | boolean
  shadows?: TypeBoolean | boolean
  distanceDisplayCondition?: DistanceDisplayCondition
  classificationType?: ClassificationType
  zIndex?: TypeInteger | IntegerValue
}

export interface Rectangle {
  show?: TypeBoolean | boolean
  coordinates: RectangleCoordinates
  height?: TypeDouble | DoubleValue
  heightReference?: HeightReference
  extrudedHeight?: TypeDouble | DoubleValue
  extrudedHeightReference?: HeightReference
  rotation?: TypeDouble | DoubleValue
  stRotation?: TypeDouble | DoubleValue
  granularity?: TypeDouble | DoubleValue
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
  classificationType?: ClassificationType
  zIndex?: TypeInteger | IntegerValue
}

export interface Tileset {
  show?: TypeBoolean | boolean
  uri: Uri
  maximumScreenSpaceError?: TypeDouble | DoubleValue
}

export interface Vector {
  show?: TypeBoolean | boolean
  color?: Color
  direction: Direction
  length?: TypeDouble | DoubleValue
  minimumLengthInPixels?: TypeDouble | DoubleValue
}

export interface Wall {
  show?: TypeBoolean | boolean
  positions: PositionList
  minimumHeights?: DoubleList
  maximumHeights?: DoubleList
  granularity?: TypeDouble | DoubleValue
  fill?: TypeBoolean | boolean
  material?: Material
  outline?: TypeBoolean | boolean
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  shadows?: ShadowMode
  distanceDisplayCondition?: DistanceDisplayCondition
}

export interface Position extends DeletableProperty, InterpolatableProperty {
  referenceFrame?: referenceFrameValue
  cartesian?: Cartesian3Value
  cartographicRadians?: CartographicRadiansValue
  cartographicDegrees?: CartographicDegreesValue
  cartesianVelocity?: Cartesian3VelocityValue
  reference?: ReferenceValue
}

export interface Label {
  show?: TypeBoolean | boolean
  text: TypeString | string
  font?: Font
  style?: LabelStyle
  scale?: TypeDouble | DoubleValue
  showBackground?: TypeBoolean | boolean
  backgroundColor?: Color
  backgroundPadding?: BackgroundPadding
  pixelOffset?: PixelOffset
  eyeOffset?: EyeOffset
  horizontalOrigin?: HorizontalOrigin
  verticalOrigin?: VerticalOrigin
  heightReference?: HeightReference
  fillColor?: Color
  outlineColor?: Color
  outlineWidth?: TypeDouble | DoubleValue
  translucencyByDistance?: NearFarScalar
  pixelOffsetScaleByDistance?: NearFarScalar
  scaleByDistance?: NearFarScalar
  distanceDisplayCondition?: DistanceDisplayCondition
  disableDepthTestDistance?: TypeDouble | DoubleValue
}

export interface Packet {
  id: string
  name?: string
  delete?: boolean
  parent?: string
  description?: TypeString | string
  clock?: Clock
  version?: string
  availability?: TimeIntervalCollection
  // 官方描述为 A set of custom properties. 不清楚是数组还是Set,没有示例。暂定数组
  properties?: CustomProperty[]
  position?: Position
  orientation?: Orientation
  viewFrom?: ViewFrom
  billboard?: Billboard
  box?: Box
  corridor?: Corridor
  cylinder?: Cylinder
  ellipse?: Ellipse
  ellipsoid?: Ellipsoid
  label?: Label
  model?: Model
  path?: Path
  point?: Point
  polygon?: Polygon
  polyline?: Polyline
  rectangle?: Rectangle
  tileset?: Tileset
  wall?: Wall
  agi_conicSensor?: ConicSensor
  agi_customPatternSensor?: CustomPatternSensor
  agi_rectangularSensor?: RectangularSensor
  agi_fan?: Fan
  agi_vector?: Vector
}


