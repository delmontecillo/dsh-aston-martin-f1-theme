window.__ModuleLoader__.load({
  id: '@amr/dsh-theme',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    /**
     * One token value for the two built-in palettes. Every override carries
     * both modes so switching Light/Dark never leaves a stale colour behind.
     */
    const m = (light, dark) => ({ light, dark });

    /**
     * Aston Martin Aramco F1 Team livery: British racing green bodywork,
     * luminous lime flashes, carbon black, chalk white. Light mode is the
     * garage at noon; dark mode is the circuit under floodlights.
     */
    const TOKENS = {
      // Canvas and layers
      '--dsw-alias-bg-base': m('#F2F4EF', '#050B09'),
      '--dsw-alias-bg-document-preview': m('#E8EBE4', '#071310'),
      '--dsw-alias-label-document-preview': m('#46564F', '#A9BAB0'),
      '--dsw-alias-bg-layer-1': m('#FFFFFF', '#081310'),
      '--dsw-alias-bg-layer-2': m('#F8FAF5', '#0B1B17'),
      '--dsw-alias-bg-layer-3': m('#FFFFFF', '#10261F'),
      '--dsw-alias-bg-mask-1': m('#0B141128', '#00000099'),
      '--dsw-alias-bg-mask-2': m('#0B14111A', '#00000047'),
      '--dsw-alias-bg-mask-3': m('#0B141154', '#0000008A'),
      '--dsw-alias-bg-mask-drop': m('#F2F4EFB3', '#0B1B17B3'),
      '--dsw-alias-bg-mask-photo': m('#06100EE0', '#000000E0'),
      '--dsw-alias-bg-module-platform': m('#E8EBE4', '#0E211B'),
      '--dsw-alias-bg-multi-select': m('#EDF0E9', '#0C1D18'),
      '--dsw-alias-bg-overlay': m('#E2E7DE', '#123028'),
      '--dsw-alias-bg-skeleton': m('#0B14110A', '#EEF3EA14'),

      // Borders
      '--dsw-alias-border-inverted': m('#00000000', '#EEF3EA0F'),
      '--dsw-alias-border-inverted2': m('#00000000', '#EEF3EA14'),
      '--dsw-alias-border-l1': m('#0B141114', '#EEF3EA14'),
      '--dsw-alias-border-l2-darkmode-thin': m('#0B14111A', '#EEF3EA14'),
      '--dsw-alias-border-l2': m('#0B141124', '#EEF3EA24'),
      '--dsw-alias-border-l3': m('#0B141138', '#EEF3EA38'),
      '--dsw-alias-border-l4': m('#0B14115C', '#EEF3EA52'),

      // Brand and buttons: racing green by day, lime by night.
      '--dsw-alias-brand-primary': m('#00594F', '#CEDC00'),
      '--dsw-alias-brand-primary-invert': m('#FFFFFF', '#06110E'),
      '--dsw-alias-brand-primary-new-colorprimary-new-color': m('#A8BA00', '#D8E600'),
      '--dsw-alias-brand-text': m('#0A1613', '#EEF3EA'),
      '--dsw-alias-button-contrast-fill': m('#0A1613', '#10231E'),
      '--dsw-alias-button-elevated-fill': m('#FFFFFF', '#0C1C18'),
      '--dsw-alias-button-floating-fill': m('#FFFFFF', '#0A1714'),
      '--dsw-alias-button-floating-hover': m('#E9EDE6', '#11241F'),
      '--dsw-alias-button-ghost-active-border': m('#0B141166', '#EEF3EA66'),
      '--dsw-alias-button-ghost-active-fill': m('#E8EBE4', '#102420'),
      '--dsw-alias-button-ghost-active-hover': m('#DDE3D9', '#163029'),
      '--dsw-alias-button-info-fill': m('#00594F', '#CEDC00'),
      '--dsw-alias-button-info-hover': m('#00706A', '#DFEC2E'),
      '--dsw-alias-button-primary-dimmed': m('#B9C9C4', '#2E3A0E'),
      '--dsw-alias-button-primary-fill': m('#00594F', '#CEDC00'),
      '--dsw-alias-button-primary-hover': m('#00706A', '#DFEC2E'),
      '--dsw-alias-button-tool-bar-fill': m('#0B141166', '#4A5A5470'),
      '--dsw-alias-button-tool-bar-fill-invisible': m('#0B141133', '#16241F5C'),
      '--dsw-alias-button-tool-bar-hover': m('#0B141188', '#4A5A5499'),

      // Interaction
      '--dsw-alias-interactive-bg-active': m('#00594F1A', '#CEDC0026'),
      '--dsw-alias-interactive-bg-hover': m('#0B14110F', '#EEF3EA14'),
      '--dsw-alias-interactive-bg-hover-accent': m('#00594F14', '#CEDC001F'),
      '--dsw-alias-interactive-bg-hover-danger': m('#D4160B14', '#FF3B3026'),
      '--dsw-alias-interactive-bg-hover-solid': m('#E8EBE4', '#102420'),

      // Labels
      '--dsw-alias-label-caption': m('#5E6B64', '#9BAA9F'),
      '--dsw-alias-label-dimmed': m('#DDE3D9', '#163029'),
      '--dsw-alias-label-primary': m('#0A1613', '#EEF3EA'),
      '--dsw-alias-label-primary-bluish': m('#004A42', '#A9E5DC'),
      '--dsw-alias-label-primary-dimmed': m('#16241F', '#DCE5DC'),
      '--dsw-alias-label-primary-foreground': m('#FFFFFF', '#06110E'),
      '--dsw-alias-label-primary-inverted': m('#FFFFFF', '#06110E'),
      '--dsw-alias-label-secondary': m('#2C3C36', '#C3D1C8'),
      '--dsw-alias-label-tertiary': m('#4A5C55', '#9BAA9F'),
      '--dsw-alias-link': m('#00665E', '#CEDC00'),
      '--dsw-alias-menu-icon': m('#16241F', '#DCE5DC'),

      // Markdown and code
      '--dsw-alias-markdown-citation': m('#E8EBE4', '#102420'),
      '--dsw-alias-markdown-code-block': m('#EDF0E9', '#04100D'),
      '--dsw-alias-markdown-code-block-banner': m('#E2E7DE', '#0A1A16'),
      '--dsw-alias-markdown-code-segment-selected': m('#FFFFFF', '#10261F'),
      '--dsw-alias-markdown-code-segment-unselected': m('#E8EBE4', '#04100D'),
      '--dsw-alias-markdown-inline-code': m('#E9EDE6', '#0C1F1A'),
      '--dsw-alias-markdown-placeholder': m('#E8EBE4', '#0A1B17'),
      '--dsw-alias-markdown-tag': m('#E8EBE4', '#123029'),

      // Scrollbars
      '--dsw-alias-scrollbar-bg-l1': m('#0B141114', '#EEF3EA14'),
      '--dsw-alias-scrollbar-bg-l2': m('#0B14111F', '#EEF3EA1F'),
      '--dsw-alias-scrollbar-hover-l1': m('#00594F99', '#CEDC0099'),
      '--dsw-alias-scrollbar-hover-l2': m('#00706A99', '#DFEC2E99'),

      // State colours: teal for secondary marks, amber for warnings, F1 red
      // for errors, and a green that stays distinct from the lime accent.
      '--dsw-alias-state-business-primary': m('#00A38F', '#3FD9C4'),
      '--dsw-alias-state-business-tertiary': m('#D9F3EE', '#082B26'),
      '--dsw-alias-state-error-primary': m('#D4160B', '#FF3B30'),
      '--dsw-alias-state-error-secondary': m('#E8443A', '#FF6E63'),
      '--dsw-alias-state-idle-primary': m('#8C9A93', '#4A5C55'),
      '--dsw-alias-state-success-primary': m('#1E7B4F', '#4ADE80'),
      '--dsw-alias-state-success-secondary': m('#2E9463', '#34D399'),
      '--dsw-alias-state-success-tertiary': m('#DCF0E4', '#0D2A1C'),
      '--dsw-alias-state-warn-label': m('#7A6200', '#F2E07A'),
      '--dsw-alias-state-warn-primary': m('#B58900', '#E8D33A'),
      '--dsw-alias-state-warn-secondary': m('#CFA000', '#F0E45C'),
      '--dsw-alias-state-warn-tertiary': m('#FBF3D0', '#2C2A10'),
      '--dsw-alias-code-diff-added': m('#1E7B4F14', '#4ADE8018'),
      '--dsw-alias-code-diff-deleted': m('#D4160B14', '#FF3B3018'),
      '--dsw-alias-file-diff-added-bg': m('#E4F2E9', '#0C2418'),
      '--dsw-alias-file-diff-added-gutter': m('#EFF9F3', '#081A12'),
      '--dsw-alias-file-diff-added-marker': m('#1E7B4F', '#4ADE80'),
      '--dsw-alias-file-diff-deleted-bg': m('#FBE8E7', '#2A1413'),
      '--dsw-alias-file-diff-deleted-gutter': m('#FDF0EF', '#1E0F0E'),
      '--dsw-alias-file-diff-deleted-marker': m('#D4160B', '#FF3B30'),

      // Surfaces, menus, and dialogs
      '--dsw-alias-settings-card-fill': m('#FFFFFF', '#0A1B17'),
      '--dsw-alias-settings-card-stroke': m('#0B14111F', '#EEF3EA1F'),
      '--dsw-alias-toast-bg': m('#0A1613', '#EEF3EA'),
      '--dsw-alias-toast-label': m('#F2F4EF', '#06110E'),
      '--dsw-alias-tooltip-bg': m('#0A1613', '#EEF3EA'),
      '--dsw-alias-tooltip-key-bg': m('#1C2E28', '#DDE3D9'),
      '--dsw-alias-onboarding-accent': m('#00594F', '#CEDC00'),
      '--dsw-alias-onboarding-card-fill': m('#FFFFFF', '#0A1B17'),
      '--dsw-alias-onboarding-checkbox-border': m('#0B141142', '#EEF3EA42'),
      '--dsw-alias-onboarding-secondary-fill': m('#E8EBE4', '#102420'),
      '--dsw-menu-surface-fill': m('#FFFFFFF0', '#071512E6'),
      '--dsw-menu-backdrop-filter': m('blur(22px) saturate(140%)', 'blur(22px) saturate(140%)'),
      '--dsw-specific-menu': m('#FFFFFFF0', '#071512E6'),
      '--dsw-specific-bubble': m('#FFFFFF', '#0C211C'),
      '--dsw-specific-bubble-highlight': m('#F6F8F2', '#12302A'),
      '--dsw-specific-input-major': m('#FFFFFF', '#061512'),
      '--dsw-specific-login-input': m('#F8FAF5', '#061512'),
      '--dsw-specific-selector': m('#E8EBE4', '#0C1F1A'),
      '--dsw-specific-sidebar-fill': m('#E7EBE3', '#040B09'),
      '--dsw-specific-sidebar-nav-item-active': m('#FFFFFF', '#0E241E'),
      '--dsw-specific-sidebar-nav-item-active-accent': m('#00594F', '#CEDC00'),
      '--dsw-specific-sidebar-nav-item-hover': m('#DDE3D9', '#0B1B17'),
      '--dsw-specific-tip': m('#FFFFFF', '#0C211C'),

      // Shape, focus, and depth
      '--dsw-radius-xs': m('2px', '2px'),
      '--dsw-radius-sm': m('4px', '4px'),
      '--dsw-radius-md': m('8px', '8px'),
      '--dsw-radius-lg': m('12px', '12px'),
      '--dsw-radius-xl': m('16px', '16px'),
      '--dsw-radius-panel': m('18px', '18px'),
      '--dsw-focus-ring-color': m('#00594F', '#CEDC00'),
      '--dsw-focus-ring-width': m('2px', '2px'),
      '--dsw-elevation-stroke-color': m('var(--dsw-alias-border-l4)', 'var(--dsw-alias-border-l4)'),
      '--dsw-shadow-lv1': m('0 1px 0 #0B141114, 0 0 0 1px #0B14110F', '0 1px 0 #00000080, 0 0 0 1px #EEF3EA0A'),
      '--dsw-shadow-lv1-blur': m('0 6px 16px #0B141114', '0 6px 16px #00000066'),
      '--dsw-shadow-lv2': m('0 2px 0 #0B141114, 0 12px 26px #0B141116, 0 0 0 1px #0B14111F', '0 2px 0 #00000099, 0 12px 26px #00000066, 0 0 0 1px #EEF3EA1A'),
      '--dsw-shadow-lv3': m('0 24px 60px #0B14111F, 0 0 0 1px #0B14111F', '0 24px 60px #00000099, 0 0 0 1px #EEF3EA1F'),
      '--dsw-linear-gradient-think': m('linear-gradient(180deg, #FFFFFF 20.19%, #FFFFFF00 100%)', 'linear-gradient(180deg, #0B1B17 20.19%, #0B1B1700 100%)'),
      '--dsw-linear-think-select': m('linear-gradient(180deg, #E9EDE6 20.19%, #E9EDE600 100%)', 'linear-gradient(180deg, #10261F 20.19%, #10261F00 100%)'),

      // Theme-local livery values.
      '--amr-green': m('#00594F', '#00665E'),
      '--amr-lime': m('#A8BA00', '#CEDC00'),
      '--amr-lime-bright': m('#CEDC00', '#E6F23E'),
      '--amr-carbon': m('#0A1613', '#050B09'),
      '--amr-chalk': m('#F2F4EF', '#EEF3EA'),
      '--amr-streak': m('0.05', '0.12'),
    };

    const CSS = String.raw`
      body[data-amr-f1-theme] {
        background-color: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        accent-color: var(--dsw-focus-ring-color);
        -webkit-font-smoothing: antialiased;
      }

      body[data-amr-f1-theme]::selection,
      body[data-amr-f1-theme] ::selection {
        background: color-mix(in srgb, var(--amr-lime) 34%, transparent);
        color: var(--dsw-alias-label-primary);
      }

      /* The nose stripe: deep green into racing green, a lime flash, and a
         chalk-white sliver, cut at an angle as it leaves the window. */
      body[data-amr-f1-theme]::before {
        content: "";
        position: fixed;
        inset: 0 0 auto 0;
        height: 6px;
        background: linear-gradient(90deg,
          var(--amr-carbon) 0 12%,
          var(--amr-green) 12% 46%,
          var(--amr-lime) 46% 78%,
          color-mix(in srgb, var(--amr-chalk) 78%, transparent) 78% 100%);
        clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%);
        box-shadow: 0 1px 0 color-mix(in srgb, var(--amr-carbon) 24%, transparent);
        pointer-events: none;
        z-index: 2147483000;
      }

      /* Speed streaks trailing the car in the bottom-right corner: lime
         motion lines faded into the workspace so they read as a texture. */
      body[data-amr-f1-theme]::after {
        content: "";
        position: fixed;
        right: -90px;
        bottom: -70px;
        width: 420px;
        height: 300px;
        transform: rotate(-10deg);
        background: repeating-linear-gradient(112deg,
          var(--amr-lime) 0 2px,
          transparent 2px 16px);
        opacity: var(--amr-streak);
        -webkit-mask-image: radial-gradient(closest-side at 72% 32%, #000 0 16%, transparent 76%);
        mask-image: radial-gradient(closest-side at 72% 32%, #000 0 16%, transparent 76%);
        pointer-events: none;
        z-index: 2;
      }

      /* The selected Session row runs a three-pixel lime race line down its
         leading edge over a racing-green wash. */
      body[data-amr-f1-theme] [role="treeitem"][aria-selected="true"] {
        background-image:
          linear-gradient(180deg, var(--amr-lime) 0 100%),
          linear-gradient(90deg, var(--dsw-alias-interactive-bg-active), transparent 92%);
        background-size: 3px 100%, 100% 100%;
        background-position: left top, left top;
        background-repeat: no-repeat;
      }

      /* Every composer card carries the green-to-lime edge and lights up lime
         while focused. */
      body[data-amr-f1-theme] [data-composer-card] {
        background-image: linear-gradient(90deg,
          var(--amr-green) 0 40%,
          var(--amr-lime) 40% 76%,
          color-mix(in srgb, var(--amr-chalk) 78%, transparent) 76% 100%);
        background-size: 100% 2px;
        background-position: top left;
        background-repeat: no-repeat;
      }

      body[data-amr-f1-theme] [data-composer-card]:focus-within {
        box-shadow:
          0 0 0 1px color-mix(in srgb, var(--amr-lime) 55%, transparent),
          0 0 28px color-mix(in srgb, var(--amr-lime) 16%, transparent),
          var(--dsw-shadow-lv2);
      }

      /* New Session wears a lime underline. */
      body[data-amr-f1-theme] button[class*="newSession"] {
        background-image: linear-gradient(90deg,
          var(--amr-green) 0 40%,
          var(--amr-lime) 40% 76%,
          color-mix(in srgb, var(--amr-chalk) 78%, transparent) 76% 100%);
        background-size: 100% 3px;
        background-position: bottom left;
        background-repeat: no-repeat;
      }

      /* The wings plate that replaces the shipped brand marks. */
      body[data-amr-f1-theme] .amr-plate {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: none;
        overflow: hidden;
        border-radius: 26%;
        background-image:
          linear-gradient(180deg, var(--amr-lime) 0 100%),
          linear-gradient(150deg, #0B1B17 0%, #00312C 52%, #00665E 100%);
        background-size: 100% 15%, 100% 100%;
        background-position: top left, center;
        background-repeat: no-repeat;
        box-shadow:
          inset 0 0 0 1px color-mix(in srgb, var(--amr-lime) 55%, transparent),
          0 1px 2px color-mix(in srgb, var(--amr-carbon) 45%, transparent);
      }

      body[data-amr-f1-theme] .amr-plate__wings {
        display: block;
        width: 90%;
        height: auto;
        -webkit-user-drag: none;
        user-select: none;
      }

      /* The brand row greets by time of day, name picked out in team colour. */
      body[data-amr-f1-theme] .amr-rail {
        filter: drop-shadow(0 2px 6px color-mix(in srgb, var(--amr-carbon) 45%, transparent));
        transition: transform .18s ease;
      }

      body[data-amr-f1-theme] .amr-rail:hover {
        transform: translateY(-1px) rotate(-1.5deg);
      }

      /* The wings mark: the logo itself, unboxed, in the theme's text colour. */
      body[data-amr-f1-theme] .amr-wings {
        display: block;
        max-width: 40px;
        aspect-ratio: 4.51;
        background-color: var(--dsw-alias-label-primary);
        -webkit-mask-image: var(--amr-wings);
        mask-image: var(--amr-wings);
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
      }

      /* Brand lockup: the wordmark, the live greeting, and a racing-cut rule.
         Nothing is boxed — the logo and type carry the row on their own. */
      body[data-amr-f1-theme] .amr-lockup {
        display: flex;
        flex-direction: column;
        gap: 1px;
        min-width: 0;
        max-width: 100%;
      }

      /* The wordmark is the supplied artwork, used as a mask so it picks up
         the theme's text colour in both light and dark. */
      body[data-amr-f1-theme] .amr-lockup__logo {
        display: block;
        width: 115px;
        max-width: 100%;
        height: 11px;
        background-color: var(--dsw-alias-label-primary);
        -webkit-mask-image: url("data:image/png;base64,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");
        mask-image: url("data:image/png;base64,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");
        -webkit-mask-position: left center;
        mask-position: left center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
      }

      /* The rule ends on a diagonal, the way a livery stripe leaves a panel. */
      body[data-amr-f1-theme] .amr-lockup__rule {
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,
          var(--amr-green) 0 40%,
          var(--amr-lime) 40% 76%,
          color-mix(in srgb, var(--amr-chalk) 78%, transparent) 76% 100%);
        clip-path: polygon(0 0, 100% 0, calc(100% - 7px) 100%, 0 100%);
      }

      @keyframes amr-pulse {
        0%, 100% { opacity: .55; transform: scale(.86); }
        50% { opacity: 1; transform: scale(1); }
      }

      /* Composer timing strip: five start lights, the team name, the chassis
         code, three sector ticks, and a DRS pill. */
      body[data-amr-f1-theme] .amr-strip {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 20px;
        margin: 4px 0 0;
        user-select: none;
        pointer-events: none;
        animation: amr-strip-in .5s ease-out both;
      }

      body[data-amr-f1-theme] .amr-strip__lights {
        display: inline-flex;
        gap: 3px;
      }

      body[data-amr-f1-theme] .amr-strip__lamp {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: color-mix(in srgb, var(--amr-lime) 16%, transparent);
        animation: amr-lamp 3s ease-out both;
        animation-delay: calc(var(--amr-i, 0) * 0.12s);
      }

      body[data-amr-f1-theme] .amr-strip__label {
        color: var(--dsw-alias-label-tertiary);
        font-size: 9px;
        font-weight: 800;
        letter-spacing: .22em;
        line-height: 1;
        text-transform: uppercase;
      }

      body[data-amr-f1-theme] .amr-strip__dot {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: var(--amr-lime);
        opacity: .85;
      }

      body[data-amr-f1-theme] .amr-strip__code {
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        font-weight: 800;
        letter-spacing: .14em;
        line-height: 1;
      }

      body[data-amr-f1-theme] .amr-strip__sectors {
        display: inline-flex;
        gap: 2px;
      }

      body[data-amr-f1-theme] .amr-strip__sector {
        width: 3px;
        height: 9px;
        border-radius: 1px;
      }

      body[data-amr-f1-theme] .amr-strip__sector--lime { background: var(--amr-lime); }
      body[data-amr-f1-theme] .amr-strip__sector--green { background: var(--amr-green); }
      body[data-amr-f1-theme] .amr-strip__sector--steel {
        background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 45%, transparent);
      }

      body[data-amr-f1-theme] .amr-strip__drs {
        padding: 1px 4px;
        border: 1px solid color-mix(in srgb, var(--amr-lime) 55%, transparent);
        border-radius: 3px;
        background: color-mix(in srgb, var(--amr-lime) 12%, transparent);
        color: var(--amr-lime);
        font-size: 8px;
        font-weight: 900;
        letter-spacing: .16em;
        line-height: 1.5;
        animation: amr-drs 2.6s ease-in-out infinite;
      }

      @keyframes amr-strip-in {
        from { opacity: 0; transform: translateY(3px); }
        to { opacity: 1; transform: none; }
      }

      /* Lights on one by one, then away: all five go out in a wipe. */
      @keyframes amr-lamp {
        0% { background: color-mix(in srgb, var(--amr-lime) 16%, transparent); box-shadow: none; }
        5% { background: #FF2D2D; box-shadow: 0 0 7px #FF2D2D; }
        66% { background: #FF2D2D; box-shadow: 0 0 7px #FF2D2D; }
        76%, 100% { background: color-mix(in srgb, var(--amr-lime) 22%, transparent); box-shadow: none; }
      }

      @keyframes amr-drs {
        0%, 100% { opacity: .5; }
        50% { opacity: 1; }
      }

      @media (prefers-reduced-motion: no-preference) {
        body[data-amr-f1-theme] [role="treeitem"] {
          transition: background-color .12s ease;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        body[data-amr-f1-theme] .amr-rail { transition: none; }
        body[data-amr-f1-theme] .amr-strip,
        body[data-amr-f1-theme] .amr-strip__lamp,
        body[data-amr-f1-theme] .amr-strip__drs {
          animation: none;
        }
        body[data-amr-f1-theme] .amr-strip__lamp {
          background: color-mix(in srgb, var(--amr-lime) 22%, transparent);
        }
      }
    `;

    const NS = 'amr-f1-theme';

    /** The wings artwork, keyed to a transparent white glyph. */
    const WINGS = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAApCAYAAABjlyZNAAAY80lEQVR42u1dZ5hV1dV+1507hTIU6SIiDNIUQQXk0aifJfaCNUFDTIKxRgmoiSXoZ0M0ib1rRGNUnmhQMdiIGqNGRSwgRVQQwUIZGIaBKcyd+34/5t26sr9zh0ExQDL7ee5z7j1ln73XXuVd5ZxrJM8H8DSAPABZJDdD41pjz2vM+dS2DsCuAM4EsBeAagA/ADAHQL7rh/j2zaLvlmO/H2MhgAEADtG4AOBTALsDWAXAzCz7TQZDMs/M6kieDeAW3ftLAPcBeBXA59HcmUC/XNtN0VK6fyWAa9z8bwHwBIBl4is0Yp0bRZJvubZ1Gk8tgLYA7gLJi7AVNJIFJB9hfXtxCx3jSSQrNMZ7tC9N0r7BJ49kimQvkqvV50skd9gC570vyUrN/cithJ+KSX5sJCsBDAEwTxq1bgscbxrAegAFAN4EsAuA083sbpLNJNGbs6UAFJjZWpJnArhd4x1oZh98y4W6A8AZAD4BsJuZrSZZIG3IzThnc3OfrjU51cz+QLLI8RG3MF7KM7MakjcBOBfSLE9iK2kkdyO5luTnJFttoWN8W3S9jmR7kp1JttuIT3tttyM5j2QdyRFb6FzP0Fyf3op4aCDJGsrUBk3yVwArhWkDZs1+x9qjsbgvJY0ScNwxAFoD+CeA+QCau+NhPqbx1+n6PNcfI5wf7gF3bWoj5hH6yGi7N4DtdSwT3dcS5pd1+/1YsgCK9P0ZAKX6nad+89wck/wTbMAnYDRnP5fQZ34OHyvsO0Rr8abWIq1jGVnsbA66bSqfhA34gBb5cllZ5n0A7AhgrpG8F8Ao/Oe3mFDx903Z1gOoEcFTkVDVJSxSWgyTihYypX4MQKtGCuW3pc9/S1sG4HiTSTgKQD8AI4TlygCcrShGHB2yDUiu5dAoMW6MfwetU+e0Gh0TZfVJA6gAsB+AqwG8Li2U0idfWrIZgO4AngPwEICxzpegIhct9T1g1ko33jxta3Vd0CAFOj9jZqWiX5EsZ0v1k9E4CnR9ndsWRrQJvk3K0doivyalPjMSiGJnBda7OZnGsD6yPN6XykY+VdpF2+jG+KYs6wEAVqu/Kt2jGkBXWeBy+Sg1jmZwAp/SPdJunVMJQpcrWpVtgN9iDR/zXQbAOgA/kpLPAvgjgHcBPGNmi9IkzcymAJhC8i8A3lGIqIeZTdrMWC1fi5GSmW2jBe4uBqkR3LgHwFoAHXR+OwDtAbQQ4deZ2SrXbxGAI81scnS/wQCOBPAWgBkA9nRms06Mv9DM3ifZleQ5AEokhE+aWbn62RnASjP71PXdGUAnM5sZ3bMTgEJ/rva3AVBsZkvcvq4AdjWzF92+vQFso8VfYmbvktwFwA6iUVaMXA1gLoA+AF6UwltuZstcXx0B9DWz10mWq48pUjhl+qzTtrfo/RqAbgCWS6uWA1ije2cAVJoZNyMPpQDcKYX0oJmd5o8FC5AGkDazapKXArhcDDXIzBZ8C+Zt5rRxoTRXCzHoNhK0DmLstPYVa7uNY+LGtqyEokxMWwpgsKT+J9J46wGcCGAS6uP3c3XtWQAmCGsfD+B6WZYWErgKacJnpR1vBTAVwAcAhgHYCcApZvY8yRcAbAtgqKwKAYyWFhrgsHUtgHEARooxDUDKzGpJPqTrRirCVEPyBgA/F8OVi3YLUJ8bmCPhvVM0OEF0b4f6vESN5nwpgF4Afq8x7y3mBYBTAVwoof5A27lO8bT5BjBppZCEF44KrdUqAF9ovcq1LXWWrVKfmm8qRCSvAnCJ1m4ggM+c1cukUZ+pySjSkEJ9EuNnWvSJJMdq8BAztxZhiwF0dNq2rTpuLbzaRsfa6fvGtmoJ4UoxQoUWagmApSLel3JmLtD+o3VOSlpvmBadZkaSddqeqXv83MxGi1CjATxtZieS3EeEugBfJ7ZeMbOTSO4nDTrazG52hH4cwKMkt9NY9gcwWQ77OtGmNiwk600vFcbtBeAIM5tCMkuyt4T0WZ2zXhZhlARyuJlNJBngwR/N7EqS1wMYA6CrmY0leZYEdX8zW0jycAdBVuq+TwE4yMzKpAirAq3EfCNF0wAn+mv+iwVB24gPOgDoLGjUWvQv0qeH1mljWkZjXAagXBapTDBsvdZ/hbZlTnh8AGcwgF/q97VmtljJxfUeE0JCQJImSTkXwJPSDm9JOgvE+BvTqsTEizToCjfQ8FkmwkLaYaXGsBTAqqQsKsk8R/jVuqYEwERp1t2iS+qcoB+qeV8H4AyS4wUDPgAwnORlAK43swp3P7pozGgRfaLGkS/tehOA4QAO1eK/hvps8KNmdijJmgjHhnl11vdxJJ+Tpr9GTNpJEJXKBj8vS3oByQfc3DqRHCQF8IJo5zFxOoro1GnfSwB2lpI4OIoMpaTk3tPvLxTv76D5zRDNSgGUmdnaHBq4mRRkBynJYn0gq9JVSrKDzmsnIS8Uzft7Pm1kW6fxB36dAeA2CXhdnGCCE4IsyZQ00XBJ+E6S6CCV74mpl4ooX0pTlDstEUzaWjH1Wi91jTRdHQD0IdldGqS/GL5EIcYOCZftoe10ALMleFdEDuXZAPpKe7SS43+jnORrAfwvgPNIHmdm00g2d44fRI/PJdyUYAdhr9P4msv5HgNgOskJ0piFjtZ1WpAdAdwA4DwAx5FcLHx9H4Afivnz5Giu0ML2Q31ZyNui8dn6/AnAObpPVeRswo2VYsK3dN93SN4taFfgnMi1gkqDRLPhjo6n6BN0xMcAFkqhLUJ9YvUT8ckK78s0JuuvcRQ6+NVaAlSksQefsL3gcgfxRYmDzau1DueZWUVQJjkFIBKCJ0k+Lxx7MICLtMAXm9m0TeCctAbQSYPtJ3NcoonsIMbIJfllwr6L5dG/r8W6QcS6UAuwl482SUvuJVhQJdx9DslbzewjAMeSHCDrdzWAaY5OgZlmAdjXQYl8M6uSM5snh3gYgLZm9pZgyO0APtZ44RaiUMx+hhbvOo3rcvX9U5KF8kVaArhL+3tIYI+TsN0j4d9OCsciK1OXEGHJAGgjp/nn6uNAACuEBAIMfUSK4UTd/xFBuxJZ2kFSJNs3AHNWkFyk+a+QXzFfCnQNgKVeQer7egeBG8tTkwD0lCCOA/C2mX0Y0RwNCkAkBFUAXgbwMskhItB1ipYwYOsGpLiTiNNBGqQvgC7a38Mli+JWI8tSKsaZo0ktD4TzBJO16KFjByipVxCZfohp3jazcbruIwB/BvB9RU4eVISnXNoDLtoU5nkTgGMBXGhmVwPIKKo0QQv7CoDzAQQa3iFhv0aWw7cuEoKVsjxz5D88BOAoMXsfAL8GcJOZXaVxt5PTPkTjWgDgNlnnh8xshGP8rJs/XJi1GkC1xnivBO1W0T3Mu71gzhKN1UTjDwG8ZmY3ujVo66zzthKG/nLY22msQ3Ks9XySnwpaLnDrXalo2soGmD4taHsUvi7Gu9DMHnNRoJx8mhNbSQjMRSt+JWgxSD7CzQCKSHaROdpeDL6TtHqJFq+wgejALJnMj0Toz8R4i8XkVQkT7gpgN2H5XXWP3tFpzbV9UDHgSpLbyKEbIeE0OXPlAC4TLc4nuVAm9ceCHpAQmxyof5A8FcCtJI+QX1Oi+YwQQ7YS/jSSLcxsAskdAeyuPlNyYHfWWGvFWE+JximNyxxkGyU4lpG2PleRrSo5vTNJXghgAskPAFylMaTC2HWvUMHZVmM3ks3N7DaSAwF8z+HngPs99LlGH5B8VQz7ksLns81sRsKatZcAdRc/9JKD2ku07qv8U2LCiuQ8Kb/PpWQ+krCsknXpCOBKnT8FwF8k0LUbqsS1xsZSJRB3AjhdRJ8jLdvbOYi+1UpzlAkLzheTr9JkPjWzFRu4b4ge7Ctm6altnHWdL8jziohziLz/NwXh7jazM0jubmZvR/coURx+LsnDtEDPmFm1rz+Smf7C7dtGFtEAfG5mr0Z9ronnR3LbqI/mAHqZ2axcdU+CAflmNic6truEJC0tuUL7hynv8T7JFgD6BaaUzzHYzN5QVem6hDH2MLNPxHQdtFadte4ZKcB9tBaxBV8tOPqxoOB7ABb4HEzCHFvKt+smRdpVCmWAkEJnbZNaqXisWMKUVcHgzFBKvklqchTTrxNB3pGJQ4QnH9dzBYukWVYp0VLZyHv0FIYdqk9PafhUFBoL1uJFMf2ipFyF8OAPNO7nhOkLhNPTLsNc5TLP1a7soJmbW7nLZeSpn+D418rihZxHiG/XafHokkLrdU6NrgklE4UusxtKIgrE/CGr3Mqdm3GhVboq3gLtz8hBXK/5NXe1UOvEaCGrm+cy1mnNK62IWmDwg2K/T7Cur3hhmJKGPcTAccnBe4I0L0k4FpjZmkbyRTsXTm8vf/FU8Uf8rMFvzexXjWX+jRGANICsrMCuiqwcEIVF58shfQXAS2Y2r4H+tpU5HCintKdMYkF06nwRbhqAmRKuxWaWydFvPy3G0XLQuqGpbYo2XRGjJwC8k0ujqzq3r+i+txRZr4SI3UKt7WyVUyyUIlvTgJXoK4i5k2CaT5B+rAhYgEFsbOLMNjJyYy6Rs4tw2/Fi3ljy3xYEmSEN1EHS203bNglEWQDg7yL2EmmK2g1YpoEyyYcr+eQjRS9IOx4trXiHYt7F0t4QvBrjzGy5nNAnJJAZ5wSPUbY1peDA76XtTwZwmug5XscGCStXof5ptlIADwvzHiuNdpfoc4n8k5MB/AHAo8rkniZrNybE/6UwVkgLrtN9LhGmL1X0Y5asT7XG30V97eng6bMAHpDf1UJzpXyHwfJpJslxHerouliafJIw/2eN0OB9BZWHKTfSR1Et3z4UVF6k8VdoDt+TMtsuOn+mlO1UOeQVuSI9m7y2Qp6139eR5IEkbyP5DjfcPiH5F5LjSB6mGv/iHPfKT3iSZx+SvyX5RtTvhyTvI3mkwpLhmgk6vpzkcdo3gOQ9JNfo2FKd1zthHM01NypTe4kiPyA5mORiHbvAXfOg9l2s371Ugz5Tv/vo+FP4+qkqkpzs5jmfZBXJ/UM9EcnpOu9+d68B7hmEBSSPz7F2J5J80dFrBslzZeFB8g/aX0Fyz6h+/kyS05SVDm0VyadInkqyb5ysjNfOHeuu+Z5M8naSL4iuDbXlJJ/ROIa4UK1Pjv57i4w0ybyEiQ8RYZ8TkXxbT3I2yYsVl0fC9fHkOpA8lOQDWmDf3hLjDpNT+S/QLSwCydNIrhOhp7vrl2os3bxlCUJO8giSX+jchSQPdOcd5ATIM/8p2jeTZAuNY6z2XaM57q3fz+p3Gz3oU6mQIkieoHM+FgyAivBmhQeZnCAWk7zazevBoARIFnqlRXI/MW5on0rYSPJvSj6G6+K1KCF5PMnHE9b2H6Ll7jmK0uJ9nbWu95MsVzmOb+9JKI8iuX0OXvl//ILNUHFnScLgCHYiyT+RnJsg2R+RnCRt0Ft9FZEcRPKnWqhSd35Wz8aOlT+SRJR8r33EXMeTXBEJ4tVK1cMteEGoGCV5rTv/fseYRvJ77lndy929m0lQ6J+PJTlZ+76v30P1+6+uzye173D9zif5tPZd6gMGsnaUUshzx44SQ1NMfWAk2OZ+9yH5frQek7w2D1ZYQhxb/i4kDyZ5J8k5UT/vkryB5PdJbqvrizXvS0i+IoH3rZrkP0leSnLPsBYJDL/5mX4DwlCQwzo0k6YeJ21RHRGgXKZ8DsmM279ID8SfIEcXDRAmL7Icv9BjhaG9qsUhyQ9IHhM5+yDZn+RrOqdMmVIEoks4g1UYr30ttL1K+x919GiufiqFiQN0oorowv3HSsCvc/v667pywag87e8tKEmSt4pRmzsrMdnN+Qon2GGOrUmOD48GCl6URoIwrDF0DvMnuYfm//dIm38pbT4/QQEuljU5eQNrm8LW2HJBJbe4PxUBFkeEyUpA5pL8idfUHt5omxeZ+K4SsiWuv6cDs0u73++O3e4Yc5SDNa+R7O8y2yDZzzHeRFfwBZI7i1nXSUsHgTnUMZVFAjDZjXsX7ZvlYYP8HZL8U3S/XcRcJPm7YMXwr8/rVun4KyT7OOgWNH8pyVO0f3uSl7n5BcE4OAdT5ifhfGn5u7V+NQlM/wbJ60ke4n21GE1ssVp+U0ClBGzZSc7tzcL1cVumxThDEaik/nfUg+jL3HWPktwrCYsKqy/VefNIPuZM8ZUOdxc6OBesyb0S7iKnlafo2NXRdeMl0Gf5RFaCBSgQ3q9VMi0okLZiyjoxjTnsP9BBu5uccgj33sMFC5ZK2QSH83klG+Hhhh7IPzfBco6I/axQBiEodKM0fSZau1Ukp2rtBiRAqa1by38HjnRaMGOMFml1RNBKwZgJJI+WFXlYmjcw8J3eyY6EL985x61Jvun6rvXvSnKaf1uHcye5PgOkONg5ym00t6DtZ+rYgOjtFl+9kcON5w7t/1kkRCOdY52vT5ETpgBfrnDzKnTffXQuE6JTESxKRRCymOSPhct9pG08yeGyzI9FFiO0WSQnyvfq/h8Hbb5DYUjnCJsdJILOaSBUtkqOa6+436g/Hzm5SmG/rLQvJUgPh2iGohXvushLgRgwvLyquRvXDyOm6imhmuedUGluH/YMAnBMBHe+spjC1uHZgDC3tINUwan8tbMop7ioUZVzkKfr4Z4gyKlYWUQ0HE7y5QZoXykLfamsTrNcDP8fB22+I6iUStIQLpJwpaJBIaIzWRlmT/BUkpDp+05Os1WQPF3v4xlN8rMo+jMjYH4xcUs5faGvS8Kb2+L8hawTSd4aWZSA96dEeL+95rPcnRsEYB93rKujUZHD3sE5v9PlBqj4/56Cmo97BzlXLD0WBO07zIWTVyjceoJXOpElb9Ly37F1uEELuURRpoKERcv315I8y2nLaQlJnM4kz1eI1kOj8/Vwe2ydygS7+sfCpzAlSR4bCcDOEQRKBe2o3ECW5L6uv/CKxZt13X1IfuHTtEgzPyYn3KIQ6NmKLAVfoCRh7OYsVpFzrOvkT+yWsE7pJi3/77EO+S5LG5zAq5zm8e/kLHQ4fpJjjt84CBHO9/mDlx20Cm21stg/UBz84ZDgirReWg7ylxKeThE02iWCQObmdLmOjQ4OrbMCrZQMzCqhNYDkec5KUcJdLUYd5ZRAQcTUg52DXBbOdfMoklJJO+v7UeToFzVp+c0nDAGCXOGg0Dk5zj1c+QQqtLp/jH+dwBQpakE5yCUkD1AyryxKz2cV6hsZQqnunnu6bK854TUxLgXdzMMNZdJJ8vWkEnFFtjISzLoo+XShwpkjXTRmhBe+SBCbOSsaEmtdciQ0n3WQsSSpLKapbR5rUOwWhyrBONpllG+OwqLtvdaPIEihzgllFl0S6p5GRJYktJWK0txF8mc6J+ssk3c0+wWIkiOsWCqB/oUs1VQ56XGI8TM58rsmZE5P1Tl1LgeSn4T5heMXudKLk2Rdd9D9V7p7jtws9TdNLVkInCm+O2KOhS6ptca9DsUzfDrSjCFBNjvUByWF7Ej+SMz9qhzyqRGT+FYlH2WRmOsNaeuMrMhLEpxPFKVZ0UC0ZbYSd5fJ8iyIYvjpKDp0lpv/gQkwzfsFLZ3whwz8qqhm6Kgm5t9ChUDfDyH5RKQps2LCKcLL+8UOtfDxRFef1DNBSwah6S7GqCa5hzu+jcoVjlWlaUZ4fL7734CGWp0rD5jnEnRnkfwfaWPP7KF68/ZYu0cw53wnBAcn0K+jShF+JwHLJlTZXuRqoZqYf0uFQ+73TiqHeNZFOxhpswdU+vBjVyE6S8/vegfPIp8jRHbucsITZ7YPclWZzSQc3RTLr3VwbJ5jzmOUtGqrWh+SnJ3jz0LyFK1aLkuwRzRGizLCY3ReRpDwGJIXkHw9h8WZJ4t6nH8NfRPzbwWOcY7nFQ5VmcQbUU27bzUkfx1j6Sh8uZs05HLF1H1UxRwEuVd9jnKw4xF3r2tdGHWeq8s53EVtQoZ6WAxZHKOPCeHcBsrJC1R39U6CD+H9l0kkf6UQbVJpeVNocyvLHaQTmCGtJNIoQZ75CUyxQrj8YkV/Wrp6pZBcOtdXvkb3KHTJtG76PdX1f1mU/d1BNTQhknUyvi6CyypJZ5GvEoStlSu1+A3+tVT5JEV4PkyYY6WK/a4luX8IDORIZDUx/lYOjayBRFoLafUrBJfW5SjEu8/V0/w16r9ZVJ06VIz7shzL51xf46LMb9DkrVxMPiM/Ymj01Fg6R+3UHs7Z/7Mealmd49mLWwT5OiX005TI+i8SiHSOEu2Oqnu5VmHQ9TkKvX6r0GHHhD4u0nk3RmUHv0yCE85Zbaey5WAJxiqRtjYhx1BAsi/JX8rPqEwY52rlLhJhTZOW/+/6R5CGIkhf/XuLf6hajLk96v+MYwiAg1D/cLaPtlSg/lUxf0P92xM6o/6lYa1Q/4B9eD3JOfpTv3TSWy3cu5daA3gM9e8cyqL+1YFt1P941L9NYwiAw/D1m+X8WGai/sUCf9cbHMoSIkPhj0ewOd/d39S2bLiUn+OvNYcquvRcAw4lXSixQm+SQxIES4AgpnLqqQl9JbXPlLs4XQ51UgFgfhOsSW7/B+M+2uUXIFR2AAAAAElFTkSuQmCC';

    /** Vector wings, drawn only if the raster artwork cannot be decoded. */
    function VectorWings() {
      return h(
        'svg',
        {
          className: 'amr-plate__wings',
          viewBox: '0 0 64 64',
          'aria-hidden': true,
          focusable: 'false',
        },
        h(
          'g',
          { stroke: '#FFFFFF', strokeWidth: 2.6, strokeLinecap: 'round' },
          h('path', { d: 'M23 22 L11 15' }),
          h('path', { d: 'M22 30 L7 24' }),
          h('path', { d: 'M22 38 L11 33' }),
          h('path', { d: 'M41 22 L53 15' }),
          h('path', { d: 'M42 30 L57 24' }),
          h('path', { d: 'M42 38 L53 33' }),
        ),
        h('path', {
          d: 'M32 14 L40 18.5 L40 31 L32 42 L24 31 L24 18.5 Z',
          fill: 'none',
          stroke: '#CEDC00',
          strokeWidth: 1.8,
          strokeLinejoin: 'round',
        }),
        h('path', {
          d: 'M27.5 34.5 L32 22.5 L36.5 34.5',
          fill: 'none',
          stroke: '#CEDC00',
          strokeWidth: 2.4,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        h('path', {
          d: 'M29.2 30.4 L34.8 30.4',
          stroke: '#CEDC00',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }),
      );
    }

    /**
     * The winged race plate: the Aston Martin wings artwork on the
     * racing-green plate, with a lime light bar across the top. If the embedded
     * artwork cannot be decoded, a vector mark takes its place rather than a
     * broken image. Decorative, so it stays out of the accessibility tree.
     *
     * @param props.size - requested square edge in pixels.
     * @param props.className - host class preserving surrounding geometry.
     */
    function PlateBadge({ size, className, max }) {
      const [artworkFailed, setArtworkFailed] = React.useState(false);
      const requested = typeof size === 'number' && size > 0 ? size : 40;
      const limit = typeof max === 'number' ? max : Infinity;
      const edge = Math.min(requested, limit);
      return h(
        'span',
        {
          className: className ? `amr-plate ${className}` : 'amr-plate',
          style: { width: edge, height: edge },
          'aria-hidden': true,
        },
        artworkFailed
          ? h(VectorWings)
          : h('img', {
              className: 'amr-plate__wings',
              src: WINGS,
              alt: '',
              draggable: 'false',
              onError: () => setArtworkFailed(true),
            }),
      );
    }

    /**
     * The wings mark: the supplied logo itself, unboxed, filled with the
     * theme's text colour so it reads in light and dark without a plate.
     */
    function WingsMark({ size }) {
      const requested = typeof size === 'number' && size > 0 ? size : 40;
      const width = Math.min(requested, 40);
      return h('span', {
        className: 'amr-wings',
        role: 'img',
        'aria-label': 'Aston Martin',
        style: { width: `${width}px`, '--amr-wings': `url("${WINGS}")` },
      });
    }

    /**
     * Which greeting the brand row shows, by local hour: morning until noon,
     * afternoon until six, evening after.
     *
     * @param hour - 0-23, the visitor's local hour.
     * @returns the locale key for that greeting.
     */
    function greetingKey(hour) {
      if (hour >= 5 && hour < 12) return 'brand.morning';
      if (hour >= 12 && hour < 18) return 'brand.afternoon';
      return 'brand.evening';
    }

    /** The brand row: a greeting that follows the clock, name in team colour. */
    function BrandGreeting({ t }) {
      const [key, setKey] = React.useState(() => greetingKey(new Date().getHours()));
      React.useEffect(() => {
        const timer = setInterval(() => {
          const next = greetingKey(new Date().getHours());
          setKey((current) => (current === next ? current : next));
        }, 30000);
        return () => clearInterval(timer);
      }, []);
      const greeting = `${t(key)} ${t('brand.name')}`;
      return h(
        'span',
        { className: 'amr-lockup', title: greeting },
        h('span', {
          className: 'amr-lockup__logo',
          role: 'img',
          'aria-label': t('brand.wordmark'),
        }),
        h('span', { className: 'amr-lockup__rule', 'aria-hidden': true }),
      );
    }

    /** Five start lights, the team name, the chassis code, sectors, and DRS. */
    function TimingStrip({ label, code, drs }) {
      const lamps = [];
      for (let i = 0; i < 5; i += 1) {
        lamps.push(h('span', {
          key: i,
          className: 'amr-strip__lamp',
          style: { '--amr-i': String(i) },
        }));
      }
      return h(
        'div',
        { className: 'amr-strip', 'aria-hidden': true },
        h('span', { className: 'amr-strip__lights' }, lamps),
        h('span', { className: 'amr-strip__label' }, label),
        h('span', { className: 'amr-strip__dot' }),
        h('span', { className: 'amr-strip__code' }, code),
        h(
          'span',
          { className: 'amr-strip__sectors' },
          h('span', { className: 'amr-strip__sector amr-strip__sector--lime' }),
          h('span', { className: 'amr-strip__sector amr-strip__sector--green' }),
          h('span', { className: 'amr-strip__sector amr-strip__sector--steel' }),
        ),
        h('span', { className: 'amr-strip__drs' }, drs),
      );
    }

    const zh = {
      'strip.label': '阿斯顿·马丁阿美 F1 车队',
      'strip.code': 'AMR25',
      'strip.drs': 'DRS',
      'brand.morning': '早上好，',
      'brand.afternoon': '下午好，',
      'brand.evening': '晚上好，',
      'brand.name': 'Sean',
      'brand.wordmark': '阿斯顿·马丁',
    };

    const en = {
      'strip.label': 'Aston Martin Aramco F1 Team',
      'strip.code': 'AMR25',
      'strip.drs': 'DRS',
      'brand.morning': 'Good morning,',
      'brand.afternoon': 'Good afternoon,',
      'brand.evening': 'Good evening,',
      'brand.name': 'Sean',
      'brand.wordmark': 'Aston Martin',
    };

    return {
      inject: ['theme', 'slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'amr-f1: locale');
        ctx.effect(() => ctx.theme.overrideTokens('@amr/dsh-theme', TOKENS), 'amr-f1: token overrides');

        ctx.effect(() => {
          document.body.setAttribute('data-amr-f1-theme', 'night-race');
          return () => document.body.removeAttribute('data-amr-f1-theme');
        }, 'amr-f1: body marker');

        ctx.effect(() => {
          const style = document.createElement('style');
          style.setAttribute('data-amr-f1-theme', 'night-race');
          style.textContent = CSS;
          document.head.append(style);
          return () => style.remove();
        }, 'amr-f1: global styles');

        /* The blank-session hero and the sidebar rail both wear the winged
           plate; the sidebar seat is a single slot, so -1 shadows the shipped
           mark the way the host documents. */
        ctx.slots.inject('conversation.hero.brand.mark', () => ctx.slots.register({
          name: 'conversation.hero.brand.mark',
        }, (props) => h(PlateBadge, props)));

        ctx.slots.inject('sidebar.brand.mark', () => ctx.slots.register({
          name: 'sidebar.brand.mark',
          priority: -1,
        }, (props) => h(WingsMark, props)));

        /* The timing strip sits under the composer, after the shipped
           activity and usage cells. */
        const t = ctx.locale.bind(NS);
        const Strip = () => h(TimingStrip, {
          label: t('strip.label'),
          code: t('strip.code'),
          drs: t('strip.drs'),
        });
        ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
          name: 'conversation.composer.dock',
          id: 'amr-f1-timing',
          order: 2,
        }, Strip));

        /* The brand row reads as a time-of-day greeting. Single seats hold one
           occupant per priority, so the documented -1 shadow replaces the
           shipped wordmark at the same level. */
        const Greeting = () => h(BrandGreeting, { t });
        ctx.slots.inject('sidebar.brand.name', () => ctx.slots.register({
          name: 'sidebar.brand.name',
          priority: -1,
        }, Greeting));
      },
    };
  },
});
