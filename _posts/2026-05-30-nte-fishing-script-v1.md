---
layout: post
title: "NTE Fishing Script v1 - Automating Fishing in Neverness to Everness"
date: 2026-05-07
categories: gaming automation
---

An AutoHotkey v2 script that automates fishing in Neverness to Everness by exploiting a chat menu bug to bypass the fishing minigame entirely.
Note: This bug has since been patched. See v2 for the updated script.

How It Works
The script exploits an invisible chat menu at the bottom left of the screen. Clicking it right after hooking a fish bypasses the minigame, and the fish is caught automatically once the timer expires.
After each catch, a PixelGetColor check determines whether the fish was successfully caught. A successful catch requires 2x Esc to close all dialogs, while a failed catch only needs 1x Esc. Sending extra Esc opens unrelated menus, so the pixel check decides which path to take.
Sequence
StepActionWait1Buffer2 sec2Press F (cast)3Wait for bite8 sec4Press F (hook)5Click chat menu (bypass minigame)6Wait for timer15 sec7Press Esc8Pixel check - send 2nd Esc if caught0.5 sec9Wait before next cycle2 sec

Prerequisites

Windows
AutoHotkey v2


Setup

Install AutoHotkey v2.
Right-click desktop > New > AutoHotkey Script. Paste the script below.
Configure the pixel check values using Window Spy (see Pixel Check Setup).
Right-click the .ahk file > Run as administrator.

Controls
KeyActionF8StartF9Stop

Script
ahk#Requires AutoHotkey v2.0
#MaxThreadsPerHotkey 2
SendMode "Event"
CoordMode "Mouse", "Screen"
CoordMode "Pixel", "Screen"
global running := false

WaitCheck(ms) {
    global running
    Loop ms // 50 {
        if !running
            return false
        Sleep 50
    }
    return true
}

ToolTip "Script loaded. Press F8 to start, F9 to stop."

F8:: {
    global running
    if running {
        return
    }
    running := true
    ToolTip "RUNNING"
    while running {
        if !WaitCheck(2000)
            break
        Send "{f}"
        if !WaitCheck(8000)
            break
        Send "{f}"
        if !WaitCheck(500)
            break
        Click 71, 1344
        if !WaitCheck(15000)
            break
        Send "{Escape}"
        if !WaitCheck(500)
            break
        ; check if fish was caught
        color := PixelGetColor(1484, 1316)
        if (color = "0xD8D8D8") {
            Send "{Escape}"
        }
        if !WaitCheck(2000)
            break
    }
    ToolTip "STOPPED"
}

F9:: {
    global running := false
}

Pixel Check Setup
You need to configure the click coordinate and pixel check values to match your monitor setup.

Run any AHK script and open Window Spy (right-click the AHK tray icon).
Catch a fish using the bug (click the invisible chat menu after hooking with F).
After the catch, press Esc once. The chat menu should still be visible.
Hover over the chat menu and note the Screen X, Y and Color.
Update the script:

ahkClick YOUR_X, YOUR_Y                          ; chat menu click position
color := PixelGetColor(YOUR_X, YOUR_Y)        ; pixel check position
if (color = "YOUR_COLOR") {                    ; color when menu is open

Performance
MetricValueManual fishing~11-16 sec per fishScript (v1)~25-26 sec per cycleBenchmark130 fish in 2 hours

Troubleshooting Logs
Script not sending inputs to the game
Problem: No inputs received by the game.
Fix: Run the .ahk file as administrator.
Can only start and stop once
Problem: F8 won't restart after F9.
Fix: Added #MaxThreadsPerHotkey 2 to allow re-entry into the hotkey.
F9 not responding
Problem: F9 does nothing during long waits.
Fix: Replaced Sleep with WaitCheck() that checks the stop flag every 50ms.
Extra Esc opening menus
Problem: Successful catch needs 2x Esc, failed catch needs 1x. Sending extra opens unrelated menus.
Fix: PixelGetColor check after the first Esc to decide whether to send a second.
PixelGetColor syntax error
Problem: PixelGetColor &color, x, y throws a VarRef error.
Fix: Use color := PixelGetColor(x, y) instead (AHK v2 syntax).
Pixel check failing on non-primary monitor
Problem: Script takes ~52 sec on the right monitor instead of ~26 sec.
Fix: Monitor color profiles differ, so the pixel color doesn't match. Run the game on the primary monitor, or recapture the color using Window Spy on the target monitor.
