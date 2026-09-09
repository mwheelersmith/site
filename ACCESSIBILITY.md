# Accessibility audit — 9 September 2026

Scope: local Hello (`/`) and CV (`/cv`) pages against WCAG 2.2 Level A and AA. Manual Chromium in-app browser review, rendered DOM measurements, theme contrast calculations and source inspection. Includes the responsive browser review immediately preceding this audit. This is a partial audit, not a conformance certification. No application code changed during this audit.

## Result

No confirmed A/AA failures identified in the checks completed. Important manual and automated checks remain outstanding; do not describe the site as fully WCAG compliant on this evidence alone.

## Browser checks completed

| Area              | Evidence                                                                                                                                                                                                                                                                     | Relevant criteria                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Skip navigation   | First Tab exposes a visible skip link. Enter moves focus to main on both routes; subsequent Tab reaches main-content controls.                                                                                                                                               | 2.4.1, 2.4.3                      |
| Keyboard controls | Theme and motion controls activate with Enter. Email reveal focuses the new mailto link. CV links and Print CV receive visible focus. No trap encountered in tested navigation. Print-dialog operation not retested.                                                         | 2.1.1, 2.1.2, 2.4.3, 2.4.7        |
| Tooltips          | Visible on keyboard focus; Escape dismisses without moving focus. Pointer hover bridge and persistent-open logic inspected in source; pointer traversal not exercised.                                                                                                       | 1.4.13                            |
| Motion            | Pause stops both background animations; state survives route navigation. Resume restarts them. At 320px, computed animation is `none` and the motion control is hidden.                                                                                                      | 2.2.2                             |
| Structure         | English language; one main landmark; labelled navigation; descriptive, distinct page titles; selected navigation has aria-current. CV hierarchy is h1 → h2 sections → h3 roles/qualification. Lists exposed in accessibility tree.                                           | 1.3.1, 2.4.2, 2.4.6, 3.1.1, 4.1.2 |
| Images and icons  | Portrait has meaningful alternative text. Decorative logo, arrows and contact icons hidden from accessibility tree. Controls have descriptive names.                                                                                                                         | 1.1.1, 4.1.2                      |
| Reflow            | Reviewed at 320, 390, 768 and desktop widths during current/preceding browser review. At 320px both routes and revealed email fit without horizontal page overflow. Native 400% zoom is still untested.                                                                      | 1.4.10, partial                   |
| Target sizes      | Desktop navigation/control hitboxes: theme and motion 44×44px; navigation at least 33×44px; logo 224×28px; email/social links at least 74×26px on CV; Print CV 136×45px; home social links 24px high. CV source link is inline prose and qualifies for the inline exception. | 2.5.8                             |
| Focus visibility  | Accent outline visible on light/dark surfaces; no focus obstruction observed. Email icon stays stationary; other arrows move on keyboard focus.                                                                                                                              | 2.4.7, 2.4.11                     |

## Contrast

Rendered light CV text measurements agree with palette calculations. Rendered dark homepage text and controls also checked. Ratios below are solid-colour pairs, not an exhaustive pixel-composited scan over the decorative texture.

| Pair                               |   Light |    Dark |
| ---------------------------------- | ------: | ------: |
| Body foreground / page             | 12.87:1 | 13.77:1 |
| Muted text / page                  |  5.21:1 |  7.90:1 |
| Accent / page (also focus outline) |  5.25:1 |  7.41:1 |
| Accent hover / page                |  7.22:1 | 10.13:1 |
| Filled button text / accent        |  5.73:1 |  7.41:1 |
| Selected text / selection          |  9.45:1 |  6.41:1 |

All listed text pairs exceed 4.5:1 (1.4.3). The accent focus outlines exceed 3:1 against the page (1.4.11). Subtle decorative separators and button borders have lower contrast; the controls remain identifiable through contrasting text/icons, so those borders alone do not establish a failure. Links within prose are underlined (1.4.1).

## Source checks and observations

- Native buttons and links; no positive tabindex, drag-only actions, authentication forms or timed tasks.
- Reduced-motion CSS disables background, reveal and arrow animations. Runtime preference switching remains untested.
- Custom tooltips repeat the accessible button name through aria-describedby. This may cause redundant speech in some screen readers; optional refinement, not a confirmed failure. Confirm with assistive technology before changing it.
- Email reveal changes focus to its resulting link; a separate live-region announcement is not necessary for this pattern.
- The earlier PDF review is separate from this web audit. PDF reading order does not establish PDF/UA compliance.

## Outstanding verification

1. Run a standard automated scanner such as axe on both routes and themes, including revealed email and open tooltips. No axe/Lighthouse scan was run here; browser evaluation was limited to read-only DOM measurements.
2. Test with NVDA/Firefox and VoiceOver/Safari: landmarks, list announcements, route announcements, changing control labels and email reveal. Accessibility-tree inspection is not a screen-reader test.
3. Test 200% text enlargement, 400% actual browser zoom, and WCAG text-spacing overrides (1.5 line height, 2em paragraph spacing, 0.12em letter spacing, 0.16em word spacing). Browser zoom key control was unavailable; 320px reflow alone does not close all these checks.
4. Exercise reduced-motion changes and forced-colours mode in a supported browser, and hover into tooltips using a pointer.
5. Repeat key interactions in Firefox/Safari and on an actual touch device. External LinkedIn, GitHub and booking pages are outside scope.

Reference: [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/).
