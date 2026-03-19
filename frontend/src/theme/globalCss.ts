import {defineGlobalStyles} from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  ':root': {
    '--border-color': '{colors.gray.300}',
    '--radius': '{radii.md}',
    '--radius-sm': '{radii.sm}',
    '--overlay-background': '{colors.white}',
    '--font-size': '{fontSizes.md}',
    '--focus-ring-color': '{colors.blue.500}',
    '--highlight-background': '{colors.blue.100}',
    '--highlight-overlay': 'rgba(255, 255, 255, 0.5)',
    '--text-color': '{colors.gray.800}',
    '--spacing-1': '{spacing.1}',
    '--spacing-2': '{spacing.2}',
    '--spacing-4': '{spacing.4}',
    '--gray-100': '{colors.gray.100}',
    '--gray-200': '{colors.gray.200}',
    '--gray-300': '{colors.gray.300}',
    '--gray-500': '{colors.gray.500}',
    '--highlight-foreground': '{colors.blue.700}',
    '--highlight-background-pressed': '{colors.blue.200}',
    '--text-color-disabled': '{colors.gray.400}',
    '--gray': '{colors.gray.600}',
    '--tint': '{colors.blue.600}',
    '--tint-200': '{colors.blue.200}',
  },
  'html, body': {
    color: '{colors.gray.900}',
    lineHeight: '1.6',
    wordWrap: 'break-word',
  },
  'h1': {
    fontSize: '2xl',
    fontWeight: 'bold',
    marginBlockStart: '8',
    marginBlockEnd: '4',
  },
  'h2': {
    fontSize: 'xl',
    fontWeight: 'bold',
    marginBlockStart: '6',
    marginBlockEnd: '4',
    borderBottom: '1px solid {colors.gray.300}',
    paddingBottom: '2',
  },
  'h3': {
    fontSize: 'lg',
    fontWeight: 'bold',
    marginBlockStart: '5',
    marginBlockEnd: '3',
  },
  'p': {
    marginBlockEnd: '4',
  },
  'a': {
    color: '{colors.blue.600}',
    textDecoration: 'underline',
    _hover: {
      color: '{colors.blue.800}',
    },
  },
  'ul, ol': {
    paddingInlineStart: '5',
    marginBlockEnd: '4',
  },
  'ul': {
    listStyleType: 'disc',
  },
  'ol': {
    listStyleType: 'decimal',
  },
  'button, input, select, textarea': {
    fontFamily: 'inherit',
  },
  'label': {
    display: 'block',
    marginBlockEnd: '1',
    fontWeight: '600',
    fontSize: 'sm',
    color: '{colors.gray.700}',
  },
  'input:not([type="checkbox"]):not([type="radio"]), textarea, select': {
    width: '100%',
    padding: '2',
    border: '1px solid {colors.gray.300}',
    borderRadius: 'md',
    outline: 'none',
    transition: 'border-color 0.2s',
    _focus: {
      borderColor: '{colors.blue.500}',
      boxShadow: '0 0 0 1px {colors.blue.500}',
    },
  },
  'button': {
    padding: '2 4',
    background: '{colors.blue.600}',
    color: 'white',
    borderRadius: 'md',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background 0.2s',
    _hover: {
      background: '{colors.blue.700}',
    },
    _disabled: {
      background: '{colors.gray.400}',
      cursor: 'not-allowed',
    },
  },
  '.form-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
    maxWidth: '400px',
    marginBlockStart: '6',
    marginBlockEnd: '6',
  },
  '.error-border': {
    borderColor: '{colors.red.500} !important',
    _focus: {
      boxShadow: '0 0 0 1px {colors.red.500} !important',
    },
  },
  '.error-text': {
    color: '{colors.red.500}',
    fontSize: 'sm',
    marginBlockStart: '1',
    marginBlockEnd: '0',
  },
  '.success-text': {
    color: '{colors.green.600}',
    fontWeight: 'bold',
    marginBlockStart: '2',
    marginBlockEnd: '0',
  },
  '.react-aria-Table': {
    border: '0.5px solid var(--border-color)',
    borderRadius: 'var(--radius)',
    background: 'var(--overlay-background)',
    overflow: 'clip',
    outline: 'none',
    borderSpacing: '0',
    alignSelf: 'start',
    width: '100%',
    wordBreak: 'break-word',
    forcedColorAdjust: 'none',
    font: 'var(--font-size) system-ui',

    '& div': {
      padding: '0',
    },

    '&[data-focus-visible]': {
      outline: '2px solid var(--focus-ring-color)',
    },

    '&[data-drop-target]': {
      outline: '2px solid var(--highlight-background)',
      background: 'var(--highlight-overlay)',
    },

    '&:has(.react-aria-TableBody[data-empty])': {
      height: '100%',
      minHeight: '100px',
    },

    '& .react-aria-TableHeader': {
      color: 'var(--text-color)',
    },

    '& .react-aria-TableBody': {
      padding: 'var(--spacing-1)',

      '&[data-empty]': {
        textAlign: 'center',
        fontStyle: 'italic',
      },
    },
  },

  '.react-aria-Row': {
    outline: 'none',
    cursor: 'default',
    color: 'var(--text-color)',
    position: 'relative',
    transform: 'scale(1)',
    transitionProperty: 'background, color',
    transitionDuration: '200ms',
    WebkitTapHighlightColor: 'transparent',

    '& tr:last-child': {
      borderRadius: '0 0 var(--radius) var(--radius)',
    },

    '&[data-focus-visible]': {
      outline: '2px solid var(--focus-ring-color)',
      outlineOffset: '-2px',
    },

    '&[data-pressed]': {
      background: 'var(--gray-100)',
    },

    '&:nth-child(2n)': {
      background: 'var(--gray-100)',
      '&[data-pressed]': {
        background: 'var(--gray-200)',
      },
    },

    '&[data-selected]': {
      background: 'var(--highlight-background)',
      color: 'var(--highlight-foreground)',
      '--focus-ring-color': 'var(--highlight-foreground)',

      '&[data-focus-visible], & .react-aria-Cell[data-focus-visible]': {
        outlineOffset: '-4px',
      },

      '&[data-pressed]': {
        background: 'var(--highlight-background-pressed)',
      },
    },

    '&[data-disabled]': {
      color: 'var(--text-color-disabled)',
    },

    '&[data-href]': {
      cursor: 'pointer',
    },

    '&[data-dragging]': {
      opacity: '0.6',
      transform: 'translateZ(0)',
    },

    '&[data-drop-target]': {
      outline: '2px solid var(--highlight-background)',
      background: 'var(--highlight-overlay)',
      zIndex: '4',
    },

    '& .drag-button': {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '15px',
      textAlign: 'center',

      '& svg': {
        width: 'var(--spacing-4)',
        height: 'var(--spacing-4)',
      },

      '&[data-focus-visible]': {
        borderRadius: '4px',
        outline: '2px solid var(--focus-ring-color)',
      },
    },

    '& .react-aria-DropIndicator[data-drop-target]': {
      outline: '1px solid var(--highlight-background)',
      transform: 'translateZ(0)',
    },
  },

  '.react-aria-Cell, .react-aria-Column': {
    padding: 'var(--spacing-2)',
    textAlign: 'left',
    outline: 'none',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',

    '& div': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },

    '&:is(.react-aria-Row:last-child > :first-child)': {
      borderEndStartRadius: 'var(--radius)',
    },

    '&:is(.react-aria-Row:last-child > :last-child)': {
      borderEndEndRadius: 'var(--radius)',
    },

    '&[data-focus-visible]': {
      outline: '2px solid var(--focus-ring-color)',
      outlineOffset: '-2px',
    },
  },

  '.react-aria-Column': {
    '--button-color': 'var(--gray)',
    '--button-border': 'transparent',
    '--button-shadow': 'transparent',
    '--button-border-size': '0px',
    cursor: 'default',
    borderBottom: '0.5px solid var(--border-color)',
    borderInlineEnd: '0.5px solid var(--border-color)',
    position: 'relative',
    zIndex: 'calc(sibling-count() - sibling-index())',

    '&:last-child': {
      borderInlineEnd: 'none',
    },

    '&[data-pressed]': {
      background: 'var(--gray-200)',
    },

    '&[data-sort-direction]': {
      '--button-color': 'var(--tint)',

      '&[data-pressed]': {
        background: 'var(--tint-200)',
      },
    },

    '& .column-header': {
      display: 'flex',
      alignItems: 'center',
      fontWeight: '600',
    },

    '& .column-name': {
      flex: '1',
      font: 'inherit',
      textAlign: 'start',
      color: 'inherit',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      borderColor: 'transparent',
      borderRadius: 'var(--radius-sm)',

      '&[data-focus-visible]': {
        outline: '2px solid var(--focus-ring-color)',
        outlineOffset: '2px',
      },
    },

    '& .sort-indicator': {
      padding: '0 2px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '&:not([data-sort-direction]) .sort-indicator': {
      visibility: 'hidden',
    },
  },

  '.react-aria-ColumnResizer': {
    width: '1px',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: 'var(--gray-500)',
    padding: '0 var(--spacing-2)',
    translate: 'var(--spacing-4) 0',
    height: '32px',
    margin: '-16px 0',
    flex: '0 0 auto',
    touchAction: 'none',
    boxSizing: 'content-box',
    backgroundClip: 'content-box',

    '&[data-resizable-direction=both]': {
      cursor: 'ew-resize',
    },

    '&[data-resizable-direction=left]': {
      cursor: 'e-resize',
    },

    '&[data-resizable-direction=right]': {
      cursor: 'w-resize',
    },

    '&[data-focus-visible]': {
      backgroundColor: 'var(--focus-ring-color)',
      outline: '2px solid var(--focus-ring-color)',
      outlineOffset: '-2px',
    },

    '&[data-resizing]': {
      width: '2px',
      backgroundColor: 'var(--highlight-background)',
    },
  },

  '.react-aria-Cell': {
    transform: 'translateZ(0)',
    '--border-color': 'var(--gray-300)',
    'tr:not(:last-child) &': {
      borderBottom: '0.5px solid var(--border-color)',
    },

    '[data-selected]:has(+ [data-selected]) &': {
      '--border-color': 'rgb(255 255 255 / 0.3)',
    },

    '@media (forced-colors: active)': {
      '--border-color': 'ButtonBorder',
    },
  },

  '.react-aria-DropIndicator[data-drop-target]': {
    outline: '1px solid var(--highlight-background)',
    transform: 'translateZ(0)',
  },

  ':where(.react-aria-Row) .react-aria-Checkbox': {
    '--checkmark-color': 'var(--highlight-background)',
    '&[data-selected] .indicator': {
      '--indicator-color': 'var(--highlight-foreground)',
      '--indicator-shadow': 'transparent',
    },
  },

  '.react-aria-ResizableTableContainer': {
    width: '100%',
    overflow: 'auto',
    position: 'relative',
    border: '0.5px solid var(--border-color)',
    borderRadius: 'var(--radius)',
    background: 'var(--overlay-background)',

    '& .react-aria-Table': {
      border: 'none',
      borderRadius: '0',

      '&:has(.react-aria-TableBody[data-empty])': {
        height: '100%',
      },
    },

    '& .react-aria-TableHeader': {
      position: 'sticky',
      top: '0',
      zIndex: '10',
    },

    '& .react-aria-Cell': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  '.react-aria-Cell img': {
    height: '30px',
    width: '30px',
    objectFit: 'cover',
    display: 'block',
  },

  '.react-aria-TableLoadingIndicator': {
    height: '32px',
    position: 'relative',
  },
});
