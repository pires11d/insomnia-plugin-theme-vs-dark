'use strict';
const colors = {
    red: '#e41300',
    orange: '#CE9178',
    yellow: '#d8d7a1',
    green: '#49c2a8',
    darkGreen: '#519D47',
    blue: '#35A0F3',
    blue2: '#297CBC',
    darkBlue: '#356ab0',
    cyan: '#9CDCFE',
    pink: '#f590e7',
    purple: '#9563b7',
    lightGray: '#f0f0f0',
    lightGray2: '#cccccc',
    gray: '#848484',
    gray2: '#333333',
    darkGray: '#252526',
    darkerGray: '#1E1E1E',

    foreground: '#f8f8f8',
    selection: 'rgba(37, 37, 38, 0.0)',
};

/*
    default: controls text color when no other colors apply. (tab labels, timeline, side bar labels)

    xxs: text box backgrounds, and tab exponent borders

    xs: background for side bar selections, scroll bars, keyboard shortcuts

    sm: foreground and border for inactive tab exponents, pane header info boxes (time, size),
        popup menu borders, and popup menu hovers

    md: borders around any user-input area (text boxes, drop downs, tabs, etc.), also used
        as a background when a user clicks on a control (like tabs or popup menu entries),
        also used for the scrollbar handle (the part the user can drag)

    lg: code folding arrows. text hints inside text boxes.  separator lines on popup menus
        border around some buttons on the preferences menu.

    xl: line numbers in the editor, keyboard shortcuts shown on popup menus,
*/

// establish a baseline
const base = {
    name: 'vs-dark',
    displayName: 'VS Dark',
    theme: {
        rawCss: `
            .editor .CodeMirror-selected {
                background-color: ${colors.darkBlue};
            }

            .editor .cm-atom, .editor .cm-number {
                color: ${colors.cyan};
            }

            .editor .cm-string {
                color: ${colors.orange};
            }

            .editor .cm-string.cm-property {
                color: ${colors.blue};
            }

            .editor .cm-attribute {
                color: ${colors.cyan};
            }

            .editor .cm-bracket {
                color: ${colors.blue};
            }

            .editor .cm-meta {
                font-style: italic;
                color: ${colors.pink};
            }

            .editor .cm-variable {
                color: ${colors.red};
            }
            `,
        background: {
            default: colors.darkGray,
            success: colors.green,
            notice: colors.yellow,
            warning: colors.orange,
            danger: colors.blue,
            surprise: colors.blue,
            info: colors.blue
        },
        foreground: {
            default: colors.foreground
        },
        highlight: {
            default: colors.lightGray,
            xl: colors.gray
        },
        styles: {}
    }
};

// dialog
base.theme.styles.dialog = {
    background: {
        default: colors.lightGray,
    },
    foreground: {
        default: colors.darkerGray,
    },
    highlight: {
        default: colors.darkerGray,
        md: colors.lightGray2,
    }
};
base.theme.styles.dialogHeader = {
    background: {
        default: colors.gray2,
        md: colors.gray2,
    },
    foreground: {
        default: colors.foreground,
    },
    highlight: {
        md: colors.blue2,
    }
};
base.theme.styles.dialogTab = {
    background: {
        default: colors.gray,
    },
    foreground: {
        default: colors.darkerGray,
    },
    highlight: {
        default: colors.foreground,
    }
};

// side bar
base.theme.styles.sidebar = {
    background: {
        default: colors.darkGray,
    },
    highlight: {
        xs: colors.darkBlue, // background for active item and scrollbar
        md: colors.selection // scrollbar handle
    }
};
base.theme.styles.sidebarHeader = {
    background: {
        default: colors.darkGray
    },
    highlight: {
        default: colors.purple,
        xs: colors.purple,
        md: colors.purple
    }
};
base.theme.styles.sidebarList = {
    background: {
        success: colors.green,
        danger: colors.red,
    },
    foreground: {
        default: colors.foreground,
    },
};

// header bar above request details
base.theme.styles.pane = {
    background: {
        default: colors.darkerGray
    },
    highlight: {
        xs: colors.darkGray,
        md: colors.gray
    }
};
base.theme.styles.paneHeader = {
    background: {
        default: colors.darkGray,
        success: colors.darkGreen,
        notice: colors.yellow,
        warning: colors.orange,
        danger: colors.red,
        surprise: colors.blue,
        info: colors.blue
    }
};

// an overlay that is placed on top of everything when modal dialogs are opened.
base.theme.styles.transparentOverlay = {
    background: {
        default: colors.selection
    }
};

// hyperlinks
base.theme.styles.link = {
    foreground: {
        default: colors.purple
    }
};

module.exports.themes = [base];

