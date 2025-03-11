/**
 * Enhanced interactive effects for UI elements
 * This module provides functions for creating advanced interactive visual effects
 */

/**
 * Apply a mouse tracking effect to interactive cards
 * @param {string} selector - CSS selector for elements to enhance
 */
export function applyMouseInteraction(selector = ".interactive-card") {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  elements.forEach((element) => {
    element.classList.add("js-mouse-interaction");

    // Initial values
    let rect = element.getBoundingClientRect();

    // Add event listeners
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Handle mouse movement to update CSS variables
    function handleMouseMove(e) {
      rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      element.style.setProperty("--mouse-x", `${x}%`);
      element.style.setProperty("--mouse-y", `${y}%`);
    }

    // Reset on mouse leave
    function handleMouseLeave() {
      element.style.setProperty("--mouse-x", "50%");
      element.style.setProperty("--mouse-y", "50%");
    }

    // Handle window resize to update rectangle measurements
    window.addEventListener("resize", () => {
      rect = element.getBoundingClientRect();
    });
  });
}

/**
 * Apply tilt effect to elements
 * @param {string} selector - CSS selector for elements to enhance
 * @param {number} maxTilt - Maximum tilt angle in degrees
 */
export function applyTiltEffect(selector = ".tilt-card", maxTilt = 10) {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  elements.forEach((element) => {
    let rect = element.getBoundingClientRect();

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    function handleMouseMove(e) {
      rect = element.getBoundingClientRect();

      // Calculate tilt values
      const xPos = (e.clientX - rect.left) / rect.width;
      const yPos = (e.clientY - rect.top) / rect.height;

      const xTilt = (maxTilt / 2 - xPos * maxTilt).toFixed(2);
      const yTilt = (yPos * maxTilt - maxTilt / 2).toFixed(2);

      // Apply the transform
      element.style.transform = `perspective(1000px) rotateX(${yTilt}deg) rotateY(${xTilt}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    function handleMouseLeave() {
      // Reset transform on mouse leave
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }

    window.addEventListener("resize", () => {
      rect = element.getBoundingClientRect();
    });
  });
}

/**
 * Initialize all interactive effects
 */
export function initInteractiveEffects() {
  applyMouseInteraction();
  applyTiltEffect();
}

// Auto-initialize effects when DOM is loaded
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initInteractiveEffects);
  } else {
    initInteractiveEffects();
  }
}
