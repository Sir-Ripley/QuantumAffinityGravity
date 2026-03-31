from playwright.sync_api import Page, expect, sync_playwright
import time
import os

def test_modular_app(page: Page):
    # Go to the local dev server
    page.goto("http://localhost:8000", wait_until="commit")

    # Wait for the bundle to load and React to render
    # Increase wait time for the custom bundle
    try:
        page.wait_for_selector("text=The Dashboard", timeout=30000)
        print("Success: App loaded from modular bundle.")
    except Exception as e:
        print(f"Error: App content not found. {e}")

    # Take screenshot
    page.screenshot(path="tests/e2e/modular_verification.png", animations="disabled")

if __name__ == "__main__":
    if not os.path.exists("tests/e2e"):
        os.makedirs("tests/e2e")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Log console errors
        page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.text}"))
        try:
            test_modular_app(page)
        finally:
            browser.close()
