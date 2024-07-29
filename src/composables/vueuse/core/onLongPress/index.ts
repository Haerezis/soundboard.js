import { computed } from 'vue-demi'
import { unrefElement, MaybeElementRef, useEventListener, Position } from '@vueuse/core'

const DEFAULT_DELAY = 500
const DEFAULT_THRESHOLD = 10

export interface OnLongPressOptions {
  /**
   * Time in ms till `longpress` gets called
   *
   * @default 500
   */
  delay?: number

  modifiers?: OnLongPressModifiers

  /**
   * Allowance of moving distance in pixels,
   * The action will get canceled When moving too far from the pointerdown position.
   * @default 10
   */
  distanceThreshold?: number | false

  /**
   * Function called when the ref element is released.
   * @param duration how long the element was pressed in ms
   * @param distance distance from the pointerdown position
   * @param isLongPress whether the action was a long press or not
   */
  onMouseUp?: (evt: PointerEvent, isLongPress: boolean) => void
}

export interface OnLongPressModifiers {
  once?: boolean
  capture?: boolean
  stop?: boolean
  prevent?: boolean
  self?: boolean
  left?: boolean
  right?: boolean
  middle?: boolean
}


const modifierGuards: Record<string, (e: Event) => void | boolean> = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  left: (e) => !('button' in e && (e as MouseEvent).button === 0 || ['pointerleave', 'pointermove'].includes(e.type)),
  middle: (e) => !('button' in e && (e as MouseEvent).button === 1 || ['pointerleave', 'pointermove'].includes(e.type)),
  right: (e) => !('button' in e && (e as MouseEvent).button === 2 || ['pointerleave', 'pointermove'].includes(e.type)),
}

export function onLongPress(
  target: MaybeElementRef,
  handler: (evt: PointerEvent) => void,
  options?: OnLongPressOptions,
) {
  const elementRef = computed(() => unrefElement(target))
  const modifiers = Object.fromEntries(Object.entries(options?.modifiers ?? {}).filter(([_, v]) => !!v))

  let timeout: ReturnType<typeof setTimeout> | undefined
  let posStart: Position | undefined
  let startTimestamp: number | undefined
  let hasLongPressed = false

  function clear() {
    if (timeout) {
      clearTimeout(timeout)
      timeout = undefined
    }
    posStart = undefined
    startTimestamp = undefined
    hasLongPressed = false
  }

  function applyModifierGuards(ev: PointerEvent) {
    for (const key in modifiers) {
      const guard = modifierGuards[key]
      if (guard && guard(ev)) {
        return false
      }
    }

    return true
  }

  function onRelease(ev: PointerEvent) {
    const [_startTimestamp, _posStart, _hasLongPressed] = [startTimestamp, posStart, hasLongPressed]

    if (!options?.onMouseUp || !_posStart || !_startTimestamp)
      return

    if (!applyModifierGuards(ev))
      return

    clear()

    options.onMouseUp(ev, _hasLongPressed)
  }

  function onDown(ev: PointerEvent) {
    if (!applyModifierGuards(ev))
      return

    clear()

    posStart = {
      x: ev.x,
      y: ev.y,
    }
    startTimestamp = ev.timeStamp
    timeout = setTimeout(
      () => {
        hasLongPressed = true
        handler(ev)
      },
      options?.delay ?? DEFAULT_DELAY,
    )
  }

  function onMove(ev: PointerEvent) {
    if (!posStart || options?.distanceThreshold === false)
      return

    if (!applyModifierGuards(ev))
      return

    const dx = ev.x - posStart.x
    const dy = ev.y - posStart.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance >= (options?.distanceThreshold ?? DEFAULT_THRESHOLD))
      clear()
  }

  const listenerOptions: AddEventListenerOptions = {
    capture: options?.modifiers?.capture,
    once: options?.modifiers?.once,
  }

  const cleanup = [
    useEventListener(elementRef, 'pointerdown', onDown, listenerOptions),
    useEventListener(elementRef, 'pointermove', onMove, listenerOptions),
    useEventListener(elementRef, ['pointerup', 'pointerleave'], onRelease, listenerOptions),
  ]

  const stop = () => cleanup.forEach(fn => fn())

  return stop
}
