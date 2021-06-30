'use strict';
const colors = {
    red: '#ff5370',
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
    gray: '#848484',

    darkBackground: '#1E1E1E',
    background: '#242424',
    lightBackground: '#383838',
    foreground: '#f8f8f2',
    selection: 'rgba(36, 76, 124, 0.2)',
};

/*
    highlight legend
    ----------------

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
                color: ${colors.foreground};
            }

            .editor .cm-string {
                color: ${colors.orange};
            }

            .editor .cm-string.cm-property {
                color: ${colors.blue};
            }

            .editor .cm-attribute {
                color: ${colors.blue};
            }

            .editor .cm-bracket {
                color: ${colors.cyan};
            }

            .editor .cm-meta {
                font-style: italic;
                color: ${colors.foreground};
            }

            .editor .cm-variable {
                color: ${colors.red};
            }
            `,
        background: {
            default: colors.lightBackground,
            success: colors.pink,
            notice: colors.yellow,
            warning: colors.orange,
            danger: colors.cyan,
            surprise: colors.blue,
            info: colors.blue
        },
        foreground: {
            default: colors.foreground
        },
        highlight: {
            default: colors.foreground,
            xl: colors.gray
        },
        styles: {}
    }
};

// hyperlinks
base.theme.styles.link = {
    foreground: {
        default: colors.purple
    }
};

// dialog
base.theme.styles.dialog = {
    background: {
        default: colors.foreground,
    },
    foreground: {
        default: colors.background,
    },
    highlight: {
        default: colors.background,
        md: colors.blue,
    }
};

// side bar
base.theme.styles.sidebar = {
    background: {
        default: colors.background
    },
    highlight: {
        xs: colors.blue2, // background for active item and scrollbar
        md: colors.selection // scrollbar handle itself
    }
};
base.theme.styles.sidebarHeader = {
    background: {
        default: colors.background
    },
    highlight: {
        default: colors.purple,
        xs: colors.purple,
        md: colors.purple
    }
};

// header bar above request details
base.theme.styles.pane = {
    background: {
        default: colors.darkBackground
    },
    highlight: {
        xs: colors.background,
        md: colors.lightBackground
    }
};
base.theme.styles.paneHeader = {
    background: {
        default: colors.background,
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

module.exports.themes = [base];

