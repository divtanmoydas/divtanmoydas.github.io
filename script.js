// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable specific key combinations
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
    }

    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
    }
});