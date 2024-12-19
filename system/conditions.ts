export const conditions = {
  extend: {
    // themes
    primaryTheme: '[data-panda-theme=primary] &',
    secondaryTheme: '[data-panda-theme=secondary] &',

    // modes
    lightMode: '[data-color-mode=light] &, &.light, .light &',
    darkMode: '[data-color-mode=dark] &, &.dark, .dark &',
    systemMode: '[data-color-mode=system] &, &.system, .system &',

    // states
    open: '&:is([open], [data-open], [data-state=open], [data-expanded], [aria-expanded=true])',
    closed:
      '&:is([closed], [data-closed], [data-state=closed], [data-closed], [aria-expanded=false])',
    modalOpen: '&:is([data-modal-open=true])',
    disabled: '&:is(:disabled, [disabled], [data-disabled], [aria-disabled])',
    invalid: '&:is(:invalid, [data-invalid], [aria-invalid])',
    userInvalid: '&:is(:user-invalid, [aria-invalid])',
    groupInvalid: '.group:is([data-invalid] &, [aria-invalid]) &',
    groupChecked: '.group:is([data-checked="true"] &, [aria-checked="true"]) &',
    screenReaderOnly: '&:is([data-screen-reader-only=true])',

    // positions
    positionBottom: '&:is([data-position=bottom])',
    positionTop: '&:is([data-position=top])',
    positionLeft: '&:is([data-position=left])',
    positionRight: '&:is([data-position=right])',

    // elements
    notify: '&:is([data-notify=true])',

    // roles
    publisher: '&:is([data-role=publisher])',
    gm: '&:is([data-role=gm])',
    player: '&:is([data-role=player])',

    // highlights
    highlight: '&:is(::selection)',
    spellingError: '&:is(::spelling-error)',
    grammarError: '&:is(::grammar-error)',

    // palettes
    neutralPalette: '&:is([data-palette=neutral])',
    sanctumPalette: '&:is([data-palette=sanctum])',
    playPalette: '&:is([data-palette=play])',

    pagePalette: '&:is([data-palette=page])',
    actionPalette: '&:is([data-palette=action])',
    secondaryActionPalette: '&:is([data-palette=secondaryAction])',
    infoPalette: '&:is([data-palette=info])',
    successPalette: '&:is([data-palette=success])',
    warningPalette: '&:is([data-palette=warning])',
    dangerPalette: '&:is([data-palette=danger])',
  },
};
