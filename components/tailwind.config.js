// tailwind.config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary": "#ffffff",
                "primary-container": "#0047ab",
                "surface": "#fbf9f8",
                "on-primary-fixed": "#001946",
                "surface-container-highest": "#e4e2e1",
                "inverse-primary": "#b1c5ff",
                "on-tertiary": "#ffffff",
                "surface-bright": "#fbf9f8",
                "primary-fixed-dim": "#b1c5ff",
                "surface-dim": "#dcd9d9",
                "inverse-on-surface": "#f3f0f0",
                "surface-tint": "#2559bd",
                "on-primary-container": "#a5bdff",
                "error-container": "#ffdad6",
                "background": "#fbf9f8",
                "error": "#ba1a1a",
                "on-background": "#1b1c1c",
                "on-secondary": "#ffffff",
                "on-tertiary-fixed-variant": "#004d62",
                "on-tertiary-fixed": "#001f29",
                "surface-container-low": "#f6f3f2",
                "surface-variant": "#e4e2e1",
                "on-error-container": "#93000a",
                "inverse-surface": "#303030",
                "tertiary-container": "#00546a",
                "on-primary-fixed-variant": "#00419e",
                "on-secondary-fixed": "#00210c",
                "tertiary-fixed": "#baeaff",
                "primary-fixed": "#dae2ff",
                "on-error": "#ffffff",
                "secondary-container": "#6bfe9c",
                "on-surface": "#1b1c1c",
                "on-surface-variant": "#434653",
                "primary": "#00327d",
                "on-tertiary-container": "#81c8e5",
                "outline": "#737784",
                "secondary-fixed": "#6bfe9c",
                "secondary-fixed-dim": "#4ae183",
                "secondary": "#006d37",
                "on-secondary-fixed-variant": "#005228",
                "tertiary-fixed-dim": "#89d0ed",
                "on-secondary-container": "#00743a",
                "outline-variant": "#c3c6d5",
                "surface-container-lowest": "#ffffff",
                "surface-container": "#f0eded",
                "tertiary": "#003c4c",
                "surface-container-high": "#eae8e7"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "stack-sm": "12px",
                "stack-lg": "48px",
                "margin-mobile": "16px",
                "margin-desktop": "64px",
                "gutter": "24px",
                "base": "8px",
                "stack-md": "24px",
                "container-max": "1280px"
            },
            "fontFamily": {
                "headline-lg-mobile": ["metropolis", "sans-serif"],
                "display-lg": ["metropolis", "sans-serif"],
                "vietnamese-body": ["inter", "sans-serif"],
                "title-md": ["metropolis", "sans-serif"],
                "body-lg": ["inter", "sans-serif"],
                "label-sm": ["jetbrainsMono", "monospace"],
                "body-md": ["inter", "sans-serif"],
                "headline-lg": ["metropolis", "sans-serif"]
            },
            "fontSize": {
                "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "vietnamese-body": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "title-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}]
            }
        }
    }
}